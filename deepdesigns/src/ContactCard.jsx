import React, { useState, useRef } from "react";

const messages = [
  "Up for UI talks... extra masala please.",
  "Can design. Can vibe. Can reply fast!",
  "Don’t ghost this designer, say Hi!",
];

export default function ContactCard({ darkMode }) {
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const typingTimeout = useRef();
  const bubbleTimeout = useRef();

  // Typewriter effect for cycling messages in order
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

  const handleMouseEnter = () => {
    setShowBubble(true);
    setMsgIdx(0);
    typeMessage(0);
  };

  const handleMouseLeave = () => {
    setShowBubble(false);
    setBubbleText("");
    clearTimeout(typingTimeout.current);
    clearTimeout(bubbleTimeout.current);
  };

  return (
    <div
      className={`bg-[#0091FF] rounded-2xl border-3 p-0 flex flex-col h-full relative overflow-hidden shadow-lg ${
        darkMode ? "border-white" : "border-black"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-6 left-6 text-base font-geist tracking-wide text-black">
        U & I Let’s Talk UI
      </div>
      {/* Message bubble with typewriter effect, smaller and positioned just above Contact me */}
      {showBubble && (
        <div className="absolute right-[40px] bottom-[120px] z-10 min-w-[170px] max-w-[60vw] bg-blue-300/80 rounded-full rounded-br-none px-2 py-2 shadow font-geist text-base flex flex-col items-start animate-fade-in" style={{transform: 'scale(0.75)', transformOrigin: 'top right'}}>
          <div className="flex flex-row items-center gap-3 mb-1 w-full">
            <img src="/favicon_dd.svg" alt="Soumadeep" className="w-10 h-10 rounded-full border border-black/20" />
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-black leading-tight text-base">Soumadeep</span>
              <span className="text-black/80 leading-tight min-h-[1em] text-base">
                {bubbleText}
                <span
                  className="inline-block w-0.5 h-5 align-middle animate-pulse bg-black/80 ml-0.5"
                  style={{opacity: bubbleText.length < messages[msgIdx].length ? 1 : 0}}
                ></span>
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-end justify-end h-full w-full p-0">
        <div className="flex flex-col items-end justify-end px-8 pb-8">
          <div className="text-6xl font-editorial mb-2 text-black leading-none text-right relative">
            Contact me
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=senguptasomuchdeep@gmail.com"
            className="text-lg font-geist text-black/75 hover:text-black text-right relative group"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            senguptasomuchdeep@gmail.com
            <span
              className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
