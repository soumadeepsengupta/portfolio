import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const links = [
  { name: "INSTAGRAM", url: "https://www.instagram.com/senguptasomuchdeep/" },
  { name: "BEHANCE", url: "https://www.behance.net/soumadesengupt" },
  { name: "GITHUB", url: "https://github.com/soumadeepsengupta" },
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/soumadeep-sengupta-0b6017235/" },
];

export default function SocialLinksFooter({ darkMode, setShowCustomPointer }) {
  return (
    <div
      className={`bg-yellow-200 rounded-2xl border-3 p-4 flex flex-col items-center justify-center text-lg font-light dark:bg-yellow-300 font-geist ${
        darkMode ? "border-white" : "border-black"
      }`}
      onMouseEnter={() => setShowCustomPointer && setShowCustomPointer(true)}
      onMouseLeave={() => setShowCustomPointer && setShowCustomPointer(false)}
    >
      <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="social-link use-pointer transition cursor-none hover:opacity-80 pt-4 p-3 pb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlipText text={link.name} />
          </a>
        ))}
      </div>
    </div>
  );
}

const FlipText = ({ text }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className="relative inline-block align-middle text-2xl font-medium"
      style={{ lineHeight: 1, height: "2.5rem", verticalAlign: "middle" }}
    >
      <span
        className="block relative"
        style={{
          height: "1.5rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Outgoing Row */}
        <span
          className="relative z-10"
          style={{ display: "inline-block", height: "1.5rem", verticalAlign: "middle" }}
        >
          {text.split("").map((l, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ height: "1.5rem", verticalAlign: "middle" }}
            >
              {l}
            </motion.span>
          ))}
        </span>

        {/* Incoming Row */}
        <span
          className="absolute left-0 top-0 w-full h-full pointer-events-none z-20"
          style={{
            display: "inline-block",
            height: "1.5rem",
            lineHeight: 1,
            whiteSpace: "nowrap",
            verticalAlign: "middle",
          }}
        >
          {text.split("").map((l, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ height: "1.5rem", verticalAlign: "middle" }}
            >
              {l}
            </motion.span>
          ))}
        </span>
      </span>
    </motion.span>
  );
}

/* Add styles for custom pointer and underline animation */
<style jsx global>{`
  .social-link {
    text-decoration: none;
    position: relative;
    opacity: 1;
  }
  .social-link:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
  .social-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }
  .social-link:hover::after {
    transform: scaleX(1);
  }
`}</style>
