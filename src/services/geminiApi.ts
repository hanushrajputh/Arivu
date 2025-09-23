const GEMINI_API_KEY = 'AIzaSyALwvF2u36DQXC6GMzVCGJrBny5Qk9_xNk';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
  timestamp?: Date;
}

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export class GeminiChatService {
  private systemPrompt = `You are 'Thozhan' (தோழன் - meaning "friend" in Tamil), an expert career counselor and learning assistant from India. You are friendly, encouraging, and supportive. You can communicate fluently in English, Hinglish, and Tanglish (Tamil-English mix).

Your primary goals:
1. Help users with career questions and clarify concepts from their learning path
2. Provide technical explanations in simple, understandable terms
3. Encourage learners and boost their confidence
4. Relate technical concepts to real-world applications
5. Be culturally aware and use appropriate regional references when helpful

Guidelines:
- Keep responses concise but helpful (2-3 sentences max for quick questions)
- Use encouraging language and positive reinforcement
- When explaining technical concepts, use analogies and examples
- If asked about Docker, Kubernetes, DevOps, or cloud technologies, provide practical, beginner-friendly explanations
- You can switch between English, Hinglish, and Tanglish based on user preference
- Always end with a follow-up question or encouragement to keep learning

Remember: You're not just an AI assistant, you're a supportive friend helping someone achieve their career dreams.`;

  async sendMessage(userMessage: string, conversationHistory: ChatMessage[] = []): Promise<string> {
    console.log('Sending message to Gemini:', userMessage);
    
    try {
      // Prepare conversation context
      const context = conversationHistory
        .slice(-5) // Keep last 5 messages for context
        .map(msg => `${msg.type === 'user' ? 'User' : 'Thozhan'}: ${msg.message}`)
        .join('\n');

      const fullPrompt = `${this.systemPrompt}

Previous conversation:
${context}

User: ${userMessage}

Thozhan:`;

      console.log('Making API request to Gemini...');
      
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: fullPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });

      console.log('API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Gemini API error:', response.status, errorText);
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data: GeminiResponse = await response.json();
      console.log('Gemini API response:', data);
      
      if (data.candidates && data.candidates.length > 0) {
        const botResponse = data.candidates[0].content.parts[0].text.trim();
        console.log('Bot response:', botResponse);
        return botResponse;
      } else {
        throw new Error('No response from Gemini API');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      // Fallback responses for common topics
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('docker')) {
        return "Great question about Docker! Think of Docker containers like lunch boxes - they package your application with everything it needs to run. This makes it easy to move your app between different computers without worrying about compatibility issues. Would you like me to explain how this helps in DevOps?";
      } else if (lowerMessage.includes('kubernetes')) {
        return "Kubernetes is like a smart manager for your Docker containers! It automatically handles scaling, load balancing, and keeps your applications running smoothly. It's especially useful when you have many containers to manage. What specific aspect would you like to know more about?";
      } else if (lowerMessage.includes('devops')) {
        return "DevOps is all about bringing development and operations teams together! It's like being a bridge between coding and deployment. The goal is to make software delivery faster and more reliable. Are you interested in learning about specific DevOps tools?";
      } else {
        return "I'm here to help with your learning journey! Feel free to ask me about Docker, Kubernetes, DevOps concepts, or any technical doubts you have. I'll explain things in a simple, easy-to-understand way. What would you like to learn about?";
      }
    }
  }

  // Method for getting quick responses without full conversation context
  async getQuickResponse(question: string): Promise<string> {
    return this.sendMessage(question, []);
  }

  // Method for validating API connection
  async testConnection(): Promise<boolean> {
    try {
      const response = await this.sendMessage("Hello");
      return response.length > 0;
    } catch (error) {
      console.error('Gemini API connection test failed:', error);
      return false;
    }
  }
}

export const geminiChat = new GeminiChatService();