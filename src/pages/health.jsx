import React from 'react';
import { Heart, Stethoscope, Guitar as Hospital, Brain, Users, Phone, Clock, BarChart as ChartBar } from 'lucide-react';
import Header from '../components/header';
import StatCard from '../components/statCard';
import FeatureCard from '../components/featureCard';
import TeamMemberCard from '../components/teamCard';
import Hero from '../components/hero';
import Donation from '../components/donation';
import Footer from '../components/footer';
const HealthArea = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, stat: "50,000+", label: "Patients Reached" },
    { icon: <Hospital className="w-6 h-6" />, stat: "200+", label: "Healthcare Facilities" },
    { icon: <Phone className="w-6 h-6" />, stat: "24/7", label: "Telehealth Support" },
    { icon: <ChartBar className="w-6 h-6" />, stat: "85%", label: "Success Rate" }
  ];

  const features = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Telemedicine Services",
      description: "Connect with healthcare professionals remotely through secure video consultations."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Diagnostics",
      description: "Utilizing artificial intelligence to assist in preliminary medical assessments."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous health monitoring through connected devices and digital health records."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Preventive Healthcare",
      description: "Digital tools and resources for maintaining good health and preventing illness."
    }
  ];

  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
      name: "Dr. Sarah Kimathi",
      role: "Head of Digital Health Initiatives",
      description: "Leading the integration of digital solutions in healthcare delivery across Tanzania with over 15 years of experience in medical technology."
    },
    {
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
      name: "Dr. James Mwangi",
      role: "Telemedicine Program Director",
      description: "Pioneering remote healthcare solutions and establishing telemedicine protocols to reach underserved communities."
    },
    {
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
      name: "Grace Ochieng",
      role: "Health Technology Innovation Lead",
      description: "Spearheading the development of AI-driven diagnostic tools and digital health platforms for improved patient care."
    }
  ];
const heroTitle = "Internet for Better Health"
const heroDesc = "Transforming healthcare delivery in Tanzania through digital innovation and accessible telemedicine solutions."
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
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Digital Health Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital healthcare services designed to improve access
              and quality of healthcare across Tanzania.
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working to revolutionize healthcare through digital innovation
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
                    <h3 className="text-lg font-semibold text-gray-900">Increased Healthcare Access</h3>
                    <p className="mt-2 text-gray-600">Providing remote healthcare services to underserved communities across Tanzania.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900">Improved Health Outcomes</h3>
                    <p className="mt-2 text-gray-600">Better monitoring and management of chronic conditions through digital health tools.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900">Enhanced Healthcare Efficiency</h3>
                    <p className="mt-2 text-gray-600">Streamlined healthcare delivery through digital systems and telemedicine platforms.</p>
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

export default HealthArea;