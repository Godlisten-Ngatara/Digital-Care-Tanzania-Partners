// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button, Card, Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import * as echarts from "echarts";
import "boxicons";
import Header from "../components/header";
import Donation from "../components/donation";
import Footer from "../components/footer";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    const chart = echarts.init(document.getElementById("impactChart"));
    const option = {
      animation: false,
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Digital Literacy", "Internet Access", "Tech Startups"],
      },
      xAxis: {
        type: "category",
        data: ["2021", "2022", "2023", "2024", "2025"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Digital Literacy",
          type: "line",
          data: [30, 45, 60, 75, 85],
        },
        {
          name: "Internet Access",
          type: "line",
          data: [20, 35, 50, 65, 80],
        },
        {
          name: "Tech Startups",
          type: "line",
          data: [10, 25, 40, 55, 70],
        },
      ],
    };
    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header></Header>
      {/* Hero Section */}
      <section
        className="pt-20 relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://public.readdy.ai/ai/img_res/bbe014a2dc2241da228da469e4f86e4a.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Empowering Tanzania Through Digital Innovation
              </h1>
              <p className="text-xl mb-8">
                Building a sustainable digital future by connecting communities,
                fostering innovation, and creating opportunities for all
                Tanzanians.
              </p>
              <div className="flex space-x-4">
                <Button
                  type="primary"
                  size="large"
                  className="!rounded-button bg-blue-600 cursor-pointer"
                >
                  Our Programs
                </Button>
                <Button
                  size="large"
                  className="!rounded-button bg-white text-blue-600 cursor-pointer"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                50,000+
              </div>
              <div className="text-gray-600">People Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Digital Centers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-gray-600">Regions Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              cover={
                <img
                  alt="Digital Education"
                  src="https://public.readdy.ai/ai/img_res/a816e22aae32ef6d3797df49c9a04646.jpg"
                />
              }
            >
              <h3 className="text-xl font-bold mb-2">Digital Education</h3>
              <p className="text-gray-600">
                Providing digital literacy training to communities across
                Tanzania.
              </p>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              cover={
                <img
                  alt="Tech Innovation Hub"
                  src="https://public.readdy.ai/ai/img_res/bc4260c5283eb9097fe67ff099090491.jpg"
                />
              }
            >
              <h3 className="text-xl font-bold mb-2">Tech Innovation Hub</h3>
              <p className="text-gray-600">
                Supporting local startups and tech entrepreneurs.
              </p>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              cover={
                <img
                  alt="Rural Connectivity"
                  src="https://public.readdy.ai/ai/img_res/26200035ff357bf4109ef2257b1d1e47.jpg"
                />
              }
            >
              <h3 className="text-xl font-bold mb-2">Rural Connectivity</h3>
              <p className="text-gray-600">
                Expanding internet access to remote areas.
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="bg-white rounded-lg shadow-lg py-8 w-full">
            <div id="impactChart" className="w-full h-96"></div>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center">
              <box-icon type="logo" name="microsoft" size="lg"></box-icon>
            </div>
            <div className="flex items-center justify-center">
              <box-icon type="logo" name="google" size="lg"></box-icon>
            </div>
            <div className="flex items-center justify-center">
              <box-icon type="logo" name="amazon" size="lg"></box-icon>
            </div>
            <div className="flex items-center justify-center">
              <box-icon type="logo" name="apple" size="lg"></box-icon>
            </div>
          </div>
        </div>
      </section>
      {/* Donation Section */}
      <Donation></Donation>
      {/* Footer */}
      <Footer></Footer>
      {/* Get Involved Modal */}
      <Modal
        title="Get Involved"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div className="py-4">
          <h3 className="text-xl mb-4">
            Join us in transforming Tanzania's digital landscape
          </h3>

          <div className="space-y-4">
            <Button
              type="primary"
              block
              className="!rounded-button bg-blue-600"
            >
              Volunteer
            </Button>
            <Button
              type="primary"
              block
              className="!rounded-button bg-green-600"
            >
              Donate
            </Button>
            <Button
              type="primary"
              block
              className="!rounded-button bg-purple-600"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
