import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import ResumeButton from "./ResumeButton";
import IntroCard from "./IntroCard";
import PhotoCard from "./PhotoCard";
import WorkCard from "./WorkCard";
import SkillsCard from "./SkillsCard";
import ContactCard from "./ContactCard";
import SocialLinksFooter from "./SocialLinksFooter";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen transition-colors duration-200 ${darkMode ? 'bg-black' : 'bg-white'}`}> 
      {/* Sticky, centered navbar with blur */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Responsive bento grid layout */}
      <main
        className="w-full max-w-none mx-0 px-2 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:max-w-3xl xl:max-w-[1440px] md:mx-auto"
        style={{ minHeight: 'calc(100vh - 160px)' }}
      >
        {/* Desktop/tablet: grid, Mobile: stack */}
        <div className="flex flex-col gap-4 h-full md:col-span-1">
          <div className="flex-1 min-h-[340px] xl:min-h-[420px]">
            <IntroCard />
          </div>
          <div className="flex-1 min-h-[200px] xl:min-h-[220px]">
            <SkillsCard />
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full md:col-span-1">
          <div className="flex-1 min-h-[340px] xl:min-h-[420px]">
            <PhotoCard darkMode={darkMode} />
          </div>
          <div className="flex-1 min-h-[200px] xl:min-h-[220px]">
            <ContactCard darkMode={darkMode} />
          </div>
        </div>
        <div className="flex flex-col h-full md:col-span-1">
          <div className="flex-1 min-h-[560px] xl:min-h-[660px]">
            <WorkCard />
          </div>
        </div>
      </main>
      {/* On mobile, SocialLinksFooter is always full width and directly below WorkCard */}
      <footer className="w-full max-w-none mx-0 px-2 pb-6 md:max-w-3xl xl:max-w-[1440px] md:mx-auto">
        <SocialLinksFooter />
      </footer>
    </div>
  );
}

export default App;