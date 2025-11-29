import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Frame from "../assets/Frame.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEmailClick = () => {
    const email = "varunnegiweb@gmail.com";
    const subject = "Project Inquiry";
    const body = "Hello!";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <header className="bg-[#CEC6FF] sticky top-0 z-50">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-4">
        <img src={Frame} alt="Logo" className="h-20 w-16" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-prompt font-semibold text-lg text-black">Work</a>
          <a href="#" className="font-prompt font-semibold text-lg text-black">About</a>
          <a href="#" className="font-prompt font-semibold text-lg text-black">Contact</a>
          <button
            onClick={handleEmailClick}
            className="bg-[#4F3B78] cursor-pointer text-white font-bold rounded-lg h-12 w-30 font-prompt text-lg"
          >
            Email-Me
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#CEC6FF] space-y-4 py-6">
          <a href="#" className="font-prompt font-semibold text-lg text-black">Work</a>
          <a href="#" className="font-prompt font-semibold text-lg text-black">About</a>
          <a href="#" className="font-prompt font-semibold text-lg text-black">Contact</a>
          <button
            onClick={handleEmailClick}
            className="bg-[#4F3B78] cursor-pointer text-white font-bold rounded-lg h-12 w-32 font-prompt text-lg"
          >
            Email-Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
