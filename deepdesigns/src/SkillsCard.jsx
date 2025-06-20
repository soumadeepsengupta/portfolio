import React from "react";

const skills = [
  { name: "HTML",logo: "/html.svg" },
  { name: "CSS",logo: "/css.svg" },
  { name: "Figma",logo: "/figma.svg" },
  { name: "Webflow",logo: "/webflow.svg" },
  { name: "Framer",logo: "/framer.svg" },
  { name: "Spline3D",logo: "/spline.svg" },
  { name: "Youtube",logo: "/youtube.svg" },
  { name: "ChatGPT",logo: "/chatgpt.svg" },
  { name: "Tailwind CSS",logo: "/tailwindcss.svg" },
  { name: "React JS",logo: "/react.svg" },
  { name: "Spotify", logo: "/spotify.svg" },
  { name: "JavaScript", logo: "/javascript.svg" },
];

export default function SkillsCard() {
  return (
    <div className="bg-fuchsia-400 rounded-2xl border-3 p-6 flex flex-col h-full">
      <div className="text-5xl font-editorial mb-4">Skills</div>
      <div className="flex flex-wrap gap-2 font-geist">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${skill.color} border border-transparent bg-white/25 transition-all duration-150 hover:bg-transparent hover:border-[#282828]`}
          >
            <img src={skill.logo} alt={skill.name + ' logo'} className="h-5 w-5 mr-1" />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
