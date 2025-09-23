import React from 'react';
import { ArrowRight, Play, Users, Award, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              From Skill to Proof to Opportunity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Free tools for nonprofits. Premium talent for companies. A virtuous cycle that funds opportunity.
            </p>
            <p className="text-lg text-teal-400 mb-12 font-medium">
              Train. Validate. Connect. — Talent that works, not resumes that guess.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/arivu-ai"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold rounded-xl shadow-2xl shadow-orange-600/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Try Arivu AI</span>
              </Link>
              <Link
                to="/for-organizations"
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold rounded-xl shadow-2xl shadow-teal-600/25 hover:shadow-teal-500/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Arivu for My Organization — Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/talent-marketplace"
                className="px-8 py-4 border-2 border-gray-600 hover:border-amber-500 text-gray-200 hover:text-amber-400 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 bg-gray-800/20 hover:bg-amber-500/10"
              >
                <span>Explore Talent Marketplace</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6 hover:shadow-teal-500/10 transition-all duration-500">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">Arivu Dashboard</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  {/* Live Learner Map */}
                  <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-teal-400" />
                      Live Learner Map
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Active Now</span>
                        <span className="text-teal-400 font-semibold">1,247</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">This Week</span>
                        <span className="text-white">8,543</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                        <div className="bg-teal-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Top Validated Projects */}
                  <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-amber-400" />
                      Top 3 Validated Projects
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Data Analysis</span>
                        <span className="text-amber-400 text-xs bg-amber-400/20 px-2 py-1 rounded">9.2/10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Web Development</span>
                        <span className="text-amber-400 text-xs bg-amber-400/20 px-2 py-1 rounded">8.8/10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Digital Marketing</span>
                        <span className="text-amber-400 text-xs bg-amber-400/20 px-2 py-1 rounded">8.5/10</span>
                      </div>
                    </div>
                  </div>

                  {/* Corporate Search Filter */}
                  <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                      Corporate Search Filter
                    </h3>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-400">Most Searched Skills:</div>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded">React</span>
                        <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded">Pandas</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Validated project portfolios · Mentor-reviewed · Diversity-first
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-300">10k+</div>
              <div className="text-gray-300">Learners Trained</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">3k</div>
              <div className="text-gray-300">Portfolios Validated</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">50</div>
              <div className="text-gray-300">Corporate Partners</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">85%</div>
              <div className="text-gray-300">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">See the Complete Flow</h2>
          <p className="text-xl text-gray-300 mb-12">
            Watch how we turn learning into verified opportunities in under 90 seconds
          </p>
          
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8 hover:shadow-teal-500/10 transition-all duration-500">
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-amber-600/20"></div>
              <button className="relative z-10 w-20 h-20 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl shadow-teal-600/30">
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">90-Second Demo</h3>
              <p className="text-gray-400">Publish Project → Learner Submit → Mentor Grade → Portfolio Verified → Marketplace Listed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flywheel Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">The Social Enterprise Flywheel</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-600/25">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Free Tools</h3>
              <p className="text-gray-400">NGOs get mentor-guided learning and portfolio validation tools at no cost</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-600/25">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Verified Talent</h3>
              <p className="text-gray-400">Learners build project-proven portfolios with mentor validation</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-600/25">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Corporate Value</h3>
              <p className="text-gray-400">Companies access pre-validated talent through premium marketplace</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-600/25">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Reinvestment</h3>
              <p className="text-gray-400">Revenue funds scale, mentor stipends, and program expansion</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-teal-400 font-semibold">70% reinvested into free tools & mentor stipends</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;