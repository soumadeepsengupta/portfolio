import React from "react";

export default function IntroCard({ darkMode }) {
  return (
    <div className={`bg-green-500 rounded-2xl border-3 p-8 flex flex-col justify-between h-full ${darkMode ? 'border-white' : 'border-black'}`}>
      <div>
        <div className="text-2xl mb-2 font-geist font-regular tracking-[-1px]">Hi, I am</div>
        <div className="text-7xl font-editorial leading-[64px] tracking-[-1.44px] pb-8 pt-4">Soumadeep Sengupta</div>
        <div className="text-xl font-regular font-geist tracking-[-1px]">
          <span className="font-semibold">a Product Designer</span> and <span className="font-semibold">B.Tech</span> student at <span className="font-semibold">NIT Rourkela</span>, currently in my <span className="font-semibold">pre-final year</span>.
        </div>
        <div className="text-xl font-regular font-geist tracking-[-1px]">
          I design <span className="font-semibold">mobile, web, and AI-powered</span> products across domains like <span className="font-semibold">fintech, healthcare, education, and B2B SaaS</span>.<br />
          Blending <span className="font-semibold">art with tech</span>, I craft interfaces that are <span className="font-semibold">functional, playful</span>, and basically <span className="font-semibold">solve problems</span>.
        </div>
      </div>
    </div>
  );
}
