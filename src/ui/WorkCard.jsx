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

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import CustomPointer from "../components/CustomPointer";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function WorkCard({ darkMode }) {
  const works = [
    { name: "Finployee", cover: "/finployee.png", link: "https://www.linkedin.com/posts/soumadeep-sengupta-0b6017235_uiux-hackathonwinner-crm-activity-7340596580690837505-rXCC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqOkMoBWqr7ajIG6pTlFRHUtkrqL8VNS2E" },
    { name: "HackOdisha 5.0", cover: "/ho5.jpg", link: "https://www.hackodisha.com/" },
    { name: "Healthcare", cover: "/health.png", link: "https://www.figma.com/design/Gw8jgtMJUGBhA3medZeKo4/preva?node-id=98-253&t=ToHEIqvTIG4nqmMK-1" },
    { name: "Sakha", cover: "/sakha.png", link: "https://sakha-six.vercel.app/" },
    { name: "Globio", cover: "/globio.png", link: "https://www.figma.com/design/cMkzP8NY1MN4Mr6sCeOQa1/globio?node-id=15-279&t=AlzizgYHmSB997Hb-1" },
    { name: "Happily Ever Woofer", cover: "/dog.png", link: "https://woofwoof-delta.vercel.app/" },
    { name: "SnapJini", cover: "/coverjini.png", link: "https://www.behance.net/gallery/225635403/SnapJini-AI-Powered-Social-Media-Tool-for-Hotels" },
    { name: "TradeBin", cover: "/tradebin.png", link: "https://project-joga-bonito.vercel.app/" },
    { name: "Packaging", cover: "/pkg.png", link: "https://app.spline.design/file/9de6d0df-4b30-46b9-b8e2-50b9a5214e7f" },
    { name: "Chutti", cover: "/chutti.png", link: "https://www.behance.net/gallery/221660645/Chutti-Your-personal-attendance-tracking-app" },
    { name: "Nitrutsav", cover: "/nu.png", link: "https://www.nitrutsav.com/" },
    { name: "Vriddhi", cover: "/vriddhi.png", link: "https://www.vriddhi.co/" },
    { name: "NES", cover: "/nes.png", link: "https://nes.ecellnitrkl.in/" },
    { name: "Customart.in", cover: "/customart.png", link: "https://www.figma.com/design/3FShLO3JMrESqDVBCS7fJk/customart?node-id=0-1&t=Tf1AD2tdT80jxEXe-1" },
    { name: "E-cell", cover: "/ecell.png", link: "https://www.ecellnitrkl.in/" },
    { name: "My Room", cover: "/3d.png", link: "https://www.behance.net/gallery/216800417/Hostel-Room(3D-Model)" },
  ];

  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  return (
    <div
      className={`bg-[#FF4B37] rounded-2xl border-3 p-4 pb-0 flex flex-col h-[61.6rem]  ${
        darkMode ? "border-white" : "border-black"
      }`}
      onMouseEnter={() => window.dispatchEvent(new CustomEvent("custom-cursor-pointer"))}
      onMouseLeave={() => window.dispatchEvent(new CustomEvent("custom-cursor-default"))}
    >
      <CustomPointer />
      <div className="text-6xl font-editorial mb-4 flex-shrink-0 pt-5">Work</div>
      <div
        className="flex-1 flex flex-col gap-2 relative overflow-y-auto overflow-x-hidden min-h-0 min-w-0 pr-4"
        style={{
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
      >
        {/* Hide scrollbar for Webkit browsers */}
        <style>{`
          .workcard-scroll::-webkit-scrollbar { display: none; }
        `}</style>
        <div className="workcard-scroll">
        {works.map((work, i) => {
          const rowRef = useRef(null);

          return (
            <div
              key={i}
              className="relative"
              ref={rowRef}
              onMouseMove={(e) => {
                const rect = rowRef.current.getBoundingClientRect();
                const relX = e.clientX - rect.left;
                const relY = e.clientY - rect.top;
                x.set(relX);
                y.set(relY);
                setHovered(i);
              }}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-none group flex items-center justify-between py-2 border-b border-white/50 last:border-b-1 transition font-geist relative z-10"
              >
                <FlipText text={work.name} />
                <span className="transition-transform group-hover:translate-x-2 duration-200">
                  <img src="/arrow.svg" alt="arrow" width={30} height={22} />
                </span>
              </a>

              {hovered === i && (
                <motion.img
                  src={work.cover}
                  alt={`Preview of ${work.name}`}
                  style={{
                    position: "absolute",
                    top: springY,
                    left: springX,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{ scale: 0, rotate: "-12.5deg" }}
                  animate={{ scale: 1, rotate: "12.5deg" }}
                  exit={{ scale: 0, rotate: "-12.5deg" }}
                  transition={{ type: "spring" }}
                  className="pointer-events-none z-0 h-14 w-20 md:h-24 md:w-32 rounded-lg object-cover"
                />
              )}
            </div>
          );
        })}
        </div>
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
      style={{ lineHeight: 1, height: "4.5rem", verticalAlign: "middle" }}
    >
      <span
        className="block relative"
        style={{
          height: "2.5rem",
          lineHeight: 1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Exiting row */}
        <span
          className="relative z-10"
          style={{
            display: "inline-block",
            height: "2.5rem",
            lineHeight: 1,
            verticalAlign: "middle",
          }}
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
              style={{
                height: "2.5rem",
                lineHeight: 1,
                verticalAlign: "middle",
              }}
            >
              {l}
            </motion.span>
          ))}
        </span>
        {/* Entering row */}
        <span
          className="absolute left-0 top-0 w-full h-full pointer-events-none z-20"
          style={{
            display: "inline-block",
            height: "2.5rem",
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
              style={{
                height: "2.5rem",
                lineHeight: 1,
                verticalAlign: "middle",
              }}
            >
              {l}
            </motion.span>
          ))}
        </span>
      </span>
    </motion.span>
  );
};




