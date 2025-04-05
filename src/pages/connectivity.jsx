import React from "react";
import FeatureCard from "../components/featureCard";
import StatCard from "../components/statCard";
import TeamMemberCard from "../components/teamCard";
import { Droplets, BarChart, Database, CloudRain, Users, LineChart } from 'lucide-react';
import Header from "../components/header";
import Hero from "../components/hero";
import Donation from '../components/donation';
import Footer from '../components/footer';
const ConnectivityArea = () => {
    const stats = [
      { icon: <Droplets className="w-6 h-6" />, stat: "500+", label: "Water Sources Monitored" },
      { icon: <Database className="w-6 h-6" />, stat: "1M+", label: "Data Points Collected" },
      { icon: <Users className="w-6 h-6" />, stat: "2M+", label: "People Served" },
      { icon: <LineChart className="w-6 h-6" />, stat: "95%", label: "Accuracy Rate" }
    ];
  
    const features = [
      {
        icon: <CloudRain className="w-6 h-6" />,
        title: "Smart Water Monitoring",
        description: "Real-time monitoring of water quality and distribution systems using IoT sensors."
      },
      {
        icon: <Database className="w-6 h-6" />,
        title: "Data Analytics Platform",
        description: "Advanced analytics for water resource management and consumption patterns."
      },
      {
        icon: <BarChart className="w-6 h-6" />,
        title: "Predictive Maintenance",
        description: "AI-powered system for predicting and preventing infrastructure issues."
      },
      {
        icon: <Droplets className="w-6 h-6" />,
        title: "Resource Optimization",
        description: "Smart allocation of water resources based on demand and availability."
      }
    ];
  
    const teamMembers = [
      {
        image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=800",
        name: "Dr. Elizabeth Mwakitwange",
        role: "Water Resources Director",
        description: "Leading water resource management initiatives with 15 years of experience in environmental engineering."
      },
      {
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
        name: "Amina Hassan",
        role: "Data Analytics Lead",
        description: "Spearheading the implementation of data-driven solutions for water management."
      },
      {
        image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?auto=format&fit=crop&q=80&w=800",
        name: "Robert Makonda",
        role: "IoT Systems Engineer",
        description: "Developing and maintaining smart monitoring systems for water infrastructure."
      }
    ];
  const heroTitle = "Internet for Connectivity, Extension and National Digitalization"
  const heroDesc = "Leveraging digital technology to optimize resource management and enhance sustainability in natural resource sectors."
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
        <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Smart Resource Management
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Innovative digital solutions for efficient management of water resources
                and natural gas distribution.
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
                Our Expert Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the specialists driving innovation in resource management
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
                      <h3 className="text-lg font-semibold text-gray-900">Improved Resource Management</h3>
                      <p className="mt-2 text-gray-600">Optimizing water distribution and reducing waste through smart monitoring.</p>
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
                      <h3 className="text-lg font-semibold text-gray-900">Enhanced Infrastructure</h3>
                      <p className="mt-2 text-gray-600">Implementing predictive maintenance to prevent system failures and leaks.</p>
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
                      <h3 className="text-lg font-semibold text-gray-900">Data-Driven Decisions</h3>
                      <p className="mt-2 text-gray-600">Using analytics to make informed decisions about resource allocation and conservation.</p>
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
  
  export default ConnectivityArea;