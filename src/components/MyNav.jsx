import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-xl font-bold">
            Your Logo
          </a>
        </div>
        {/* Hamburger Menu Icon - Hidden on Larger Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Slide-in menu - Visible on Smaller Screens */}
        <div
          className={`md:hidden fixed top-0 left-0 bg-gray-800 h-full w-64 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <DropdownMenu
              title="Home"
              items={["Dashboard", "Analytics", "Reports"]}
            />
            <DropdownMenu
              title="About"
              items={["Company", "Team", "Careers"]}
            />
            <DropdownMenu
              title="Services"
              items={["Web Development", "Mobile App Development", "SEO"]}
            />
            <DropdownMenu
              title="Products"
              items={["Product 1", "Product 2", "Product 3"]}
            />
            <DropdownMenu
              title="Blog"
              items={["Article 1", "Article 2", "Article 3"]}
            />
            <DropdownMenu
              title="Contact"
              items={["Email", "Phone", "Location"]}
            />
          </div>
        </div>
        {/* Menu for Larger Screens - Hidden on Smaller Screens */}
        <div className="hidden md:flex items-center">
          <DropdownMenu
            title="Home"
            items={["Dashboard", "Analytics", "Reports"]}
          />
          <DropdownMenu title="About" items={["Company", "Team", "Careers"]} />
          <DropdownMenu
            title="Services"
            items={["Web Development", "Mobile App Development", "SEO"]}
          />
          <DropdownMenu
            title="Products"
            items={["Product 1", "Product 2", "Product 3"]}
          />
          <DropdownMenu
            title="Blog"
            items={["Article 1", "Article 2", "Article 3"]}
          />
          <DropdownMenu
            title="Contact"
            items={["Email", "Phone", "Location"]}
          />
        </div>
      </div>
    </nav>
  );
};

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <a
        href="/"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {title}
      </a>
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg">
          {items.map((item, index) => (
            <a
              key={index}
              href="/"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
