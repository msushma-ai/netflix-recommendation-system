"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaBell } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to darken navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all duration-500 ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      {/* Left: Logo + Navigation */}
      <div className="flex items-center space-x-8">
        <h1 className="text-red-600 text-3xl font-extrabold tracking-wider">
          NETFLIX
        </h1>
        <ul className="hidden md:flex space-x-6 text-gray-200 font-medium">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">TV Shows</li>
          <li className="hover:text-white cursor-pointer transition">Movies</li>
          <li className="hover:text-white cursor-pointer transition">New & Popular</li>
          <li className="hover:text-white cursor-pointer transition">My List</li>
        </ul>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6 text-gray-200">
        <FaSearch className="text-xl cursor-pointer hover:text-white transition" />
        <FaBell className="text-xl cursor-pointer hover:text-white transition" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Profile"
          className="w-8 h-8 rounded cursor-pointer"
        />
      </div>
    </nav>
  );
}

