import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "../components/Logo";
import ResumeButton from "../components/ResumeButton";
import IntroCard from "./IntroCard";
import PhotoCard from "./PhotoCard";
import WorkCard from "./WorkCard";
import SkillsCard from "./SkillsCard";
import ContactCard from "./ContactCard";
import SocialLinksFooter from "./SocialLinksFooter";
import CustomCursor from "../components/CustomCursor";
import CustomPointer from "../components/CustomPointer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCustomPointer, setShowCustomPointer] = useState(false); // Set to true where pointer.svg should be used

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Only show one cursor at a time */}
      <CustomCursor style={{ visibility: showCustomPointer ? 'hidden' : 'visible' }} />
      {showCustomPointer && <CustomPointer />}
      <div className={`relative min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}> 
        {/* Sticky, centered navbar with blur */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* Responsive bento grid layout */}
        <main
          className="w-full max-w-none mx-0 px-2 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 md:max-w-3xl xl:max-w-[1440px] md:mx-auto"
          style={{ minHeight: 'calc(100vh - 160px)' }}
        >
          {/* Row 1: IntroCard | PhotoCard | WorkCard (WorkCard spans 2 rows on xl) */}
          <div className="min-h-[340px] xl:min-h-[420px] h-full xl:col-span-5 xl:row-span-1">
            <IntroCard darkMode={darkMode} />
          </div>
          <div className="min-h-[340px] xl:min-h-[420px] h-full xl:col-span-3 xl:row-span-1">
            <PhotoCard darkMode={darkMode} />
          </div>
          <div className="min-h-[340px] xl:min-h-[660px] h-[61.6rem] md:col-span-2 xl:col-span-4 xl:row-span-2">
            <WorkCard darkMode={darkMode} />
          </div>
          {/* Row 2: SkillsCard | ContactCard */}
          <div className="min-h-[200px] xl:min-h-[220px] h-[32rem] xl:col-span-4 xl:row-span-1">
            <SkillsCard darkMode={darkMode} />
          </div>
          <div className="min-h-[200px] xl:min-h-[220px] h-[32rem] xl:col-span-4 xl:row-span-1">
            <ContactCard darkMode={darkMode} />
          </div>
        </main>
        {/* Footer always at the bottom, full width */}
        <footer className="w-full max-w-none mx-0 px-2 pb-6 md:max-w-3xl xl:max-w-[1440px] md:mx-auto">
          <SocialLinksFooter darkMode={darkMode} />
        </footer>
      </div>
    </>
  );
}

export default App;