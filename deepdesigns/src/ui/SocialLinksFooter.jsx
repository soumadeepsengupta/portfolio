import React from "react";

const links = [
  { name: "INSTAGRAM", url: "#" },
  { name: "BEHANCE", url: "#" },
  { name: "GITHUB", url: "#" },
  { name: "LINKEDIN", url: "#" },
];

export default function SocialLinksFooter({ darkMode }) {
  return (
    <div
      className={`bg-yellow-200 rounded-2xl border-3 p-4 flex flex-wrap justify-between items-center gap-4 text-lg font-light dark:bg-yellow-300 font-geist ${
        darkMode ? "border-white" : "border-black"
      }`}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="hover:underline transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
