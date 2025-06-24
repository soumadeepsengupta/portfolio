// import React, { useState } from "react";
// import CustomPointer from "../components/CustomPointer";

// export default function WorkCard({ darkMode }) {
//   const works = [
//     { name: "HackOdisha 5.0", cover: "/profile_day.jpeg" },
//     { name: "Sakha", cover: "/profile_night.jpeg" },
//     { name: "Woofer Than Ever", cover: "/profilepic.svg" },
//     { name: "SnapJini", cover: "/coverjini.png" },
//     { name: "Flwora", cover: "/css.svg" },
//     { name: "TradeBin", cover: "/javascript.svg" },
//     { name: "Chutti", cover: "/figma.svg" },
//     { name: "Customart.in", cover: "/react.svg" },
//     { name: "My Room", cover: "/moon.svg" }
//   ];
//   const [hovered, setHovered] = useState(null);
//   return (
//     <div
//       className={`bg-red-500 rounded-2xl border-3 p-6 flex flex-col h-full dark:bg-red-500 ${darkMode ? 'border-white' : 'border-black'}`}
//       onMouseEnter={() => window.dispatchEvent(new CustomEvent('custom-cursor-pointer'))}
//       onMouseLeave={() => window.dispatchEvent(new CustomEvent('custom-cursor-default'))}
//     >
//       <CustomPointer />
//       <div className="text-5xl font-editorial mb-4">Work</div>
//       <div className="flex-1 flex flex-col gap-2 relative overflow-y-auto">
//         {works.map((work, i) => (
//           hovered === i ? (
//             <div key={i} className="w-full flex justify-center mb-2">
//               <div className="bg-black rounded-2xl border-2 border-white shadow-xl p-2 max-w-2xl w-full flex flex-col items-center relative animate-fade-in">
//                 <div className="w-full flex items-center justify-between px-4 pt-2">
//                   <span className="text-white text-xl font-geist font-semibold">{work.name}</span>
//                   <span className="text-white text-2xl cursor-pointer" onClick={() => setHovered(null)}>&#10005;</span>
//                 </div>
//                 <img src={work.cover} alt="cover" className="w-full max-w-lg h-56 object-cover rounded-xl my-4 border border-white" />
//                 {/* You can add more details here if needed */}
//               </div>
//             </div>
//           ) : (
//             <a
//               key={i}
//               href="#"
//               className="cursor-none group flex items-center justify-between py-2 border-b border-white/50 last:border-b-0 transition font-geist"
//               onMouseEnter={() => setHovered(i)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <span className="text-3xl font-medium font-geist p-3">{work.name}</span>
//               <span className="transition-transform group-hover:translate-x-2 duration-200 ">
//                 <img src="/arrow.svg" alt="arrow" width={32} height={24} />
//               </span>
//             </a>
//           )
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import CustomPointer from "../components/CustomPointer";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function WorkCard({ darkMode }) {
  const works = [
    { name: "HackOdisha 5.0", cover: "/profile_day.jpeg" },
    { name: "Sakha", cover: "/profile_night.jpeg" },
    { name: "Woofer Than Ever", cover: "/profilepic.svg" },
    { name: "SnapJini", cover: "/coverjini.png" },
    { name: "Flwora", cover: "/css.svg" },
    { name: "TradeBin", cover: "/javascript.svg" },
    { name: "Chutti", cover: "/figma.svg" },
    { name: "Customart.in", cover: "/react.svg" },
    { name: "My Room", cover: "/moon.svg" }
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div
      className={`bg-red-500 rounded-2xl border-3 p-6 flex flex-col h-full dark:bg-red-500 ${darkMode ? 'border-white' : 'border-black'}`}
      onMouseEnter={() => window.dispatchEvent(new CustomEvent('custom-cursor-pointer'))}
      onMouseLeave={() => window.dispatchEvent(new CustomEvent('custom-cursor-default'))}
    >
      <CustomPointer />
      <div className="text-5xl font-editorial mb-4">Work</div>

      <div className="flex-1 flex flex-col gap-2 relative ">
        {works.map((work, i) => (
          <a
            key={i}
            href="#"
            className="cursor-none group flex items-center justify-between py-2 border-b border-white/50 last:border-b-0 transition font-geist"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <FlipText text={work.name} />
            <span className="transition-transform group-hover:translate-x-2 duration-200">
              <img src="/arrow.svg" alt="arrow" width={32} height={24} />
            </span>
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
      className="relative inline-block align-middle text-3xl font-medium font-geist p-3"
      style={{ lineHeight: 1, height: '4.5rem', verticalAlign: 'middle' }}
    >
      <span
        className="block relative"
        style={{ height: '2.5rem', lineHeight: 1, overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}
      >
        {/* Exiting row */}
        <span
          className="relative z-10"
          style={{ display: 'inline-block', height: '2.5rem', lineHeight: 1, verticalAlign: 'middle' }}
        >
          {text.split("").map((l, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i
              }}
              style={{ height: '2.5rem', lineHeight: 1, verticalAlign: 'middle' }}
            >
              {l}
            </motion.span>
          ))}
        </span>
        {/* Entering row */}
        <span
          className="absolute left-0 top-0 w-full h-full pointer-events-none z-20"
          style={{ display: 'inline-block', height: '2.5rem', lineHeight: 1, whiteSpace: 'nowrap', verticalAlign: 'middle' }}
        >
          {text.split("").map((l, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 }
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i
              }}
              style={{ height: '2.5rem', lineHeight: 1, verticalAlign: 'middle' }}
            >
              {l}
            </motion.span>
          ))}
        </span>
      </span>
    </motion.span>
  );
};





