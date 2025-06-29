import React from "react";

export default function Logo({ darkMode }) {
  return (
    <div className=" flex justify-center items-center transition-colors duration-300">
      <img
        src="/logo_dd.svg"
        alt="deepdesigns logo"
        className={`h-12 w-auto ${darkMode ? 'invert' : ''}`}
        draggable={false}
      />
    </div>
  );
}
