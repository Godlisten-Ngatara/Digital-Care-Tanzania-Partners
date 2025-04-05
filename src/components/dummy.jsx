import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DropdownMenu from "./dropDown";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const thematicItems = [
    { label: 'Internet Governance and Digital Public Policy', key: '1' },
    { label: 'Internet for Water, Minerals and Gas', key: '2' },
    { label: 'Internet for Agriculture and Animal Husbandry', key: '3' },
    { label: 'Internet for Gender Equity and Gender Equality', key: '4' },
    { label: 'Internet Connectivity Research, Communication and Public Relations', key: '5' },
    { label: 'Internet for Better Health.', key: '6' },
    { label: 'Internet for Educational Pedagogy ', key: '7' },
    { label: 'Internet for Effective Democracy, Peace and Security', key: '8' },
    { label: 'Internet Connectivity, Extension and National Digitalization', key: '9' },
    { label: 'Internet for Business Administration, Enterpreneurship and Economy', key: '10' },
  ];
  const desc = "Thmeatic Areas"

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Logo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <DropdownMenu items={thematicItems} desc={desc}/>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <DropdownMenu items={thematicItems} desc={desc}/>
                <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;