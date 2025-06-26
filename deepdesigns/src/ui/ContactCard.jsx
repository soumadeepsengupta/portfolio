import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const messages = [
  "Up for UI talks... extra masala please.",
  "Can design. Can vibe. Can reply fast!",
  "Don’t ghost this designer, say Hi!",
];

export default function ContactCard({ darkMode }) {
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const [showMail, setShowMail] = useState(false);
  const typingTimeout = useRef();
  const bubbleTimeout = useRef();
  const cardRef = useRef(null);

  // Framer Motion values for mail position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 50 });

  // Typewriter effect for cycling messages in order
  useEffect(() => {
    setShowBubble(true);
    setMsgIdx(0);
    typeMessage(0);
    // eslint-disable-next-line
  }, []);

  const typeMessage = (idx = 0) => {
    const msg = messages[idx];
    let char = 0;
    const typeChar = () => {
      setBubbleText(msg.slice(0, char));
      if (char < msg.length) {
        typingTimeout.current = setTimeout(() => {
          char++;
          typeChar();
        }, 30);
      } else {
        bubbleTimeout.current = setTimeout(() => {
          const nextIdx = (idx + 1) % messages.length;
          setMsgIdx(nextIdx);
          typeMessage(nextIdx);
        }, 1800);
      }
    };
    typeChar();
  };

  const handleMouseEnter = (e) => {
    // Only showMail logic, do not touch showBubble
    setShowMail(true);
    // Set initial mail position
    if (cardRef.current && e) {
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handleMouseLeave = () => {
    // Only showMail logic, do not touch showBubble or bubbleText
    clearTimeout(typingTimeout.current);
    clearTimeout(bubbleTimeout.current);
    setShowMail(false);
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=senguptasomuchdeep@gmail.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      ref={cardRef}
      className={`bg-[#0091FF] rounded-2xl border-3 p-0 flex flex-col h-[32rem] relative overflow-hidden shadow-lg ${
        darkMode ? "border-white" : "border-black"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={showMail ? handleMouseMove : undefined}
      onClick={showMail ? handleClick : undefined}
    >
      <div className="absolute top-6 left-6 text-base font-geist tracking-wide text-black">
        U & I Let’s Talk UI
      </div>
      {/* Message bubble with typewriter effect, smaller and positioned just above Contact me */}
      {showBubble && (
        <div className="absolute right-[40px] bottom-[120px] z-10 min-w-[170px] max-w-[60vw] bg-blue-300/80 rounded-full rounded-br-none px-2 py-2 shadow font-geist text-base flex flex-col items-start animate-fade-in" style={{transform: 'scale(0.75)', transformOrigin: 'top right'}}>
          <div className="flex flex-row items-center gap-3 mb-1 w-full">
            <img src="/profilepic.svg" alt="Soumadeep" className="w-10 h-10 rounded-full border border-black/20" />
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-black/80 leading-tight text-base">Soumadeep</span>
              <span className="text-black/80 leading-tight min-h-[1em] text-base">
                {bubbleText}
                <span
                  className="inline-block w-0.5 h-5 align-middle animate-pulse bg-black ml-0.5"
                  style={{opacity: bubbleText.length < messages[msgIdx].length ? 1 : 0}}
                ></span>
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Floating mail text that follows cursor */}
      {showMail && (
        <motion.div
          className="pointer-events-none z-50 fixed md:absolute text-sm font-geist text-black/90 rounded px-4 py-2 "
          style={{
            left: 0,
            top: 0,
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
            userSelect: 'none',
            background: 'none', // Remove white background
          }}
        >
          senguptasomuchdeep@gmail.com
        </motion.div>
      )}
      {/* Hide original mail link when floating mail is active */}
      <div className="flex flex-col items-end justify-end h-full w-full p-0">
        <div className="flex flex-col items-end justify-end px-8 pb-8">
          <div className="text-6xl font-editorial mt-4 text-black leading-none text-right relative">
            Contact me
          </div>
          {/* Always render a placeholder for the mail text to reserve space, but make it invisible when floating mail is active */}
          <span
            className="text-sm font-geist text-black/75 text-right relative group"
            style={{
              visibility: showMail ? 'hidden' : 'visible',
              height: '2.5rem', // match the height of the mail text for consistent spacing
              display: 'inline-block',
            }}
          >
            senguptasomuchdeep@gmail.com
            <span
              className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
