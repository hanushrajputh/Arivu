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
  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentStep, setAssessmentStep] = useState('identity'); // identity, questions, proctoring, results
  const [assessmentAnswers, setAssessmentAnswers] = useState<number[]>([]);
  const [currentAssessmentQuestion, setCurrentAssessmentQuestion] = useState(0);
  const [isProctoring, setIsProctoring] = useState(false);
  const [proctoringChecks, setProctoringChecks] = useState({
    faceDetected: false,
    screenRecording: false,
    tabSwitchDetection: false,
    environmentScan: false
  });

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
    setShowAssessment(true);
    setAssessmentStep('identity');
  };

  const assessmentQuestions = [
    {
      question: "What is the primary purpose of Docker containers?",
      options: [
        "To replace virtual machines entirely",
        "To package applications with their dependencies for consistent deployment",
        "To provide better security than traditional applications",
        "To increase application performance"
      ],
      correct: 1
    },
    {
      question: "Which command is used to build a Docker image from a Dockerfile?",
      options: [
        "docker create",
        "docker run",
        "docker build",
        "docker make"
      ],
      correct: 2
    },
    {
      question: "What is the difference between a Docker image and a Docker container?",
      options: [
        "Images are running instances, containers are templates",
        "There is no difference, they are the same thing",
        "Images are templates, containers are running instances",
        "Images are smaller than containers"
      ],
      correct: 2
    },
    {
      question: "Which file is used to define the steps to build a Docker image?",
      options: [
        "docker-compose.yml",
        "Dockerfile",
        "package.json",
        "config.docker"
      ],
      correct: 1
    },
    {
      question: "What does the 'docker run -p 8080:80' command do?",
      options: [
        "Runs 8080 containers on port 80",
        "Maps host port 8080 to container port 80",
        "Creates 80 containers on port 8080",
        "Sets the container memory to 8080MB"
      ],
      correct: 1
    }
  ];

  const startProctoring = () => {
    setIsProctoring(true);
    setAssessmentStep('proctoring');
    
    // Simulate proctoring checks
    const checks = ['faceDetected', 'screenRecording', 'tabSwitchDetection', 'environmentScan'];
    checks.forEach((check, index) => {
      setTimeout(() => {
        setProctoringChecks(prev => ({ ...prev, [check]: true }));
      }, (index + 1) * 1000);
    });
    
    // Start assessment after all checks
    setTimeout(() => {
      setAssessmentStep('questions');
      setIsProctoring(false);
    }, 5000);
  };

  const handleAssessmentAnswer = (answerIndex: number) => {
    const newAnswers = [...assessmentAnswers];
    newAnswers[currentAssessmentQuestion] = answerIndex;
    setAssessmentAnswers(newAnswers);

    if (currentAssessmentQuestion < assessmentQuestions.length - 1) {
      setCurrentAssessmentQuestion(currentAssessmentQuestion + 1);
    } else {
      // Calculate score
      const score = newAnswers.reduce((total, answer, index) => {
        return total + (answer === assessmentQuestions[index].correct ? 1 : 0);
      }, 0);
      
      setAssessmentStep('results');
      
      // Update user profile after assessment
      setTimeout(() => {
        setUserProfile({
          ...userProfile,
          completedModules: userProfile.completedModules + 1,
          skills: {
            ...userProfile.skills,
            'Docker': Math.min(95, 60 + (score * 7)) // Score affects skill level
          }
        });
        setShowAssessment(false);
        setAssessmentStep('identity');
        setAssessmentAnswers([]);
        setCurrentAssessmentQuestion(0);
      }, 3000);
    }
  };

  if (showAssessment) {
    return (
      <div className="max-w-4xl mx-auto">
        {assessmentStep === 'identity' && (
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Docker Fundamentals Assessment</h2>
            <p className="text-gray-300 mb-8">
              Complete this proctored assessment to validate your Docker knowledge and earn your skill badge.
            </p>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-purple-400 font-semibold mb-4">Assessment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">5 Multiple Choice Questions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">10 Minutes Time Limit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">Proctored Environment</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">Face Detection Required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">Screen Recording Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">Tab Switch Detection</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 justify-center">
              <button
                onClick={startProctoring}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Start Proctored Assessment
              </button>
              <button
                onClick={() => setShowAssessment(false)}
                className="px-6 py-3 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-400 rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        
        {assessmentStep === 'proctoring' && (
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Setting Up Proctoring</h2>
            <p className="text-gray-300 mb-8">
              Please wait while we initialize the proctored environment...
            </p>
            
            <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                {Object.entries(proctoringChecks).map(([check, completed]) => (
                  <div key={check} className="flex items-center justify-between">
                    <span className="text-gray-300 capitalize">
                      {check.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <div className="flex items-center space-x-2">
                      {completed ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                      )}
                      <span className={`text-sm ${completed ? 'text-green-400' : 'text-amber-400'}`}>
                        {completed ? 'Ready' : 'Checking...'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {Object.values(proctoringChecks).every(Boolean) && (
              <div className="text-green-400 font-semibold">
                All systems ready! Starting assessment...
              </div>
            )}
          </div>
        )}
        
        {assessmentStep === 'questions' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Docker Assessment</h2>
              <div className="flex items-center space-x-4">
                <div className="text-red-400 font-semibold">🔴 RECORDING</div>
                <div className="text-amber-400">⏱️ 8:45 remaining</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Question {currentAssessmentQuestion + 1} of {assessmentQuestions.length}</span>
                <span>{Math.round(((currentAssessmentQuestion + 1) / assessmentQuestions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentAssessmentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                {assessmentQuestions[currentAssessmentQuestion].question}
              </h3>
              <div className="space-y-3">
                {assessmentQuestions[currentAssessmentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAssessmentAnswer(index)}
                    className="w-full p-4 text-left bg-gray-700/50 hover:bg-purple-500/20 border border-gray-600 hover:border-purple-500/50 rounded-lg text-white transition-all duration-300"
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-red-400 text-sm">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span>Proctoring Active - Face detected, no tab switches detected</span>
              </div>
            </div>
          </div>
        )}
        
        {assessmentStep === 'results' && (
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Assessment Complete!</h2>
            <p className="text-gray-300 mb-6">
              Congratulations! You've successfully completed the Docker Fundamentals assessment.
            </p>
            
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {assessmentAnswers.reduce((total, answer, index) => {
                      return total + (answer === assessmentQuestions[index].correct ? 1 : 0);
                    }, 0)}/5
                  </div>
                  <div className="text-gray-300 text-sm">Correct Answers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {Math.round((assessmentAnswers.reduce((total, answer, index) => {
                      return total + (answer === assessmentQuestions[index].correct ? 1 : 0);
                    }, 0) / 5) * 100)}%
                  </div>
                  <div className="text-gray-300 text-sm">Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">PASS</div>
                  <div className="text-gray-300 text-sm">Status</div>
                </div>
              </div>
            </div>
            
            <div className="text-green-400 font-semibold">
              Skill level updated! Returning to learning dashboard...
            </div>
          </div>
        )}
      </div>
    );
  }
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
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!chatInput.trim() || isTyping}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-500 disabled:bg-gray-600 text-white rounded-lg transition-all duration-300"
                >
                  Send
                </button>
              </div>
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
  const [projectStep, setProjectStep] = useState('briefing'); // briefing, working, submission, validation
  const [isWorking, setIsWorking] = useState(false);
  const [workProgress, setWorkProgress] = useState(0);

  const ngoProject = {
    organization: "Chennai Education Foundation",
    title: "Containerize Learning Management System",
    description: "Help us containerize our web-based learning platform to improve deployment and scalability for rural schools.",
    requirements: [
      "Create Dockerfile for Node.js application",
      "Set up Docker Compose for multi-service architecture",
      "Implement health checks and logging",
      "Document deployment process"
    ],
    impact: "Will help 500+ students in rural Tamil Nadu access online education",
    timeline: "2 weeks",
    verification: "Technical review by senior developer + NGO testimonial"
  };

  const startProject = () => {
    setProjectStep('working');
    setIsWorking(true);
    
    // Simulate work progress
    const interval = setInterval(() => {
      setWorkProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsWorking(false);
          setProjectStep('submission');
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const submitProject = () => {
    setProjectStep('validation');
    
    // Simulate validation process
    setTimeout(() => {
      setUserProfile({
        ...userProfile,
        impactBadge: {
          title: "Community Impact: Education Tech",
          organization: "Chennai Education Foundation",
          date: new Date().toLocaleDateString(),
          verification: "Verified by Senior Developer + NGO"
        }
      });
    }, 3000);
  };

  if (projectStep === 'briefing') {
    return (
      <div>
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Real-World Impact Project</h2>
          <p className="text-gray-300">Apply your Docker skills to help a local NGO</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{ngoProject.organization}</h3>
              <p className="text-purple-400">{ngoProject.title}</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">{ngoProject.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Requirements:</h4>
              <ul className="space-y-2">
                {ngoProject.requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Impact:</h4>
                <p className="text-gray-300 text-sm">{ngoProject.impact}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Timeline:</h4>
                <p className="text-gray-300 text-sm">{ngoProject.timeline}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Verification:</h4>
                <p className="text-gray-300 text-sm">{ngoProject.verification}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 text-amber-400 mb-2">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Impact Badge Opportunity</span>
            </div>
            <p className="text-gray-300 text-sm">
              Complete this project successfully to earn a verified Impact Badge that will appear in your portfolio and marketplace profile.
            </p>
          </div>
          
          <div className="text-center">
            <button
              onClick={startProject}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold rounded-xl shadow-2xl shadow-purple-600/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>Accept Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      );
    }

    if (projectStep === 'working') {
      return (
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Working on Project</h2>
          <p className="text-gray-300 mb-8">
            Karthik is containerizing the Chennai Education Foundation's learning platform...
          </p>
          
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Project Progress</span>
                <span>{workProgress}% Complete</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${workProgress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Created Dockerfile for Node.js app</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Set up Docker Compose configuration</span>
              </div>
              <div className="flex items-center space-x-3">
                {workProgress >= 70 ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <Clock className="w-5 h-5 text-amber-400" />
                )}
                <span className="text-gray-300">Implementing health checks</span>
              </div>
              <div className="flex items-center space-x-3">
                {workProgress >= 100 ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <Clock className="w-5 h-5 text-gray-400" />
                )}
                <span className="text-gray-300">Documentation and testing</span>
              </div>
            </div>
          </div>
          
          {workProgress >= 100 && (
            <div className="text-green-400 font-semibold">
              Project completed! Ready for submission...
            </div>
          )}
        </div>
      );
    }

    if (projectStep === 'submission') {
      return (
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Project Submission</h2>
          <p className="text-gray-300 mb-8">
            Excellent work! Your Docker containerization solution is ready for review.
          </p>
          
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Deliverables Completed</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">Dockerfile optimized for production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">Docker Compose with database</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">Health checks implemented</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">Complete deployment guide</span>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={submitProject}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-xl shadow-2xl shadow-green-600/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Submit for Validation
          </button>
        </div>
      );
    }

    if (projectStep === 'validation') {
      return (
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Validation in Progress</h2>
          <p className="text-gray-300 mb-8">
            Your project is being reviewed by technical experts and the NGO team...
          </p>
          
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Technical Review</span>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 text-sm">Approved</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">NGO Impact Verification</span>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-amber-400 text-sm">In Progress</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Impact Badge Generation</span>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400 text-sm">Pending</span>
                </div>
              </div>
            </div>
          </div>
          
          {userProfile.impactBadge && (
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Impact Badge Earned!</h3>
              <p className="text-purple-400 font-semibold mb-2">{userProfile.impactBadge.title}</p>
              <p className="text-gray-300 text-sm mb-4">
                Verified by {userProfile.impactBadge.organization} • {userProfile.impactBadge.date}
              </p>
              <div className="text-green-400 font-semibold">
                Badge added to your portfolio and marketplace profile!
              </div>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

const HiringStep: React.FC<{ userProfile: any }> = ({ userProfile }) => {
  const [searchStep, setSearchStep] = useState('searching'); // searching, found, interview
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (searchStep === 'searching') {
      setTimeout(() => setSearchStep('found'), 2000);
    }
  }, [searchStep]);

  const recruiterProfile = {
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "Senior Technical Recruiter",
    searchCriteria: "Docker + Python + Entry Level + Remote"
  };

  if (searchStep === 'searching') {
    return (
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Corporate Talent Search</h2>
        <p className="text-gray-300 mb-8">
          Meanwhile, recruiters are searching the Arivu marketplace for verified talent...
        </p>
        
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{recruiterProfile.name}</h3>
          <p className="text-blue-400 mb-4">{recruiterProfile.role} at {recruiterProfile.company}</p>
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
            <h4 className="text-blue-400 font-semibold mb-2">Search Query:</h4>
            <p className="text-gray-300 text-sm">{recruiterProfile.searchCriteria}</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-teal-400">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <span className="ml-3">Searching verified candidates...</span>
          </div>
        </div>
      </div>
    );
  }

  if (searchStep === 'found') {
    return (
      <div>
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Perfect Match Found!</h2>
          <p className="text-gray-300">
            {recruiterProfile.name} discovered Karthik's verified profile in the marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Karthik's Profile */}
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{userProfile.name}</h3>
                <p className="text-gray-400">{userProfile.location}</p>
                <p className="text-orange-400 text-sm">{userProfile.aspiration}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Verified Skills</h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries(userProfile.skills).map(([skill, level]) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      level >= 70 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      level >= 40 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      'bg-gray-600/20 text-gray-400 border border-gray-600/30'
                    }`}
                  >
                    {skill} ({level}%)
                  </span>
                ))}
              </div>
            </div>
            
            {userProfile.impactBadge && (
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold">Impact Badge</span>
                </div>
                <p className="text-white text-sm font-medium">{userProfile.impactBadge.title}</p>
                <p className="text-gray-400 text-xs">
                  {userProfile.impactBadge.organization} • {userProfile.impactBadge.verification}
                </p>
              </div>
            )}
          </div>

          {/* Hiring Metrics */}
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-teal-400" />
              Hiring Intelligence
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Skill Match Score</span>
                  <span className="text-green-400 font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-11/12"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Project Quality</span>
                  <span className="text-amber-400 font-bold">9.2/10</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full w-11/12"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Cultural Fit</span>
                  <span className="text-purple-400 font-bold">High</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <h4 className="text-green-400 font-semibold mb-2">Hiring Prediction</h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Time to Hire:</strong> 45% faster than average
              </p>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Success Probability:</strong> 89% based on similar profiles
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Diversity Impact:</strong> Contributes to DEI goals
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button
            onClick={() => setSearchStep('interview')}
            className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold rounded-xl shadow-2xl shadow-teal-600/25 hover:shadow-teal-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Schedule Interview
          </button>
        </div>
      </div>
    );
  }

  if (searchStep === 'interview') {
    return (
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Success Story Complete!</h2>
        <p className="text-gray-300 mb-8">
          Karthik's journey from aspiration to opportunity through the Arivu platform
        </p>
        
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Journey Summary</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-1">Assessment</h4>
              <p className="text-gray-400 text-sm">Skills mapped to market demand</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-1">Learning</h4>
              <p className="text-gray-400 text-sm">AI-guided skill development</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-1">Validation</h4>
              <p className="text-gray-400 text-sm">Real project impact badge</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-1">Opportunity</h4>
              <p className="text-gray-400 text-sm">Marketplace connection</p>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6">
          <h4 className="text-teal-400 font-semibold mb-2">The Arivu Advantage</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-1">45%</div>
              <div className="text-gray-300">Faster hiring process</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-1">92%</div>
              <div className="text-gray-300">Skill match accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-1">70%</div>
              <div className="text-gray-300">Revenue reinvested</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Demo;
