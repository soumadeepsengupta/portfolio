import React, { useState } from "react";
import CustomPointer from "./CustomPointer";

export default function ResumeButton({ darkMode }) {
  const [showCursor, setShowCursor] = useState(false);
  const baseBoxShadow = darkMode ? '0 6px 0 0 #fff' : '0 6px 0 0 #000';
  const pressedBoxShadow = darkMode ? '0 2px 0 0 #fff' : '0 2px 0 0 #000';
  const translateY = '4px';

  return (
    <>
      <CustomPointer show={showCursor} />
      <a
        href="https://drive.google.com/drive/folders/1NUWueMfi1ScabLb6LII_6JJTgOhP6DRU?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={`use-pointer absolute top-6 right-6 z-30 px-7 py-2 rounded-full border-2 
          ${darkMode ? 'border-white bg-black text-white' : 'border-black bg-white text-black'} 
          font-geist font-medium text-lg tracking-wide shadow-md 
          transition-all duration-150 active:scale-95`}
        style={{
          boxShadow: baseBoxShadow,
          transition: 'box-shadow 0.15s, transform 0.15s',
          cursor: 'none',
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.boxShadow = pressedBoxShadow;
          e.currentTarget.style.transform = `translateY(${translateY})`;
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.boxShadow = baseBoxShadow;
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = baseBoxShadow;
          e.currentTarget.style.transform = 'translateY(0)';
          setShowCursor(false);
        }}
        onMouseEnter={(e) => {
          // Apply hover effect on enter
          e.currentTarget.style.boxShadow = pressedBoxShadow;
          e.currentTarget.style.transform = `translateY(${translateY})`;
          setShowCursor(true);
        }}
      >
        RESUME
      </a>
    </>
  );
}
