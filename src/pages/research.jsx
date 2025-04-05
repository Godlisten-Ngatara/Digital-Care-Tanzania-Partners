import React from 'react'
import FeatureCard from '../components/featureCard';
import StatCard from '../components/statCard';
import TeamMemberCard from '../components/teamCard';
import { Search, Share2, Radio, Database, Users, BarChart3, Globe, Network } from 'lucide-react';
import Header from '../components/header';
import Hero from '../components/hero';
import Donation from '../components/donation';
import Footer from '../components/footer';
const ResearchArea = () => {
    const stats = [
      { icon: <Search className="w-6 h-6" />, stat: "100+", label: "Research Projects" },
      { icon: <Share2 className="w-6 h-6" />, stat: "50+", label: "Publications" },
      { icon: <Network className="w-6 h-6" />, stat: "1M+", label: "Data Points" },
      { icon: <Users className="w-6 h-6" />, stat: "20+", label: "Partner Institutions" }
    ];
  
    const features = [
      {
        icon: <Database className="w-6 h-6" />,
        title: "Data Collection & Analysis",
        description: "Advanced research methodologies and data analytics for internet connectivity studies."
      },
      {
        icon: <Radio className="w-6 h-6" />,
        title: "Communication Strategy",
        description: "Effective communication frameworks for research dissemination and public engagement."
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "International Collaboration",
        description: "Partnerships with global institutions for comprehensive research initiatives."
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Impact Assessment",
        description: "Measuring and evaluating the impact of internet connectivity initiatives."
      }
    ];
  
    const teamMembers = [
      {
        image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=800",
        name: "Dr. Emmanuel Mwanza",
        role: "Research Director",
        description: "Leading research initiatives in internet connectivity and digital transformation with 20 years of experience."
      },
      {
        image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=800",
        name: "Prof. Amina Said",
        role: "Communications Lead",
        description: "Expert in research communication and public relations with extensive media experience."
      },
      {
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
        name: "Dr. Thomas Mboya",
        role: "Data Analytics Manager",
        description: "Specializing in big data analytics and research methodology in digital technologies."
      }
    ];
    const heroTitle = "Internet Connectivity Research & Communication"
    const heroDesc = "Advancing knowledge and understanding of internet connectivity through research and effective communication."
    return (
      <div className="min-h-screen bg-gray-50">
        <Header></Header>
        {/* Hero Section */}
      <Hero title={heroTitle} desc={heroDesc}></Hero> 
  
        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research & Communication Initiatives
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive research programs and communication strategies for
                understanding and improving internet connectivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our expert researchers and communications specialists
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        </section>
  
        {/* Impact Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Evidence-Based Policy</h3>
                      <p className="mt-2 text-gray-600">Informing policy decisions through comprehensive research and data analysis.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Knowledge Sharing</h3>
                      <p className="mt-2 text-gray-600">Disseminating research findings to stakeholders and the public effectively.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Innovation Support</h3>
                      <p className="mt-2 text-gray-600">Supporting technological innovation through research-backed insights.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Donation></Donation>
      <Footer></Footer>
      </div>
    );
  };
  
  export default ResearchArea;