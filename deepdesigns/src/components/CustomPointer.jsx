import React, { useEffect, useRef, useState } from "react";

export default function CustomPointer({ show }) {
  const cursorRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!show) return;
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [show]);

  useEffect(() => {
    if (show) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "";
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <img
      ref={cursorRef}
      src="/pointer.svg"
      alt="Custom Cursor"
      width={64}
      height={64}
      style={{
        position: "fixed",
        left: pos.x - 32,
        top: pos.y - 32,
        width: 52,
        height: 52,
        pointerEvents: "none",
        zIndex: 9999,
        userSelect: "none",
        transition: "transform 0.08s cubic-bezier(0.4,0,0.2,1)",
      }}
      draggable={false}
    />
  );
}
