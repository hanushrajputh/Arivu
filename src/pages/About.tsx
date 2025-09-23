import React from 'react';
import { Heart, Target, Shield, Users, Award, TrendingUp, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const impactNumbers = [
    { label: 'Learners Trained', value: '10,847', description: 'Across 50+ organizations' },
    { label: 'Portfolios Validated', value: '3,256', description: 'Project-proven skills' },
    { label: 'Corporate Partners', value: '52', description: 'Active TaaS subscribers' },
    { label: 'Successful Placements', value: '1,847', description: '89% placement rate' },
    { label: 'Countries Reached', value: '12', description: 'Growing globally' },
    { label: 'Revenue Reinvested', value: '70%', description: 'Back to free programs' }
  ];

  const testimonials = [
    {
      type: 'ngo',
      quote: "Arivu didn't just give us tools—they gave our learners real pathways to employment. The mentor network and validation system creates trust that traditional certificates can't match.",
      author: "Priya Sharma",
      title: "Program Director",
      organization: "Digital Skills Foundation",
      avatar: "PS"
    },
    {
      type: 'corporate',
      quote: "We've reduced time-to-hire by 45% using Arivu's marketplace. The candidates come with verified project portfolios—we know exactly what they can do before the first interview.",
      author: "Michael Chen",
      title: "VP of Engineering",
      organization: "TechFlow Solutions",
      avatar: "MC"
    },
    {
      type: 'ngo',
      quote: "The plugin setup was seamless. In two weeks, we had 100+ learners building portfolios. The corporate partnerships through TaaS have transformed our placement outcomes.",
      author: "Rajesh Kumar",
      title: "Founder",
      organization: "TechForGood Mumbai",
      avatar: "RK"
    },
    {
      type: 'corporate',
      quote: "Arivu's diversity-first approach helped us build the most inclusive engineering team we've ever had. Project-based validation removes bias from our hiring process.",
      author: "Sarah Williams",
      title: "Head of People",
      organization: "InnovateLabs",
      avatar: "SW"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Social Impact First',
      description: 'Every decision is guided by our mission to create equitable opportunities for underrepresented communities.',
      color: 'teal'
    },
    {
      icon: Target,
      title: 'Project-Proven Excellence',
      description: 'We believe skills should be demonstrated through real work, not just described in resumes.',
      color: 'amber'
    },
    {
      icon: Shield,
      title: 'Privacy & Ethics',
      description: 'Learner data protection and transparent processes are non-negotiable foundations of our platform.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: {
        bg: 'from-teal-600 to-teal-500',
        text: 'text-teal-400',
        border: 'border-teal-500/30'
      },
      amber: {
        bg: 'from-amber-600 to-amber-500',
        text: 'text-amber-400',
        border: 'border-amber-500/30'
      },
      purple: {
        bg: 'from-purple-600 to-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-500/30'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About Arivu
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We're building a world where talent is recognized by what you can create, not where you came from. 
            A social enterprise flywheel that funds opportunity through verified excellence.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-2xl text-gray-200 mb-8 leading-relaxed font-light">
              "To eliminate bias in talent discovery by creating a world where skills are verified through 
              real projects, mentorship is accessible to all, and corporate success directly funds 
              educational opportunity."
            </p>
            <div className="text-teal-400 font-semibold text-lg">
              Project Arivu (அறிவு) — Knowledge that creates opportunity
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Impact by Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactNumbers.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const colors = getColorClasses(value.color);
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border ${colors.border} shadow-2xl p-8 hover:scale-105 transition-all duration-500 group text-center`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">What Our Community Says</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                    testimonial.type === 'ngo' 
                      ? 'bg-gradient-to-r from-teal-600 to-teal-500' 
                      : 'bg-gradient-to-r from-amber-600 to-amber-500'
                  }`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.author}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    <p className={`text-sm font-medium ${
                      testimonial.type === 'ngo' ? 'text-teal-400' : 'text-amber-400'
                    }`}>
                      {testimonial.organization}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judge-Ready Pitch */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl p-12">
            <h2 className="text-4xl font-bold text-center text-white mb-12">The Pitch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Problem</h3>
                <p className="text-gray-300 text-sm">Talent mismatch + bias in hiring</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Solution</h3>
                <p className="text-gray-300 text-sm">Project Arivu — free validation + premium marketplace</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Advantage</h3>
                <p className="text-gray-300 text-sm">Institutional adoption creates built-in pipeline</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Impact</h3>
                <p className="text-gray-300 text-sm">Revenue funds scale + measurable DEI improvement</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-200 leading-relaxed mb-8 font-light italic">
                "Project Arivu is a social-enterprise flywheel: we equip NGOs and public institutions with free, 
                mentor-guided learning and portfolio validation tools, then connect the verified talent to companies 
                through a premium Talent-as-a-Service marketplace. Revenue from the marketplace funds scale and mentor 
                stipends, making the model self-sustaining. In short: we turn training into verifiable jobs — at scale 
                and with measurable impact."
              </p>
              
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h4 className="text-purple-400 font-semibold mb-2">Traction Ask (Hackathon)</h4>
                <p className="text-gray-300">
                  Pilot with 3 NGOs + 2 corporate partners for 3 months to validate the complete flywheel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-xl p-6">
              <h3 className="text-white font-semibold mb-3">How do you ensure quality?</h3>
              <p className="text-gray-300">
                Rubric-driven verification + mentor peer review + periodic institutional audits — metadata & 
                reviewer comments attached to every portfolio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-xl p-6">
              <h3 className="text-white font-semibold mb-3">Is this scalable?</h3>
              <p className="text-gray-300">
                Plugins automate learning flows, mentor-stipend model scales through revenue reinvestment, 
                and a standard rubric ensures consistent verification.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-xl p-6">
              <h3 className="text-white font-semibold mb-3">How do you protect learner privacy?</h3>
              <p className="text-gray-300">
                Anonymized default listings, explicit consent checkboxes, and deletion-on-request. 
                Candidates control visibility and sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Talent Discovery?</h2>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-teal-400" />
                <span className="text-gray-300">hello@arivu.org</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-amber-400" />
                <span className="text-gray-300">+91 99999 88888</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Join the organizations and companies already building the future of talent discovery.
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

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              70% of revenue reinvested into free tools & mentor stipends
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;