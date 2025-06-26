import React, { useEffect, useState } from "react";

const CURSOR_SIZE = 48;

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [forcePointer, setForcePointer] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Hide system cursor globally
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    // Listen for custom events to hide/show the custom cursor
    const handleHide = () => {
      setCursorVisible(false);
      document.body.style.cursor = "default";
      document.documentElement.style.cursor = "default";
    };
    const handleShow = () => {
      setCursorVisible(true);
      document.body.style.cursor = "none";
      document.documentElement.style.cursor = "none";
    };
    // Listen for pointer override events
    const handlePointer = () => setForcePointer(true);
    const handleDefault = () => setForcePointer(false);
    window.addEventListener('custom-cursor-hide', handleHide);
    window.addEventListener('custom-cursor-show', handleShow);
    window.addEventListener('custom-cursor-pointer', handlePointer);
    window.addEventListener('custom-cursor-default', handleDefault);

    return () => {
      document.body.style.cursor = "";
      document.documentElement.style.cursor = "";
      window.removeEventListener('custom-cursor-hide', handleHide);
      window.removeEventListener('custom-cursor-show', handleShow);
      window.removeEventListener('custom-cursor-pointer', handlePointer);
      window.removeEventListener('custom-cursor-default', handleDefault);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handlePointer = (e) => {
      // Check if hovered element or its parent has .use-pointer
      let el = e.target;
      let found = false;
      while (el) {
        if (el.classList && el.classList.contains("use-pointer")) {
          found = true;
          break;
        }
        el = el.parentElement;
      }
      setIsPointer(found);
    };
    window.addEventListener("mousemove", handlePointer);
    return () => window.removeEventListener("mousemove", handlePointer);
  }, []);

  useEffect(() => {
    // Listen for pointer enter/leave on .use-pointer elements
    const pointerEls = document.querySelectorAll('.use-pointer');
    const handleEnter = () => setCursorVisible(false);
    const handleLeave = () => setCursorVisible(true);
    pointerEls.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    return () => {
      pointerEls.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <img
      src={forcePointer || isPointer ? "/pointer.svg" : "/cursor.svg"}
      alt="Custom Cursor"
      width={CURSOR_SIZE}
      height={CURSOR_SIZE}
      style={{
        position: "fixed",
        left: pos.x - CURSOR_SIZE / 2,
        top: pos.y - CURSOR_SIZE / 2,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        pointerEvents: "none",
        zIndex: 9999,
        userSelect: "none",
        transition: "transform 0.08s cubic-bezier(0.4,0,0.2,1), opacity 0.15s",
        opacity: cursorVisible ? 1 : 0,
      }}
      draggable={false}
    />
  );
}
