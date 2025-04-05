import React from 'react'
import FeatureCard from '../components/featureCard';
import StatCard from '../components/statCard';
import TeamMemberCard from '../components/teamCard';
import { Users, Heart, Laptop, BookOpen, LineChart, BarChart3, GraduationCap, Briefcase } from 'lucide-react';
import Header from '../components/header';
import Hero from '../components/hero';
import Donation from '../components/donation';
import Footer from '../components/footer';
const GenderArea = () => {
    const stats = [
      { icon: <Users className="w-6 h-6" />, stat: "50K+", label: "Women Empowered" },
      { icon: <Laptop className="w-6 h-6" />, stat: "200+", label: "Digital Programs" },
      { icon: <GraduationCap className="w-6 h-6" />, stat: "10K+", label: "Trained" },
      { icon: <Briefcase className="w-6 h-6" />, stat: "5K+", label: "Jobs Created" }
    ];
  
    const features = [
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Digital Literacy Programs",
        description: "Comprehensive training programs focused on building digital skills and competencies."
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Mentorship Network",
        description: "Connecting women with industry leaders and mentors in technology."
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Economic Empowerment",
        description: "Digital platforms and tools for entrepreneurship and financial inclusion."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Community Support",
        description: "Building networks and communities for knowledge sharing and support."
      }
    ];
  
    const teamMembers = [
      {
        image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=800",
        name: "Dr. Fatima Hussein",
        role: "Gender Equity Director",
        description: "Leading initiatives for digital inclusion and gender equality with 15 years of experience in social development."
      },
      {
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
        name: "Sarah Makamba",
        role: "Digital Skills Program Lead",
        description: "Developing and implementing digital literacy programs for women across Tanzania."
      },
      {
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
        name: "Joyce Nyerere",
        role: "Community Engagement Manager",
        description: "Building and nurturing communities that support women in technology and digital spaces."
      }
    ];
  const heroTitle = "Internet for Gender Equity and Equality"
  const heroDesc = "Empowering women through digital inclusion and technology-driven opportunities."
    return (
      <div className="min-h-screen bg-gray-50">
        <Header/>
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
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Digital Empowerment Initiatives
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive programs designed to bridge the gender gap in
                technology and digital spaces.
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
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experts driving gender equality in digital spaces
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
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Digital Skills Development</h3>
                      <p className="mt-2 text-gray-600">Empowering women with essential digital skills for the modern workforce.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Economic Opportunities</h3>
                      <p className="mt-2 text-gray-600">Creating pathways to economic independence through digital entrepreneurship.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Community Building</h3>
                      <p className="mt-2 text-gray-600">Fostering supportive networks and mentorship opportunities for women in tech.</p>
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
export default GenderArea