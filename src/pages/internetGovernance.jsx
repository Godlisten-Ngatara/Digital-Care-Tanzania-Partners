import React from 'react'
import StatCard from '../components/statCard';
import FeatureCard from '../components/featureCard';
import TeamMemberCard from '../components/teamCard';
import { Gavel, Scale, FileText, Users, Shield, Globe } from 'lucide-react';
import Header from '../components/header';
import Hero from '../components/hero';
import Donation from '../components/donation';
import Footer from '../components/footer';
const GovernanceArea = () => {
    const stats = [
      { icon: <FileText className="w-6 h-6" />, stat: "50+", label: "Policy Frameworks" },
      { icon: <Users className="w-6 h-6" />, stat: "1M+", label: "Citizens Impacted" },
      { icon: <Shield className="w-6 h-6" />, stat: "100+", label: "Digital Initiatives" },
      { icon: <Globe className="w-6 h-6" />, stat: "25+", label: "Partner Organizations" }
    ];
  
    const features = [
      {
        icon: <Gavel className="w-6 h-6" />,
        title: "Digital Policy Framework",
        description: "Comprehensive guidelines ensuring responsible and inclusive internet governance."
      },
      {
        icon: <Scale className="w-6 h-6" />,
        title: "Regulatory Compliance",
        description: "Ensuring digital initiatives align with national and international standards."
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Cybersecurity Measures",
        description: "Implementing robust security protocols to protect digital infrastructure."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Stakeholder Engagement",
        description: "Fostering collaboration between government, private sector, and civil society."
      }
    ];
  
    const teamMembers = [
      {
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
        name: "Dr. Benjamin Mkapa",
        role: "Digital Policy Director",
        description: "Leading the development and implementation of digital governance frameworks with over 20 years of experience in public policy."
      },
      {
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
        name: "Maria Nyerere",
        role: "Regulatory Affairs Lead",
        description: "Expertise in digital policy compliance and regulatory frameworks across East Africa."
      },
      {
        image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800",
        name: "John Magufuli",
        role: "Stakeholder Relations Manager",
        description: "Coordinating between government bodies and private sector partners to ensure inclusive digital governance."
      }
    ];
  const heroTitle = "Internet Governance & Digital Public Policy"
  const heroDesc = "Shaping Tanzania's digital future through comprehensive policy frameworks and inclusive governance strategies."
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
        <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Governance Framework
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive approaches to digital governance ensuring responsible and
                inclusive internet policies across Tanzania.
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
                Policy Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experts shaping Tanzania's digital governance landscape
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
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Enhanced Digital Infrastructure</h3>
                      <p className="mt-2 text-gray-600">Establishing robust frameworks for sustainable digital growth across Tanzania.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Inclusive Digital Policies</h3>
                      <p className="mt-2 text-gray-600">Creating policies that ensure equal access and opportunities in the digital space.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Strengthened Cybersecurity</h3>
                      <p className="mt-2 text-gray-600">Implementing comprehensive security measures to protect digital assets and citizens.</p>
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
  export default GovernanceArea
  