import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomPointer from "./CustomPointer";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  const [hovered, setHovered] = useState(false);

  const background = darkMode ? "#fff" : "#000";
  const boxShadow = darkMode ? "0 6px 0 0 #fff" : "0 6px 0 0 #000";
  const toggleX = darkMode ? 44 : 4;
  const toggleBG = darkMode ? "#000" : "#fff";

  return (
    <>
      {hovered && <CustomPointer show={true} />}

      <motion.button
        className="absolute top-6 left-6 z-20 focus:outline-none"
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle dark mode"
        onMouseEnter={() => {
          setHovered(true);
          window.dispatchEvent(new Event('custom-cursor-hide'));
        }}
        onMouseLeave={() => {
          setHovered(false);
          window.dispatchEvent(new Event('custom-cursor-show'));
        }}
        style={{ width: 96, height: 54, transform: "scale(0.75)", cursor: "none" }}
      >
        <motion.div
          className="relative flex items-center h-full w-full"
          style={{
            borderRadius: 16,
            border: "4px solid #FF0000",
            boxShadow: boxShadow,
            background: background,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="absolute top-1/2 -translate-y-1/2"
            animate={{ x: toggleX }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
              borderRadius: 12,
              background: toggleBG,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {darkMode ? (
              <img src="/moon.svg" alt="Moon" width={20} height={20} style={{ filter: "invert(1)" }} />
            ) : (
              <img src="/sun.svg" alt="Sun" width={20} height={20} />
            )}
          </motion.span>
        </motion.div>
      </motion.button>
    </>
  );
}
