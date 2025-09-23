import React, { useState } from 'react';
import { TrendingUp, Users, Award, DollarSign, Globe, Clock, CheckCircle, BarChart3, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const metrics = [
    {
      title: 'Active Learners',
      value: '8,543',
      change: '+12.5%',
      changeType: 'increase',
      icon: Users,
      color: 'teal',
      description: 'Learners actively in programs this month'
    },
    {
      title: 'Portfolios Validated',
      value: '2,847',
      change: '+18.3%',
      changeType: 'increase',
      icon: Award,
      color: 'amber',
      description: 'Project portfolios completed and verified'
    },
    {
      title: 'Corporate Subscriptions',
      value: '47',
      change: '+25.0%',
      changeType: 'increase',
      icon: BarChart3,
      color: 'purple',
      description: 'Active TaaS marketplace subscriptions'
    },
    {
      title: 'Revenue Reinvested',
      value: '$42,650',
      change: '+33.7%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'green',
      description: '70% of revenue funding free programs'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'validation',
      title: 'ML Portfolio Validated',
      description: 'Agricultural prediction model by Priya K. scored 9.2/10',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      type: 'placement',
      title: 'Successful Placement',
      description: 'Rajesh M. hired by TechCorp through marketplace',
      time: '4 hours ago',
      status: 'success'
    },
    {
      id: 3,
      type: 'registration',
      title: 'New Organization Joined',
      description: 'Social Impact Academy registered with 45 learners',
      time: '6 hours ago',
      status: 'new'
    },
    {
      id: 4,
      type: 'milestone',
      title: 'Milestone Reached',
      description: '10,000th learner enrolled in Arivu programs',
      time: '1 day ago',
      status: 'milestone'
    }
  ];

  const regionalData = [
    { region: 'Mumbai Metro', learners: 2847, orgs: 12, placements: 156 },
    { region: 'Bangalore Tech Hub', learners: 2134, orgs: 8, placements: 189 },
    { region: 'Delhi NCR', learners: 1756, orgs: 15, placements: 98 },
    { region: 'Chennai Silicon Valley', learners: 1203, orgs: 6, placements: 67 },
    { region: 'Other Regions', learners: 603, orgs: 9, placements: 43 }
  ];

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
      },
      green: {
        bg: 'from-green-600 to-green-500',
        text: 'text-green-400',
        border: 'border-green-500/30',
        accent: 'bg-green-500/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="relative z-10 pt-20">
      {/* Header Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Impact Dashboard</h1>
              <p className="text-gray-300 text-lg">Real-time insights into the Arivu social enterprise flywheel</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-teal-500"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              
              <button className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-teal-400 transition-all duration-300">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const colors = getColorClasses(metric.color);
              const Icon = metric.icon;

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border ${colors.border} shadow-2xl p-6 hover:scale-105 transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      {metric.changeType === 'increase' ? (
                        <ArrowUp className="w-4 h-4 text-green-400" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-400" />
                      )}
                      <span className={`text-sm font-semibold ${
                        metric.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-300 font-medium mb-1">{metric.title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{metric.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charts and Analytics */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Learner Growth Chart */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Learner Growth Trajectory</h3>
                <TrendingUp className="w-6 h-6 text-teal-400" />
              </div>
              
              <div className="h-64 flex items-end space-x-2">
                {[3200, 4100, 5800, 6900, 7500, 8100, 8543].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${(value / 8543) * 200}px` }}
                    ></div>
                    <div className="text-xs text-gray-400 mt-2">
                      {index === 6 ? 'Now' : `${7-index}M`}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-4">
                <p className="text-gray-300 text-sm">
                  <span className="text-teal-400 font-semibold">+167%</span> growth in active learners over 6 months
                </p>
              </div>
            </div>

            {/* Revenue Allocation */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Revenue Allocation</h3>
                <DollarSign className="w-6 h-6 text-amber-400" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Free Tools & Mentors (70%)</span>
                  <span className="text-green-400 font-semibold">$42,650</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-600 to-green-500 h-3 rounded-full w-7/10"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Operations & Growth (30%)</span>
                  <span className="text-amber-400 font-semibold">$18,350</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-500 h-3 rounded-full w-3/10"></div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <div className="text-green-400 font-semibold mb-2">Social Impact Commitment</div>
                <div className="text-gray-300 text-sm">
                  70% of all marketplace revenue directly funds free programs and mentor stipends
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Regional Impact Distribution</h3>
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Region</th>
                    <th className="text-right py-3 px-4 text-gray-300 font-medium">Active Learners</th>
                    <th className="text-right py-3 px-4 text-gray-300 font-medium">Organizations</th>
                    <th className="text-right py-3 px-4 text-gray-300 font-medium">Placements</th>
                  </tr>
                </thead>
                <tbody>
                  {regionalData.map((region, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/20 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">{region.region}</td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-teal-400 font-semibold">{region.learners.toLocaleString()}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-amber-400 font-semibold">{region.orgs}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-green-400 font-semibold">{region.placements}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity Feed */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Recent Activity</h3>
              <Clock className="w-6 h-6 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-800/30 transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.status === 'completed' ? 'bg-amber-500/20 text-amber-400' :
                    activity.status === 'success' ? 'bg-green-500/20 text-green-400' :
                    activity.status === 'new' ? 'bg-teal-500/20 text-teal-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {activity.status === 'completed' && <Award className="w-5 h-5" />}
                    {activity.status === 'success' && <CheckCircle className="w-5 h-5" />}
                    {activity.status === 'new' && <Users className="w-5 h-5" />}
                    {activity.status === 'milestone' && <TrendingUp className="w-5 h-5" />}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{activity.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{activity.description}</p>
                    <div className="text-gray-400 text-xs">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <button className="px-6 py-2 border border-gray-600 hover:border-teal-500 text-gray-300 hover:text-teal-400 rounded-lg transition-all duration-300">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;