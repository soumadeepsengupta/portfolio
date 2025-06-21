import React from "react";

export default function IntroCard({ darkMode }) {
  return (
    <div className={`bg-green-500 rounded-2xl border-3 p-6 flex flex-col justify-between h-full ${darkMode ? 'border-white' : 'border-black'}`}>
      <div>
        <div className="text-lg mb-2 font-geist">Hi, I am</div>
        <div className="text-5xl font-editorial leading-tight mb-2">Soumadeep Sengupta</div>
        <div className="font-semibold font-geist">
          <span className="font-bold">a Product Designer</span> and <span className="font-bold">B.Tech</span> student at <span className="font-bold">NIT Rourkela</span>, currently in my <span className="font-bold">pre-final year</span>.
        </div>
        <div className="mt-2 font-geist">
          I design <span className="font-bold">mobile, web, and AI-powered</span> products across domains like <span className="font-bold">fintech, healthcare, education, and B2B SaaS</span>.<br />
          Blending <span className="font-bold">art with tech</span>, I craft interfaces that are <span className="font-bold">functional, playful</span>, and basically <span className="font-bold">solve problems</span>.
        </div>
      </div>
    </div>
  );
}
