// import React from "react";
// import DarkModeToggle from "./DarkModeToggle";
// import Logo from "./Logo";
// import ResumeButton from "./ResumeButton";

// const Navbar = ({ darkMode, setDarkMode }) => (
//   <nav className="sticky top-0 z-30 w-full px-6 py-6 md:px-12 md:py-6 backdrop-blur-xs transition-colors duration-300 scale-100 [@media(max-width:600px)]:scale-50">
//     <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
//       <div className="flex-shrink-0">
//         <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
//       </div>
//       <div className="flex-1 flex justify-center">
//         <Logo darkMode={darkMode} />
//       </div>
//       <div className="flex-shrink-0">
//         <ResumeButton darkMode={darkMode} />
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;


import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import Logo from "../components/Logo";
import ResumeButton from "../components/ResumeButton";

const Navbar = ({ darkMode, setDarkMode }) => (
  <nav className="sticky top-0 z-30 w-full h-24 backdrop-blur-sm transition-colors duration-300 ">
    <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:px-12 md:py-4">
      {/* Dark Mode Toggle */}
      <div className="flex-shrink-0 [@media(max-width:600px)]:scale-50 py-10 px-5">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Logo */}
      <div className="flex-1 flex justify-center [@media(max-width:600px)]:scale-75">
        <Logo darkMode={darkMode} />
      </div>

      {/* Resume Button */}
      <div className="flex-shrink-0 [@media(max-width:600px)]:scale-50 py-10 px-5">
        <ResumeButton darkMode={darkMode} />
      </div>
    </div>
  </nav>
);

export default Navbar;
