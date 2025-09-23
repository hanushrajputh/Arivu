import React from 'react';
import { Navigation, Users, Award, ArrowRight, Play, CheckCircle, Clock, Target } from 'lucide-react';

const WhatWeBuild: React.FC = () => {
  const plugins = [
    {
      name: 'Navigator',
      icon: Navigation,
      description: 'Personalized learning pathways with mentor checkpoints',
      features: ['Adaptive learning modules', 'Checkpoint badge system', 'Progress tracking', 'Mentor integration'],
      color: 'teal',
      demo: 'Show adaptive pathway branching based on learner performance'
    },
    {
      name: 'Thozhan',
      icon: Users,
      description: 'Real-time mentor & community engagement platform',
      features: ['Mentor queue system', 'Group review sessions', 'Peer collaboration', 'Real-time chat'],
      color: 'amber',
      demo: 'Demonstrate mentor matching and group review workflow'
    },
    {
      name: 'Saatchi (Proof-of-Skill)',
      icon: Award,
      description: 'Portfolio-grade projects validated with rubrics & peer review',
      features: ['Project templates', 'Rubric scoring system', 'Peer review process', 'Portfolio generation'],
      color: 'purple',
      demo: 'Show project submission to verified portfolio pipeline'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: {
        bg: 'from-teal-600 to-teal-500',
        shadow: 'shadow-teal-600/25',
        hoverShadow: 'hover:shadow-teal-500/40',
        text: 'text-teal-400',
        border: 'border-teal-500/30',
        accent: 'bg-teal-500/20'
      },
      amber: {
        bg: 'from-amber-600 to-amber-500',
        shadow: 'shadow-amber-600/25',
        hoverShadow: 'hover:shadow-amber-500/40',
        text: 'text-amber-400',
        border: 'border-amber-500/30',
        accent: 'bg-amber-500/20'
      },
      purple: {
        bg: 'from-purple-600 to-purple-500',
        shadow: 'shadow-purple-600/25',
        hoverShadow: 'hover:shadow-purple-500/40',
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
            What We Build
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Three interconnected plugins that transform how organizations build, validate, and connect talent.
          </p>
        </div>
      </section>

      {/* Plugins Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plugins.map((plugin, index) => {
              const colors = getColorClasses(plugin.color);
              const Icon = plugin.icon;

              return (
                <div
                  key={plugin.name}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border ${colors.border} shadow-2xl p-8 hover:scale-105 transition-all duration-500 ${colors.hoverShadow} group`}
                >
                  {/* Plugin Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-2xl flex items-center justify-center ${colors.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plugin.name}</h3>
                      {plugin.name === 'Saatchi (Proof-of-Skill)' && (
                        <p className="text-sm text-gray-400">சாச்சி (Proof)</p>
                      )}
                    </div>
                  </div>

                  {/* Plugin Description */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {plugin.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plugin.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Demo Section */}
                  <div className={`${colors.accent} rounded-xl p-4 mb-6 border ${colors.border}`}>
                    <div className="flex items-start space-x-3 mb-3">
                      <Play className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Demo Highlight</h4>
                        <p className="text-gray-300 text-sm">{plugin.demo}</p>
                      </div>
                    </div>
                  </div>

                  {/* Install Button */}
                  <button className={`w-full py-3 bg-gradient-to-r ${colors.bg} text-white font-semibold rounded-xl ${colors.shadow} ${colors.hoverShadow} transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                    <span>Install for Free</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Seamless Integration Flow</h2>
          
          <div className="relative">
            {/* Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-white font-semibold mb-2">Org Signup</h3>
                <p className="text-gray-400 text-sm">NGO registers and gets verified</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-white font-semibold mb-2">Install Plugins</h3>
                <p className="text-gray-400 text-sm">Navigator, Thozhan, Saatchi setup</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-white font-semibold mb-2">Learners Join</h3>
                <p className="text-gray-400 text-sm">Students onboard via org code</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  4
                </div>
                <h3 className="text-white font-semibold mb-2">Projects Validated</h3>
                <p className="text-gray-400 text-sm">Mentor review and rubric scoring</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  5
                </div>
                <h3 className="text-white font-semibold mb-2">Marketplace Ready</h3>
                <p className="text-gray-400 text-sm">Portfolio appears in TaaS</p>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 via-amber-500 via-purple-500 via-green-500 to-indigo-500 opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Technical Excellence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
              <Clock className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Zero-Setup Installation</h3>
              <p className="text-gray-300 mb-4">
                Plugin architecture means organizations can be up and running in under 5 minutes with our guided setup flow.
              </p>
              <div className="text-sm text-teal-400 font-medium">
                Average setup time: 3.2 minutes
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
              <Target className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Rubric-Driven Quality</h3>
              <p className="text-gray-300 mb-4">
                Standardized evaluation rubrics ensure consistent project quality across all organizations and mentors.
              </p>
              <div className="text-sm text-amber-400 font-medium">
                95% mentor consistency rating
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Automated Verification</h3>
              <p className="text-gray-300 mb-4">
                Smart verification system combines rubric scoring, peer review, and mentor oversight for reliable talent validation.
              </p>
              <div className="text-sm text-purple-400 font-medium">
                89% placement success rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Learning?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join organizations already using Arivu to build verified talent pipelines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold rounded-xl shadow-2xl shadow-teal-600/25 hover:shadow-teal-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Try Arivu AI</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="px-8 py-4 border-2 border-gray-600 hover:border-amber-500 text-gray-200 hover:text-amber-400 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 bg-gray-800/20 hover:bg-amber-500/10">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeBuild;