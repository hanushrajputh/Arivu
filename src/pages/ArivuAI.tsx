import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, MessageSquare, Zap } from 'lucide-react';
import { geminiChat, ChatMessage } from '../services/geminiApi';

const ArivuAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      type: 'bot', 
      message: 'Hi! I\'m Arivu AI (அறிவு), your intelligent career counselor. I can help you with learning paths, skill development, career guidance, and technical questions. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage = inputMessage.trim();
    const newMessages = [
      ...messages,
      { type: 'user' as const, message: userMessage, timestamp: new Date() }
    ];
    
    setMessages(newMessages);
    setInputMessage('');
    setIsTyping(true);

    try {
      const botResponse = await geminiChat.sendMessage(userMessage, messages);
      
      setMessages([
        ...newMessages,
        { type: 'bot' as const, message: botResponse, timestamp: new Date() }
      ]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages([
        ...newMessages,
        { 
          type: 'bot' as const, 
          message: 'I apologize, but I\'m having trouble connecting right now. However, I\'m here to help with your career questions, learning paths, and technical guidance! Please try again in a moment.',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What skills do I need for a DevOps career?",
    "How can I build a strong portfolio?",
    "What are the best learning resources for Python?",
    "How do I prepare for technical interviews?",
    "What's the difference between Docker and Kubernetes?",
    "How can I transition into tech from a non-tech background?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="relative z-10 pt-20">
      {/* Header Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-teal-600/25">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Arivu AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your intelligent career counselor powered by advanced AI. Get personalized guidance for your learning journey.
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
            
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-teal-600/20 to-teal-500/20 border-b border-gray-700/50 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Arivu AI Assistant</h3>
                  <p className="text-teal-400 text-sm">Online • Ready to help with your career journey</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-orange-600 to-orange-500' 
                        : 'bg-gradient-to-r from-teal-600 to-teal-500'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl p-4 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
                        : 'bg-gray-700/50 text-gray-200 border border-gray-600/50'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.message}</p>
                      {message.timestamp && (
                        <p className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-orange-100' : 'text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-700/50 border border-gray-600/50 rounded-2xl p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-6 pb-4">
                <h4 className="text-white font-medium mb-3 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-teal-400" />
                  Quick Questions to Get Started:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left p-3 bg-gray-700/30 hover:bg-teal-500/20 border border-gray-600/50 hover:border-teal-500/50 rounded-lg text-gray-300 hover:text-teal-400 text-sm transition-all duration-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-gray-700/50 p-6">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about career paths, skills, learning resources, or any technical questions..."
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-none"
                    rows={2}
                    disabled={isTyping}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg shadow-teal-600/25"
                >
                  {isTyping ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2 text-center">
                Press Enter to send • Shift+Enter for new line
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6 text-center">
              <Zap className="w-8 h-8 text-teal-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Instant Guidance</h3>
              <p className="text-gray-400 text-sm">Get immediate answers to your career and technical questions</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6 text-center">
              <Bot className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-400 text-sm">Tailored recommendations based on your goals and background</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6 text-center">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">24/7 Available</h3>
              <p className="text-gray-400 text-sm">Always here to support your learning journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArivuAI;