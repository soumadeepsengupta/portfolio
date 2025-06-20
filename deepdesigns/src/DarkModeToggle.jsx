import React from "react";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="absolute top-6 left-6 z-20 focus:outline-none"
      onClick={() => setDarkMode((d) => !d)}
      aria-label="Toggle dark mode"
      style={{ width: 96, height: 54, transform: 'scale(0.75)' }}
    >
      <div
        className="relative flex items-center h-full w-full"
        style={{
          borderRadius: 16,
          border: '4px solid #FF0000',
          boxShadow: darkMode ? '0 6px 0 0 #fff' : '0 6px 0 0 #000',
          background: darkMode ? '#fff' : '#000',
          transition: 'background 0.3s',
        }}
      >
        <span
          className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300"
          style={{
            left: darkMode ? 44 : 4,
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            borderRadius: 12,
            background: darkMode ? '#000' : '#fff',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s',
          }}
        >
          {darkMode ? (
            <img src="/moon.svg" alt="Moon" width={20} height={20} style={{ filter: 'invert(1)' }} />
          ) : (
            <img src="/sun.svg" alt="Sun" width={20} height={20} />
          )}
        </span>
      </div>
    </button>
  );
}
