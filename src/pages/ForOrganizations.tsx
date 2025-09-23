import React, { useState } from 'react';
import { CheckCircle, Users, Award, TrendingUp, ArrowRight, Upload, Settings, Target, Zap } from 'lucide-react';

const ForOrganizations: React.FC = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    orgType: 'ngo',
    email: '',
    phone: '',
    website: '',
    description: ''
  });

  const benefits = [
    {
      icon: Users,
      title: 'Free Training Tools',
      description: 'Access Navigator, Thozhan, and Saatchi plugins at no cost to build learner capabilities.',
      color: 'teal'
    },
    {
      icon: Award,
      title: 'Automated Proof-of-Skill',
      description: 'Transform student projects into verified portfolios with rubric-driven validation.',
      color: 'amber'
    },
    {
      icon: TrendingUp,
      title: 'Pathway to Placement Revenue',
      description: 'Earn revenue share when your validated learners get placed through our marketplace.',
      color: 'purple'
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: 'Organization Name',
      description: 'Register your NGO or educational institution',
      icon: Upload,
      status: 'active'
    },
    {
      step: 2,
      title: 'Verification Method',
      description: 'Choose institutional verification approach',
      icon: CheckCircle,
      status: 'pending'
    },
    {
      step: 3,
      title: 'Install Plugin Instructions',
      description: 'Get step-by-step setup guidance',
      icon: Settings,
      status: 'pending'
    },
    {
      step: 4,
      title: 'Onboarding Checklist',
      description: 'Complete setup and start training learners',
      icon: Target,
      status: 'pending'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Organization signup:', formData);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      teal: {
        bg: 'from-teal-600 to-teal-500',
        text: 'text-teal-400',
        border: 'border-teal-500/30',
        accent: 'bg-teal-500/20'
      },
      amber: {
        bg: 'from-amber-600 to-amber-500',
        text: 'text-amber-400',
        border: 'border-amber-500/30',
        accent: 'bg-amber-500/20'
      },
      purple: {
        bg: 'from-purple-600 to-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
        accent: 'bg-purple-500/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="relative z-10 pt-20">
      {/* Header Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            For Organizations
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empower your learners with industry-grade skills validation. Free tools, proven results, shared success.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Organizations Choose Arivu</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const colors = getColorClasses(benefit.color);
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border ${colors.border} shadow-2xl p-8 hover:scale-105 transition-all duration-500 group`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sign-up Flow */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Simple Setup Process</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Process Steps */}
            <div className="space-y-6">
              {onboardingSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.status === 'active';
                const isCompleted = step.status === 'completed';
                
                return (
                  <div key={step.step} className="flex items-start space-x-4 group">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg shadow-teal-600/25' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-green-600 to-green-500 text-white'
                        : 'bg-gray-700 text-gray-400 group-hover:bg-gray-600'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <span>{step.step}</span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        isActive ? 'text-teal-400' : isCompleted ? 'text-green-400' : 'text-white group-hover:text-teal-400'
                      } transition-colors duration-300`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              
              <div className="mt-8 p-6 bg-teal-500/10 border border-teal-500/30 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <h4 className="text-teal-400 font-semibold">Quick Setup Guarantee</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Average setup time: <span className="text-teal-400 font-semibold">3.2 minutes</span>. 
                  Our guided process gets you running immediately.
                </p>
              </div>
            </div>

            {/* Right: Sign-up Form */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Join Arivu Non-Profit Program</h3>
                <p className="text-gray-400">Free forever for qualified organizations</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Organization Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.orgName}
                    onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                    placeholder="Enter your organization name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Organization Type *</label>
                  <select
                    required
                    value={formData.orgType}
                    onChange={(e) => setFormData({...formData, orgType: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                  >
                    <option value="ngo">Non-Governmental Organization (NGO)</option>
                    <option value="educational">Educational Institution</option>
                    <option value="community">Community Organization</option>
                    <option value="social">Social Enterprise</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                      placeholder="contact@organization.org"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                    placeholder="https://your-organization.org"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Brief Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your organization and learner programs..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-5 h-5 text-teal-500 bg-gray-800 border-gray-600 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <label htmlFor="terms" className="text-gray-300 text-sm leading-relaxed">
                    I agree to the <span className="text-teal-400 hover:underline cursor-pointer">Terms of Service</span> and 
                    <span className="text-teal-400 hover:underline cursor-pointer ml-1">Privacy Policy</span>. 
                    I confirm this organization qualifies for the free non-profit program.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold rounded-xl shadow-2xl shadow-teal-600/25 hover:shadow-teal-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Try Arivu AI</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Have questions? <span className="text-teal-400 hover:underline cursor-pointer">Contact our team</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Organizations Already Winning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NGO Testimonial */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  DS
                </div>
                <div>
                  <h3 className="text-white font-semibold">Digital Skills Foundation</h3>
                  <p className="text-gray-400 text-sm">Mumbai-based NGO</p>
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed mb-4">
                "Arivu transformed our approach to skills training. Our learners now have verified portfolios that 
                actually get them hired. The mentor network and project validation system is phenomenal."
              </blockquote>
              <div className="text-teal-400 font-medium">
                — Priya Sharma, Program Director
              </div>
            </div>

            {/* Educational Institution */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  TC
                </div>
                <div>
                  <h3 className="text-white font-semibold">TechForGood Mumbai</h3>
                  <p className="text-gray-400 text-sm">Social Impact Training Center</p>
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed mb-4">
                "The plugin setup was incredibly smooth. Within a week, we had 50+ learners actively building 
                portfolios. The corporate partnerships through the marketplace are a game-changer for placement."
              </blockquote>
              <div className="text-amber-400 font-medium">
                — Rajesh Kumar, Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Empower Your Learners?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the growing network of organizations using Arivu to create real opportunities.
          </p>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">48hrs</div>
                <div className="text-gray-300">Average approval time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-gray-300">Free for qualified NGOs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support & onboarding</div>
              </div>
            </div>
          </div>

          <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold rounded-xl shadow-2xl shadow-teal-600/25 hover:shadow-teal-500/40 transition-all duration-300 transform hover:scale-105 text-lg">
            Try Arivu AI
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForOrganizations;