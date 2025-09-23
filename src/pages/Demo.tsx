import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, Star, Users, Target, MessageSquare, Search, Award, TrendingUp, BarChart3, Radar, Play, X } from 'lucide-react';
import { geminiChat, ChatMessage } from '../services/geminiApi';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
}

const Demo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Karthik',
    location: 'Avadi, Chennai',
    aspiration: 'Cloud DevOps Engineer',
    skills: {
      'Linux Basics': 85,
      'Python': 60,
      'Docker': 25,
      'Kubernetes': 15,
      'AWS': 30,
      'CI/CD': 20
    },
    completedModules: 0,
    impactBadge: null
  });

  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { type: 'bot', message: 'Hi Karthik! I\'m Thozhan (தோழன்), your AI career counselor. How can I help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const [demoSteps, setDemoSteps] = useState<DemoStep[]>([
    {
      id: 'onboarding',
      title: 'Onboarding & Assessment',
      description: 'Karthik logs in and takes a diagnostic quiz for Cloud DevOps Engineer',
      component: null
    },
    {
      id: 'analysis',
      title: 'Analysis & Recommendation',
      description: 'Personalized dashboard shows strengths, weaknesses, and learning path',
      component: null
    },
    {
      id: 'support',
      title: 'Support & Verification',
      description: 'Karthik interacts with Thozhan AI and completes learning modules',
      component: null
    },
    {
      id: 'impact',
      title: 'Impact & Validation',
      description: 'Earning Impact Badge by helping local NGO with Docker container',
      component: null
    },
    {
      id: 'hiring',
      title: 'Corporate Hiring',
      description: 'Recruiter finds Karthik through the talent marketplace',
      component: null
    }
  ]);

  useEffect(() => {
    const updatedSteps = [
      {
        id: 'onboarding',
        title: 'Onboarding & Assessment',
        description: 'Karthik logs in and takes a diagnostic quiz for Cloud DevOps Engineer',
        component: <OnboardingStep userProfile={userProfile} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} />
      },
      {
        id: 'analysis',
        title: 'Analysis & Recommendation',
        description: 'Personalized dashboard shows strengths, weaknesses, and learning path',
        component: <AnalysisStep userProfile={userProfile} />
      },
      {
        id: 'support',
        title: 'Support & Verification',
        description: 'Karthik interacts with Thozhan AI and completes learning modules',
        component: <SupportStep 
          userProfile={userProfile} 
          setUserProfile={setUserProfile}
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          chatInput={chatInput}
          setChatInput={setChatInput}
          isTyping={isTyping}
          setIsTyping={setIsTyping}
        />
      },
      {
        id: 'impact',
        title: 'Impact & Validation',
        description: 'Earning Impact Badge by helping local NGO with Docker container',
        component: <ImpactStep userProfile={userProfile} setUserProfile={setUserProfile} />
      },
      {
        id: 'hiring',
        title: 'Corporate Hiring',
        description: 'Recruiter finds Karthik through the talent marketplace',
        component: <HiringStep userProfile={userProfile} />
      }
    ];
    setDemoSteps(updatedSteps);
  }, [userProfile, quizAnswers, chatMessages, chatInput, isTyping]);

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setUserProfile({
      name: 'Karthik',
      location: 'Avadi, Chennai',
      aspiration: 'Cloud DevOps Engineer',
      skills: {
        'Linux Basics': 85,
        'Python': 60,
        'Docker': 25,
        'Kubernetes': 15,
        'AWS': 30,
        'CI/CD': 20
      },
      completedModules: 0,
      impactBadge: null
    });
    setQuizAnswers([]);
    setChatMessages([
      { type: 'bot', message: 'Hi Karthik! I\'m Thozhan (தோழன்), your AI career counselor. How can I help you today?' }
    ]);
    setChatInput('');
    setIsTyping(false);
  };

  if (!isPlaying) {
    return (
      <div className="relative z-10 pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Try the Demo
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience Karthik's complete journey from aspiration to hiring through our social enterprise platform.
            </p>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl p-12 mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  K
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Meet Karthik</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                A student from Avadi, Chennai, aspiring to become a Cloud DevOps Engineer. 
                Watch his complete journey through our platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {demoSteps.map((step, index) => (
                  <div key={step.id} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-xs">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <button
                onClick={startDemo}
                className="px-12 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold rounded-xl shadow-2xl shadow-orange-600/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto text-lg"
              >
                <Play className="w-6 h-6" />
                <span>Start Demo Journey</span>
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                This demo showcases the complete MVP loop from assessment to hiring
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-20">
      {/* Demo Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Demo: Karthik's Journey</h1>
              <p className="text-gray-300">Step {currentStep + 1} of {demoSteps.length}: {demoSteps[currentStep].title}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={resetDemo}
                className="px-4 py-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <X className="w-4 h-4" />
                <span>Exit Demo</span>
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-to-r from-orange-600 to-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8 mb-8">
            {demoSteps[currentStep].component}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                currentStep === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              <span>Previous</span>
            </button>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">{demoSteps[currentStep].description}</p>
            </div>
            
            <button
              onClick={nextStep}
              disabled={currentStep === demoSteps.length - 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                currentStep === demoSteps.length - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white shadow-lg shadow-orange-600/25'
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Demo Step Components
const OnboardingStep: React.FC<{
  userProfile: any;
  quizAnswers: number[];
  setQuizAnswers: (answers: number[]) => void;
}> = ({ userProfile, quizAnswers, setQuizAnswers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "How comfortable are you with Linux command line?",
      options: ["Beginner", "Intermediate", "Advanced", "Expert"],
      skill: "Linux Basics"
    },
    {
      question: "What's your experience with containerization?",
      options: ["Never used", "Basic Docker", "Docker + Compose", "Production experience"],
      skill: "Docker"
    },
    {
      question: "How familiar are you with cloud platforms?",
      options: ["No experience", "Basic AWS/Azure", "Multiple platforms", "Cloud architect level"],
      skill: "AWS"
    },
    {
      question: "Your experience with CI/CD pipelines?",
      options: ["What's CI/CD?", "Used Jenkins/GitHub Actions", "Built pipelines", "DevOps expert"],
      skill: "CI/CD"
    },
    {
      question: "Python scripting proficiency?",
      options: ["Never coded", "Basic scripts", "Automation tools", "Advanced Python"],
      skill: "Python"
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setQuizAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowResults(false);
  };

  useEffect(() => {
    // Reset quiz when component mounts or when starting fresh
    if (quizAnswers.length === 0) {
      resetQuiz();
    }
  }, []);
  
  if (showResults) {
    return (
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">Assessment Complete!</h2>
        <p className="text-gray-300 mb-6">
          Great job, {userProfile.name}! We've analyzed your skills for {userProfile.aspiration}.
        </p>
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-2">Next: Personalized Learning Path</h3>
          <p className="text-gray-300 text-sm">
            Based on your responses, we'll create a customized learning journey to help you become a Cloud DevOps Engineer.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
          K
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Welcome, {userProfile.name}!</h2>
        <p className="text-gray-300">Let's assess your current skills for: <span className="text-orange-400 font-semibold">{userProfile.aspiration}</span></p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-600 to-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold text-white mb-6">{questions[currentQuestion].question}</h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left bg-gray-700/50 hover:bg-orange-500/20 border border-gray-600 hover:border-orange-500/50 rounded-lg text-white transition-all duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalysisStep: React.FC<{ userProfile: any }> = ({ userProfile }) => {
  const marketSkills = {
    'Linux Basics': 90,
    'Docker': 95,
    'Kubernetes': 85,
    'AWS': 90,
    'Python': 75,
    'CI/CD': 88
  };

  const learningPath = [
    {
      title: "Docker Fundamentals",
      source: "YouTube - TechWorld with Nana",
      duration: "4 hours",
      status: "recommended",
      description: "Master containerization basics"
    },
    {
      title: "Kubernetes Essentials",
      source: "Coursera - Google Cloud",
      duration: "6 hours", 
      status: "locked",
      description: "Container orchestration"
    },
    {
      title: "AWS DevOps Pipeline",
      source: "AWS Training",
      duration: "8 hours",
      status: "locked", 
      description: "End-to-end CI/CD on AWS"
    }
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Your Personalized Dashboard</h2>
        <p className="text-gray-300">Welcome back, {userProfile.name}! Here's your learning analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Skills Analysis */}
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <BarChart3 className="w-6 h-6 mr-3 text-orange-400" />
            Your Skill Analysis
          </h3>
          <div className="space-y-4">
            {Object.entries(userProfile.skills).map(([skill, level]) => (
              <div key={skill}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill}</span>
                  <span className={`font-semibold ${level >= 70 ? 'text-green-400' : level >= 40 ? 'text-amber-400' : 'text-red-400'}`}>
                    {level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${level >= 70 ? 'bg-green-500' : level >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Skill Gap */}
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-teal-400" />
            Market Skill Gap
          </h3>
          <div className="space-y-4">
            {Object.entries(marketSkills).map(([skill, marketLevel]) => {
              const userLevel = userProfile.skills[skill] || 0;
              const gap = marketLevel - userLevel;
              return (
                <div key={skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill}</span>
                    <span className={`text-sm ${gap > 30 ? 'text-red-400' : gap > 10 ? 'text-amber-400' : 'text-green-400'}`}>
                      Gap: {gap}%
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${userLevel}%` }}
                      ></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${marketLevel}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Your Level</span>
                    <span>Market Demand</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-3 text-purple-400" />
          Your Recommended Learning Path
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningPath.map((course, index) => (
            <div key={index} className={`border rounded-xl p-6 ${
              course.status === 'recommended' 
                ? 'border-orange-500/50 bg-orange-500/10' 
                : 'border-gray-600 bg-gray-700/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-white">{course.title}</h4>
                {course.status === 'recommended' && (
                  <Star className="w-5 h-5 text-orange-400 fill-current" />
                )}
              </div>
              <p className="text-gray-300 text-sm mb-3">{course.description}</p>
              <div className="text-xs text-gray-400 mb-4">
                <div>{course.source}</div>
                <div>{course.duration}</div>
              </div>
              <button className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 ${
                course.status === 'recommended'
                  ? 'bg-orange-600 hover:bg-orange-500 text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}>
                {course.status === 'recommended' ? 'Start Learning' : 'Locked'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SupportStep: React.FC<{
  userProfile: any;
  setUserProfile: (profile: any) => void;
  chatMessages: any[];
  setChatMessages: (messages: any[]) => void;
  chatInput: string;
  setChatInput: (input: string) => void;
  isTyping: boolean;
  setIsTyping: (typing: boolean) => void;
}> = ({ userProfile, setUserProfile, chatMessages, setChatMessages, chatInput, setChatInput, isTyping, setIsTyping }) => {
  const [showChat, setShowChat] = useState(false);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    const updatedMessages = [
      ...chatMessages,
      { type: 'user', message: userMessage, timestamp: new Date() }
    ];
    
    setChatMessages(updatedMessages);
    setChatInput('');
    setIsTyping(true);

    try {
      const botResponse = await geminiChat.sendMessage(userMessage, chatMessages);
      
      setChatMessages([
        ...updatedMessages,
        { type: 'bot', message: botResponse, timestamp: new Date() }
      ]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      setChatMessages([
        ...updatedMessages,
        { type: 'bot', message: 'I\'m here to help with Docker concepts! Try asking: "What is Docker?" or "How do containers work?"', timestamp: new Date() }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const completeModule = () => {
    setUserProfile({
      ...userProfile,
      completedModules: userProfile.completedModules + 1,
      skills: {
        ...userProfile.skills,
        'Docker': 75
      }
    });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Learning & Support</h2>
        <p className="text-gray-300">Karthik is progressing through his Docker fundamentals course</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Learning Progress */}
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-green-400" />
            Current Module: Docker Fundamentals
          </h3>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>85% Complete</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-gradient-to-r from-green-600 to-green-500 h-3 rounded-full w-5/6"></div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">What are containers?</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Docker vs Virtual Machines</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Basic Docker Commands</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-amber-400" />
              <span className="text-gray-300">Creating Dockerfiles</span>
            </div>
          </div>

          <button
            onClick={completeModule}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Complete Module
          </button>
        </div>

        {/* AI Chatbot */}
        <div className="bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-teal-400" />
              Thozhan AI Assistant
            </h3>
            <button
              onClick={() => setShowChat(!showChat)}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-all duration-300"
            >
              {showChat ? 'Hide Chat' : 'Ask Doubt'}
            </button>
          </div>

          {showChat && (
            <div>
              <div className="h-64 bg-gray-900/50 rounded-lg p-4 mb-4 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-3 rounded-lg max-w-xs ${
                      msg.type === 'user' 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-gray-700 text-gray-200'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-left mb-4">
                    <div className="inline-block p-3 rounded-lg bg-gray-700 text-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about Docker concepts..."
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[60px]"
                  disabled={isTyping || !chatInput.trim()}
                >
                  {isTyping ? '...' : 'Send'}
                </button>
              </div>
            </div>
          )}

          {!showChat && (
            <div className="text-center py-8">
              <MessageSquare className="w-16 h-16 text-teal-400 mx-auto mb-4 opacity-50" />
              <p className="text-gray-400">
                Thozhan (தோழன்) is ready to help with your Docker questions in English, Hindi, or Tamil!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ImpactStep: React.FC<{
  userProfile: any;
  setUserProfile: (profile: any) => void;
}> = ({ userProfile, setUserProfile }) => {
  const [showProject, setShowProject] = useState(false);
  const [projectCompleted, setProjectCompleted] = useState(false);

  const completeProject = () => {
    setProjectCompleted(true);
    setUserProfile({
      ...userProfile,
      impactBadge: {
        project: 'Website Containerization',
        ngo: 'Chennai Education Foundation',
        date: new Date().toLocaleDateString()
      }
    });
  };

  useEffect(() => {
    // Reset project state when component mounts
    if (!userProfile.impactBadge) {
      setShowProject(false);
      setProjectCompleted(false);
    }
  }, [userProfile.impactBadge]);
  
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Impact & Validation</h2>
        <p className="text-gray-300">Time to earn your Impact Badge by helping the community!</p>
      </div>

      {!projectCompleted ? (
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-12 h-12 text-purple-400 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-white">Impact Badge Opportunity</h3>
                <p className="text-purple-400">Help a local NGO with your new Docker skills</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Project: Website Containerization</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-300 mb-2">NGO Details:</h5>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Chennai Education Foundation</li>
                    <li>• Serves 500+ underprivileged students</li>
                    <li>• Needs help containerizing their website</li>
                    <li>• Currently facing deployment issues</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-300 mb-2">Your Task:</h5>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Create Dockerfile for their Node.js app</li>
                    <li>• Set up docker-compose for database</li>
                    <li>• Document deployment process</li>
                    <li>• Estimated time: 4-6 hours</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowProject(true)}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Accept Project
              </button>
              <button className="px-6 py-3 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-400 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {showProject && (
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Project Simulation</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 mb-4 font-mono text-sm text-green-400">
                <div>$ docker build -t cef-website .</div>
                <div>$ docker-compose up -d</div>
                <div>✓ Website containerized successfully</div>
                <div>✓ Database connection established</div>
                <div>✓ Documentation created</div>
              </div>
              <button
                onClick={completeProject}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Submit Completed Project
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-600/25">
            <Award className="w-16 h-16 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">Impact Badge Earned! 🎉</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Congratulations! You've successfully helped Chennai Education Foundation containerize their website.
          </p>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-6 max-w-md mx-auto">
            <h4 className="text-purple-400 font-semibold mb-2">Impact Badge Details</h4>
            <div className="text-left space-y-2 text-gray-300">
              <div><strong>Project:</strong> {userProfile.impactBadge.project}</div>
              <div><strong>Organization:</strong> {userProfile.impactBadge.ngo}</div>
              <div><strong>Completed:</strong> {userProfile.impactBadge.date}</div>
              <div><strong>Skills Verified:</strong> Docker, Problem Solving, Community Impact</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HiringStep: React.FC<{ userProfile: any }> = ({ userProfile }) => {
  const [searchFilters, setSearchFilters] = useState({
    skills: 'Docker',
    experience: 'Entry Level',
    location: 'Chennai'
  });

  const [searchResults, setSearchResults] = useState(false);

  const handleSearch = () => {
    setSearchResults(true);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Corporate Hiring View</h2>
        <p className="text-gray-300">A recruiter from TechFlow Solutions is searching for talent</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search Interface */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Search className="w-5 h-5 mr-3 text-blue-400" />
              Talent Search
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Required Skills</label>
                <input
                  type="text"
                  value={searchFilters.skills}
                  onChange={(e) => setSearchFilters({...searchFilters, skills: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Experience Level</label>
                <select
                  value={searchFilters.experience}
                  onChange={(e) => setSearchFilters({...searchFilters, experience: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500"
                >
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Location</label>
                <select
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500"
                >
                  <option>Chennai</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                  <option>Remote</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="impact" className="rounded" defaultChecked />
                <label htmlFor="impact" className="text-gray-300 text-sm">Has Impact Badge</label>
              </div>
              
              <button 
                onClick={handleSearch}
                className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Search Candidates
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Search Results</h3>
              <span className="text-gray-400 text-sm">
                {searchResults ? '1 verified candidate found' : 'Click search to find candidates'}
              </span>
            </div>
            
            {searchResults ? (
              /* Karthik's Profile Card */
              <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-orange-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      K
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{userProfile.name}</h4>
                      <p className="text-gray-400">{userProfile.location}</p>
                      <p className="text-orange-400 font-medium">{userProfile.aspiration}</p>
                    </div>
                  </div>
                  
                  {userProfile.impactBadge && (
                    <div className="flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-lg px-3 py-1">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-medium">Impact Badge</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <h5 className="text-gray-300 font-medium mb-2">Verified Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(userProfile.skills)
                      .filter(([_, level]) => level >= 70)
                      .map(([skill, level]) => (
                        <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                          {skill} ({level}%)
                        </span>
                      ))}
                  </div>
                </div>
                
                {userProfile.impactBadge && (
                  <div className="mb-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <h5 className="text-purple-400 font-medium mb-1">Community Impact Project:</h5>
                    <p className="text-gray-300 text-sm">
                      Helped {userProfile.impactBadge.ngo} with {userProfile.impactBadge.project}
                    </p>
                  </div>
                )}
                
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300">
                    View Full Portfolio
                  </button>
                  <button className="px-6 py-2 border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold rounded-lg transition-all duration-300">
                    Invite to Interview
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Use the search filters to find verified candidates</p>
              </div>
            )}
            
            {searchResults && (
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <h4 className="text-green-400 font-semibold">Hiring Metrics</h4>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">45%</div>
                    <div className="text-gray-400 text-sm">Time-to-hire saved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">92%</div>
                    <div className="text-gray-400 text-sm">Skill match accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">73%</div>
                    <div className="text-gray-400 text-sm">Diversity improvement</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
