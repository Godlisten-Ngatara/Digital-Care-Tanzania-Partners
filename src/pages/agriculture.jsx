import React from 'react'
import StatCard from '../components/statCard';
import FeatureCard from '../components/featureCard';
import TeamMemberCard from '../components/teamCard';
import { Wheat, Leaf, Cloud, BarChart3, Users, LineChart, Sprout, Sun } from 'lucide-react';
import Header from '../components/header';
import Hero from '../components/hero';
import Donation from '../components/donation';
import Footer from '../components/footer';
const AgricultureArea = () => {
    const stats = [
      { icon: <Wheat className="w-6 h-6" />, stat: "100K+", label: "Farmers Connected" },
      { icon: <Sprout className="w-6 h-6" />, stat: "500K+", label: "Hectares Monitored" },
      { icon: <Cloud className="w-6 h-6" />, stat: "95%", label: "Forecast Accuracy" },
      { icon: <LineChart className="w-6 h-6" />, stat: "40%", label: "Yield Increase" }
    ];
  
    const features = [
      {
        icon: <Sun className="w-6 h-6" />,
        title: "Smart Farming Solutions",
        description: "IoT-based monitoring systems for crop health, soil conditions, and weather patterns."
      },
      {
        icon: <Cloud className="w-6 h-6" />,
        title: "Weather Forecasting",
        description: "Advanced meteorological predictions for optimal farming decisions."
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Yield Optimization",
        description: "Data-driven insights for maximizing crop yields and resource efficiency."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Farmer Network",
        description: "Digital platform connecting farmers with experts, markets, and resources."
      }
    ];
  
    const teamMembers = [
      {
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=800",
        name: "Dr. Joseph Kilimo",
        role: "Agricultural Technology Director",
        description: "Leading the integration of digital solutions in agriculture with 18 years of experience in AgriTech."
      },
      {
        image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800",
        name: "Grace Mwangi",
        role: "Smart Farming Lead",
        description: "Expert in implementing IoT solutions for precision agriculture and sustainable farming."
      },
      {
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
        name: "Peter Msafiri",
        role: "Livestock Systems Manager",
        description: "Specializing in digital solutions for livestock management and veterinary care."
      }
    ];
    const heroTitle = "Internet for Agriculture and Animal Husbandry"
    const heroDesc = "Transforming farming practices through digital innovation and smart agricultural solutions."
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
        <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Digital Agricultural Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Innovative technologies empowering farmers and revolutionizing
                agricultural practices across Tanzania.
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
                Agricultural Innovation Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our experts revolutionizing farming through technology
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
                      <h3 className="text-lg font-semibold text-gray-900">Increased Crop Yields</h3>
                      <p className="mt-2 text-gray-600">Helping farmers achieve better yields through precision agriculture and smart farming techniques.</p>
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
                      <h3 className="text-lg font-semibold text-gray-900">Resource Optimization</h3>
                      <p className="mt-2 text-gray-600">Implementing efficient water and resource management systems for sustainable farming.</p>
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
                      <h3 className="text-lg font-semibold text-gray-900">Market Access</h3>
                      <p className="mt-2 text-gray-600">Connecting farmers directly to markets and buyers through digital platforms.</p>
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
  export default AgricultureArea