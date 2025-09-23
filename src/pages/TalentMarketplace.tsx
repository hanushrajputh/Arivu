import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock, Award, Eye, MessageSquare, ChevronDown, User } from 'lucide-react';

const TalentMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    skills: ['Python', 'Data Analysis'],
    experience: 'entry',
    location: 'remote',
    verified: true
  });

  const candidates = [
    {
      id: 1,
      name: 'Priya K.',
      avatar: null,
      topSkills: ['Python', 'Pandas', 'Data Visualization'],
      projectTitle: 'COVID-19 Data Analysis Dashboard',
      projectScore: 9.2,
      verifiedBy: 'Digital Skills Foundation',
      location: 'Remote',
      experience: 'Entry Level',
      portfolioItems: 3,
      reviews: 12,
      projectDescription: 'Built interactive dashboard analyzing COVID-19 trends across Indian states using real government datasets'
    },
    {
      id: 2,
      name: 'Rajesh M.',
      avatar: null,
      topSkills: ['React', 'Node.js', 'MongoDB'],
      projectTitle: 'Community Resource Sharing Platform',
      projectScore: 8.8,
      verifiedBy: 'TechForGood Mumbai',
      location: 'Mumbai',
      experience: 'Mid Level',
      portfolioItems: 5,
      reviews: 18,
      projectDescription: 'Full-stack web application connecting local communities to share resources and skills'
    },
    {
      id: 3,
      name: 'Anita S.',
      avatar: null,
      topSkills: ['Digital Marketing', 'SEO', 'Content Strategy'],
      projectTitle: 'NGO Outreach Campaign Strategy',
      projectScore: 9.0,
      verifiedBy: 'Social Impact Academy',
      location: 'Bangalore',
      experience: 'Entry Level',
      portfolioItems: 4,
      reviews: 8,
      projectDescription: 'Developed comprehensive digital marketing strategy that increased NGO engagement by 200%'
    },
    {
      id: 4,
      name: 'Dev P.',
      avatar: null,
      topSkills: ['Machine Learning', 'TensorFlow', 'Python'],
      projectTitle: 'Agricultural Yield Prediction Model',
      projectScore: 9.5,
      verifiedBy: 'AI For Social Good',
      location: 'Remote',
      experience: 'Mid Level',
      portfolioItems: 6,
      reviews: 15,
      projectDescription: 'ML model predicting crop yields using satellite imagery and weather data for small farmers'
    }
  ];

  const skillFilters = ['Python', 'JavaScript', 'React', 'Data Analysis', 'Machine Learning', 'Digital Marketing', 'UI/UX Design', 'MongoDB', 'Node.js', 'TensorFlow'];
  
  return (
    <div className="relative z-10 pt-20">
      {/* Header Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Talent Marketplace
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover verified talent with project-proven skills. No guesswork, no bias—just results.
            </p>
          </div>

          {/* Corporate Dashboard Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-xl p-6">
              <h3 className="text-teal-400 font-semibold mb-2">Cost-to-Hire Saved</h3>
              <div className="text-3xl font-bold text-white mb-1">45%</div>
              <div className="text-gray-400 text-sm">vs traditional recruiting</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-xl p-6">
              <h3 className="text-amber-400 font-semibold mb-2">DEI Metrics Improved</h3>
              <div className="text-3xl font-bold text-white mb-1">73%</div>
              <div className="text-gray-400 text-sm">underrepresented hires</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-xl p-6">
              <h3 className="text-green-400 font-semibold mb-2">Top-Skill Pipelines</h3>
              <div className="text-3xl font-bold text-white mb-1">12</div>
              <div className="text-gray-400 text-sm">active talent pools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6 mb-8">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by skills, projects, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-teal-400 transition-all duration-300 flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search Talent</span>
              </button>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm font-medium">Filters:</span>
              </div>
              
              {selectedFilters.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-teal-500/20 text-teal-400 text-sm rounded-full border border-teal-500/30">
                  {skill}
                </span>
              ))}
              
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm rounded-full border border-amber-500/30">
                {selectedFilters.experience === 'entry' ? 'Entry Level' : 'Mid Level'}
              </span>
              
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                Remote OK
              </span>
              
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                Verified Only
              </span>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <label className="block text-gray-400 mb-2">Skills</label>
                <select className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded text-white focus:border-teal-500">
                  <option>Select Skills...</option>
                  {skillFilters.map(skill => (
                    <option key={skill}>{skill}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Experience Level</label>
                <select className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded text-white focus:border-teal-500">
                  <option>All Levels</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Location</label>
                <select className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded text-white focus:border-teal-500">
                  <option>Any Location</option>
                  <option>Remote</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                  <option>Delhi</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Project Score</label>
                <select className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded text-white focus:border-teal-500">
                  <option>Any Score</option>
                  <option>9.0+ Exceptional</option>
                  <option>8.0+ Excellent</option>
                  <option>7.0+ Good</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Results */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {candidates.length} Verified Candidates Found
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded text-white text-sm focus:border-teal-500">
                <option>Project Score (High to Low)</option>
                <option>Recent Activity</option>
                <option>Experience Level</option>
              </select>
            </div>
          </div>

          {/* Candidate Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6 hover:scale-105 hover:shadow-teal-500/10 transition-all duration-300 group"
              >
                {/* Candidate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{candidate.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{candidate.location}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-sm">{candidate.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    <span className="text-amber-400 font-bold text-lg">{candidate.projectScore}</span>
                    <span className="text-gray-400 text-sm">/10</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {candidate.topSkills.map((skill, index) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          index === 0
                            ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                            : index === 1
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-gray-600/20 text-gray-400 border border-gray-600/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <Award className="w-4 h-4 text-purple-400 mr-2" />
                    {candidate.projectTitle}
                  </h4>
                  <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                    {candidate.projectDescription}
                  </p>
                  <div className="text-xs text-gray-400">
                    Verified by <span className="text-teal-400 font-medium">{candidate.verifiedBy}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{candidate.portfolioItems} portfolios</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{candidate.reviews} reviews</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Updated 2d ago</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-600/25">
                    View Portfolio
                  </button>
                  <button className="px-6 py-3 border-2 border-amber-500/30 text-amber-400 hover:bg-amber-500/10 font-semibold rounded-lg transition-all duration-300">
                    Invite to Interview
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-gray-600 hover:border-teal-500 text-gray-200 hover:text-teal-400 font-semibold rounded-lg transition-all duration-300 bg-gray-800/20 hover:bg-teal-500/10">
              Load More Candidates
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Showing 4 of 47 verified candidates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentMarketplace;