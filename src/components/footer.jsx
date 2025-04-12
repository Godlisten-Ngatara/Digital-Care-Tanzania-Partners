import React from "react";
import { Button } from "antd";
import "boxicons";
import { color } from "echarts";
import { Locate, Mail, MapPin, Phone } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex space-x-2 items-center">
              <MapPin className="w-[12px] h-[12px] text-gray-400" />
              <p className="text-gray-400">123 Digital Street</p>
            </div>
            <div className="flex space-x-2 items-center">
              <MapPin className="w-[12px] h-[12px] text-gray-400" />
              <p className="text-gray-400">Dar es Salaam, Tanzania</p>
            </div>
            <div className="flex space-x-2 items-center">
              <Mail className="w-[12px] h-[12px] text-gray-400" />
              <p className="text-gray-400">info@digitalcaretz.org</p>
            </div>
            <div className="flex space-x-2 items-center">
              <Phone className="w-[12px] h-[12px] text-gray-400" />
              <p className="text-gray-400">+255 756 002 726</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 ">Follow Us</h4>
            <div className="flex space-x-4 text-white">
              <box-icon
                type="logo"
                name="instagram"
                size="lg"
                style={{ fill: "gray", opacity: "0.6", cursor: "pointer" }}
              ></box-icon>
              <box-icon
                type="logo"
                name="twitter"
                size="lg"
                style={{ fill: "gray", opacity: "0.6", cursor: "pointer" }}
              ></box-icon>
              <box-icon
                type="logo"
                name="linkedin"
                size="lg"
                style={{ fill: "gray", opacity: "0.6", cursor: "pointer",}}
              ></box-icon>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex items-center h-10">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full h-full border focus:outline-none"
              />
              <Button
                type="primary"
                className="!rounded-r-lg !rounded-l-none bg-white-300 h-10"
                style={{
                  backgroundColor: "red",
                  borderRadius: "8px",
                  height: "100%",
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Digital Care Tanzania. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
