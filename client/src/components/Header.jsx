import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-white-900 text-black">
        <div className="container px-6 py-4 mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-lg font-bold">
              MCA Alumni Network
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 text-sm">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/our-alumni" className="hover:text-gray-300">
              Our Alumni
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link to="/signup" className="hover:text-gray-300">
              Sign Up
            </Link>
            <Link to="/login" className="hover:text-gray-300">
              Log In
            </Link>
          </nav>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden">
            <div className="px-6 pt-4 pb-2 space-y-2">
              <Link to="/" className="block text-sm font-semibold hover:text-gray-300">
                Home
              </Link>
              <Link to="/about" className="block text-sm font-semibold hover:text-gray-300">
                About
              </Link>
              <Link to="/our-alumni" className="block text-sm font-semibold hover:text-gray-300">
                Our Alumni
              </Link>
              <Link to="/contact" className="block text-sm font-semibold hover:text-gray-300">
                Contact
              </Link>
              <Link to="/signup" className="block text-sm font-semibold hover:text-gray-300">
                Sign Up
              </Link>
              <Link to="/login" className="block text-sm font-semibold hover:text-gray-300">
                Log In
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
