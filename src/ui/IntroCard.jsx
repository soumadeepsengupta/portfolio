// import React from "react";

// export default function IntroCard({ darkMode }) {
//   return (
//     <div className={`bg-green-500 rounded-2xl border-3 p-8 flex flex-col justify-between h-full ${darkMode ? 'border-white' : 'border-black'}`}>
//       <div>
//         <div className="text-2xl mb-2 font-geist font-regular tracking-[-1px]">Hi, I am</div>
//         <div className="text-5xl md:text-7xl font-editorial leading-[64px] tracking-[-1.44px] pb-8 pt-4">
//           Soumadeep Sengupta
//         </div>
//         <div className="text-xl font-regular font-geist tracking-[-1px]">
//           <span className="font-semibold">a Product Designer</span> and <span className="font-semibold">B.Tech</span> student at <span className="font-semibold">NIT Rourkela</span>, currently in my <span className="font-semibold">pre-final year</span>.
//         </div>
//         <div className="text-xl font-regular font-geist tracking-[-1px]">
//           I design <span className="font-semibold">mobile, web, and AI-powered</span> products across domains like <span className="font-semibold">fintech, healthcare, education, and B2B SaaS</span>.<br />
//           Blending <span className="font-semibold">art with tech</span>, I craft interfaces that are <span className="font-semibold">functional, playful</span>, and basically <span className="font-semibold">solve problems</span>.
//         </div>
//       </div>
//     </div>
//   );
// }



import { twMerge } from "tailwind-merge";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroCard({ darkMode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const node = containerRef.current;
    if (node) node.addEventListener("mousemove", handleMouseMove);
    return () => node?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const maskSize = isHovered ? 600 : 0;

  return (
    <motion.div
      ref={containerRef}
      className={twMerge(
        "bg-[#46BD73] relative w-full h-full p-8 rounded-2xl border-3 overflow-hidden ",
        darkMode ? "border-white" : "border-black"
      )}
      animate={{
        backgroundColor: "#22c55e", // green-500
      }}
    >
      {/* Masked layer */}
      <motion.div
        className="absolute inset-0 z-10 flex items-start justify-start p-8 text-black dark:text-white font-geist [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:8px] dark:bg-black bg-black"
        animate={{
          maskPosition: `${mousePos.x - maskSize / 3}px ${mousePos.y - maskSize / 3}px`,
          maskSize: `${maskSize/1.5}px`,
        }}
        transition={{
          maskSize: { duration: 0.4, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-2xl">
          <div className="text-xl font-geist mb-2 tracking-tight">Hi, I am</div>
          <div className="text-5xl md:text-7xl font-editorial leading-[64px] tracking-tight pb-6">
            Soumadeep Sengupta
          </div>
          <div className="text-lg font-geist tracking-tight">
<p className="text-white">
  <span className="font-semibold">Pro procrastinator</span> by day,{" "}
  <span className="font-semibold">deadline warrior</span> by night.
</p>
<p className="text-white">
  I like <span className="font-semibold">art</span>,{" "}
  <span className="font-semibold">design</span>,{" "}
  <span className="font-semibold">color</span>,{" "}
  <span className="font-semibold">tech</span>,{" "}
  <span className="font-semibold">daydreams</span>, and{" "}
  <span className="font-semibold">Milkybars</span> with{" "}
  <span className="font-semibold">Figma & Spotify</span> as my 3AM comfort zone.
</p>
<p className="text-white">
  If it's past midnight, I'm either in{" "}
  <span className="font-semibold">deep design flow</span> or in a{" "}
  <span className="font-semibold">reel doomscrolling–Netflix</span> spiral
  that'll make me miss class. Balance.
</p>
          </div>
        </div>
      </motion.div>

      {/* Static text below */}
      <div className="relative z-0 text-lg font-geist tracking-tight text-black dark:text-white ">
          <div className="text-xl font-geist mb-2 tracking-tight text-black">Hi, I am</div>
          <div className="text-5xl md:text-7xl font-editorial leading-[64px] tracking-tight pb-6 text-black">
            Soumadeep Sengupta
          </div>
        <p className="text-black">
          <span className="font-semibold">a Product Designer</span> and <span className="font-semibold">B.Tech</span> student at <span className="font-semibold">NIT Rourkela</span>, currently in my <span className="font-semibold">pre-final year</span>.
        </p>
        <p className="text-black">
          I design <span className="font-semibold">mobile, web, and AI-powered</span> products across domains like <span className="font-semibold">fintech, healthcare, education, and B2B SaaS</span>.
        </p>
        <p className="text-black">
          Blending <span className="font-semibold">art with tech</span>, I craft interfaces that are <span className="font-semibold">functional, playful</span>, and basically <span className="font-semibold">solve problems</span>.
        </p>
      </div>
    </motion.div>
  );
}
