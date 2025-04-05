import React from "react";
import FeatureCard from "../components/featureCard";
import StatCard from "../components/statCard";
import TeamMemberCard from "../components/teamCard";
import { GraduationCap, BookOpen, Monitor, Users, Brain, Laptop, Globe, Award } from 'lucide-react';
import Header from "../components/header";
import Hero from "../components/hero";
import Donation from '../components/donation';
import Footer from '../components/footer';

const EducationArea = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, stat: "100K+", label: "Students Reached" },
    { icon: <BookOpen className="w-6 h-6" />, stat: "1000+", label: "Digital Courses" },
    { icon: <Monitor className="w-6 h-6" />, stat: "500+", label: "Schools Connected" },
    { icon: <Award className="w-6 h-6" />, stat: "95%", label: "Success Rate" }
  ];

  const features = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Digital Learning Platform",
      description: "Interactive online learning environment with personalized content and progress tracking."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Education",
      description: "Adaptive learning systems that customize content based on student performance and learning style."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Connectivity",
      description: "Connecting Tanzanian students with international educational resources and opportunities."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Teacher Development",
      description: "Professional development programs for educators in digital pedagogy and modern teaching methods."
    }
  ];

  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1573496799515-eebf6dc7edb4?auto=format&fit=crop&q=80&w=800",
      name: "Prof. Mary Mkwawa",
      role: "Digital Education Director",
      description: "Leading the transformation of education through technology with 20 years of experience in educational innovation."
    },
    {
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
      name: "Dr. James Kishimba",
      role: "EdTech Innovation Lead",
      description: "Pioneering new approaches to digital learning and educational technology implementation."
    },
    {
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=800",
      name: "Sarah Mwakasege",
      role: "Teacher Training Coordinator",
      description: "Developing and implementing digital training programs for educators across Tanzania."
    }
  ];
  const heroTitle = "Internet for Educational Pedagogy"
  const heroDesc = "Transforming education through digital innovation and modern teaching methodologies."
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
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Digital Education Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative approaches to learning and teaching in the digital age,
              empowering both educators and students.
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
              Education Innovation Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our experts revolutionizing education through technology
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
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Enhanced Learning Outcomes</h3>
                    <p className="mt-2 text-gray-600">Improved student performance through personalized digital learning experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Teacher Empowerment</h3>
                    <p className="mt-2 text-gray-600">Equipping educators with digital tools and modern teaching methodologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Increased Access</h3>
                    <p className="mt-2 text-gray-600">Bringing quality education to remote and underserved communities through digital platforms.</p>
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

export default EducationArea;