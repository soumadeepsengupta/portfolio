import React from "react";

export default function WorkCard({ darkMode }) {
  const works = Array(6).fill("SnapJini");
  return (
    <div className={`bg-red-500 rounded-2xl border-3 p-6 flex flex-col h-full dark:bg-red-500 ${darkMode ? 'border-white' : 'border-black'}`}>
      <div className="text-5xl font-editorial mb-4">Work</div>
      <div className="flex-1 flex flex-col gap-2">
        {works.map((work, i) => (
          <a
            key={i}
            href="#"
            className="group flex items-center justify-between py-2 border-b border-white/50 last:border-b-0 transition font-geist"
          >
            <span className="text-xl font-medium font-geist">{work}</span>
            <span className="transition-transform group-hover:translate-x-2 duration-200">
              <svg width="32" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12h22M18 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
