// import React from "react";
// import { Button } from "antd";
// import DropdownMenu from "./dropDown";
// function Header() {
//   const thematicItems = [
//     { label: 'Internet Governance and Digital Public Policy', key: '1' },
//     { label: 'Internet for Water, Minerals and Gas', key: '2' },
//     { label: 'Internet for Agriculture and Animal Husbandry', key: '3' },
//     { label: 'Internet for Gender Equity and Gender Equality', key: '4' },
//     { label: 'Internet Connectivity Research, Communication and Public Relations', key: '5' },
//     { label: 'Internet for Better Health.', key: '6' },
//     { label: 'Internet for Educational Pedagogy ', key: '7' },
//     { label: 'Internet for Effective Democracy, Peace and Security', key: '8' },
//     { label: 'Internet Connectivity, Extension and National Digitalization', key: '9' },
//     { label: 'Internet for Business Administration, Enterpreneurship and Economy', key: '10' },
//   ];
//   const desc = "Thematic Areas"
//   return (
//     <header className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <i className="fas fa-globe-africa text-3xl text-blue-600"></i>
//           <span className="text-xl font-bold text-gray-800">
//             Digital Care Tanzania
//           </span>
//         </div>
//         <nav className="hidden md:flex space-x-8">
//           <a
//             href="#about"
//             className="text-gray-600 hover:text-blue-600 cursor-pointer"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="text-gray-600 hover:text-blue-600 cursor-pointer"
//           >
//             About
//           </a>
//          <DropdownMenu items={thematicItems} desc={desc}/>
//         </nav>
//         <Button
//           type="primary"
//           className="!rounded-button bg-blue-600 text-white cursor-pointer"
//           onClick={() => setIsModalOpen(true)}
//         >
//           Get Involved
//         </Button>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DropdownMenu from "./dropDown";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const thematicItems = [
    {
      label: "Internet Governance and Digital Public Policy",
      key: "1",
      path: "/internet-governance",
    },
    {
      label: "Internet for Water, Minerals and Gas",
      key: "2",
      path: "/internet-resources",
    },
    {
      label: "Internet for Agriculture and Animal Husbandry",
      key: "3",
      path: "/internet-agriculture",
    },
    {
      label: "Internet for Gender Equity and Gender Equality",
      key: "4",
      path: "/internet-gender-equality",
    },
    {
      label: "Internet Connectivity Research, Communication and Public Relations",
      key: "5",
      path: "/internet-connectivity-research",
    },
    {
      label: "Internet for Better Health.",
      key: "6",
      path: "/internet-health",
    },
    {
      label: "Internet for Educational Pedagogy ",
      key: "7",
      path: "/internet-education",
    },
    {
      label: "Internet for Effective Democracy, Peace and Security",
      key: "8",
      path: "/internet-democracy",
    },
    {
      label: "Internet Connectivity, Extension and National Digitalization",
      key: "9",
      path: "/internet-digitalization",
    },
    {
      label:
        "Internet for Business Administration, Enterpreneurship and Economy",
      key: "10",
      path: "/internet-business",
    },
  ];
  
  const desc = "Thematic Areas";

  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">
                Digital Care Tanzania Partners
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                About
              </Link>
              <DropdownMenu items={thematicItems} desc={desc} />
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
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <DropdownMenu items={thematicItems} desc={desc} />
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
};

export default Header;
