import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import ResumeButton from "../components/ResumeButton";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => (
  <nav className="sticky top-0 z-30 w-full h-24 backdrop-blur-sm transition-colors duration-300">
    <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:px-12 md:py-4">
      {/* Dark Mode Toggle */}
      <div className="flex-shrink-0 [@media(max-width:600px)]:scale-50 py-10 px-5">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Logo with Framer Motion layout animation */}
      <motion.div
        layoutId="logo"
        className="flex-1 flex justify-center [@media(max-width:600px)]:scale-75"
      >
        <Logo darkMode={darkMode} />
      </motion.div>

      {/* Resume Button */}
      <div className="flex-shrink-0 [@media(max-width:600px)]:scale-50 py-10 px-5">
        <ResumeButton darkMode={darkMode} />
      </div>
    </div>
  </nav>
);

export default Navbar;
