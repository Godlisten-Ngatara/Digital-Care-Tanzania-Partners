import React from "react";
import {
  Heart,
  Target,
  Users,
  Globe2,
  Megaphone,
  Lightbulb,
  Globe,
  Scale,
  Building,
  Wrench,
} from "lucide-react";
import { Button } from "antd";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Donation from "../components/donation";
function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header></Header>
      {/* Hero Section */}
      <Hero></Hero>

      {/* Introduction Section */}
      <div className="container py-16  min-w-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Who We Are</h2>
          <p className="text-lg text-gray-600 font-semi leading-relaxed">
            Digital Care Tanzania Partners Organizations (DCTP) is an initiative
            that seeks to connect every person to the internet and every young
            person to information, opportunity and choice through partnerships.
            DCTP when stands together with stakeholders to
            advocate, archtech, educate and build digital capacities of the people
            in Tanzania shall stabilize the economy in various sectors including
            education, health, water, entrepreneurships and gender among others,
            through meaningful connectivity of the internet. Advocating for
            internet meaningful connectivity is the pivotal factor in bridging
            the gaps in digitalization within Tanzania. DCTP has digital
            inclusion goal at the center, to leave no one behind in digital
            agenda within Tanzania. It's the role of DCTP to evangelize internet
            and digital public policy as game changer in harnessing the power of
            Artificial Intelligence (AI) leverage different sectors connectivity
            national wide for sustainable development.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white py-16 ">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 ">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To unlock the future of Digital space and have a country in
                which interraction is whole and open,safe and secure.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Globe2 className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading catalyst for digital healthcare transformation
                in Tanzania, creating a future where every citizen has access to
                quality healthcare services enhanced by technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Objectives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <Megaphone className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Raise Awareness on Digital Knowledge & Scam Mitigation
            </h3>

            <p className="text-gray-600">
              Educating the community on digital literacy and scam awareness to
              ensure safe and responsible use of online platforms
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <Lightbulb className="w-12 h-12 text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Enhance Safe Digital Solutions & Digital Entrepreneurship
            </h3>
            <p className="text-gray-600">
              This involves promoting innovative digital solutions that support
              sustainable development.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <Globe className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Promote Digital Knowledge for Climate Change & Poverty Eradication
            </h3>
            <p className="text-gray-600">
              Utilizing digital technology to combat climate change and support
              poverty reduction initiatives.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <Scale className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Enhance Legal Matters & Digital Governance
            </h3>
            <p className="text-gray-600">
              Advocating for strong internet governance, digital rights, and
              cybersecurity policies
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <Wrench className="w-12 h-12 text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Promote Sustainable Development through Organized Digitalization
            </h3>
            <p className="text-gray-600">
              Leveraging digital transformation to drive long-term economic and
              social development.
            </p>
          </div>
        </div>
      </div>
      {/* Donation */}
      <Donation></Donation>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default About;
