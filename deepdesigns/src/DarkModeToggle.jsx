import React from "react";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="absolute top-6 left-6 z-20 bg-white border rounded-xl p-2 shadow-md dark:bg-black"
      onClick={() => setDarkMode((d) => !d)}
      aria-label="Toggle dark mode"
    >
      <span role="img" aria-label="toggle">🌓</span>
    </button>
  );
}
