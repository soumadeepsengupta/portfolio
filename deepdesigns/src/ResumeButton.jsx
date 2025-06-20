// import React from "react";

// export default function ResumeButton({ darkMode }) {
//   const baseBoxShadow = darkMode ? '0 6px 0 0 #fff' : '0 6px 0 0 #000';
//   const pressedBoxShadow = darkMode ? '0 2px 0 0 #fff' : '0 2px 0 0 #000';
//   return (
//     <a
//       href="#"
//       className={`absolute top-6 right-6 z-30 px-7 py-2 rounded-full border-2 ${darkMode ? 'border-white bg-black text-white' : 'border-black bg-white text-black'} font-geist font-medium text-lg tracking-wide shadow-md transition-all duration-150 active:scale-95`}
//       style={{ boxShadow: baseBoxShadow, transition: 'box-shadow 0.15s, transform 0.15s' }}
//       onMouseDown={e => e.currentTarget.style.boxShadow = pressedBoxShadow}
//       onMouseUp={e => e.currentTarget.style.boxShadow = baseBoxShadow}
//       onMouseLeave={e => e.currentTarget.style.boxShadow = baseBoxShadow}
//     >
//       RESUME
//     </a>
//   );
// }


import React from "react";

export default function ResumeButton({ darkMode }) {
  const baseBoxShadow = darkMode ? '0 6px 0 0 #fff' : '0 6px 0 0 #000';
  const pressedBoxShadow = darkMode ? '0 2px 0 0 #fff' : '0 2px 0 0 #000';
  const translateY = '4px';

  return (
    <a
      href="#"
      className={`absolute top-6 right-6 z-30 px-7 py-2 rounded-full border-2 
        ${darkMode ? 'border-white bg-black text-white' : 'border-black bg-white text-black'} 
        font-geist font-medium text-lg tracking-wide shadow-md 
        transition-all duration-150 active:scale-95`}
      style={{
        boxShadow: baseBoxShadow,
        transition: 'box-shadow 0.15s, transform 0.15s',
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
      }}
      onMouseEnter={(e) => {
        // Apply hover effect on enter
        e.currentTarget.style.boxShadow = pressedBoxShadow;
        e.currentTarget.style.transform = `translateY(${translateY})`;
      }}
    >
      RESUME
    </a>
  );
}
