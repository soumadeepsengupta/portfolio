// import React from "react";

// const skills = [
//   { name: "HTML",logo: "/html.svg" },
//   { name: "CSS",logo: "/css.svg" },
//   { name: "Figma",logo: "/figma.svg" },
//   { name: "Webflow",logo: "/webflow.svg" },
//   { name: "Framer",logo: "/framer.svg" },
//   { name: "Spline3D",logo: "/spline.svg" },
//   { name: "Youtube",logo: "/youtube.svg" },
//   { name: "ChatGPT",logo: "/chatgpt.svg" },
//   { name: "Tailwind CSS",logo: "/tailwindcss.svg" },
//   { name: "React JS",logo: "/react.svg" },
//   { name: "Spotify", logo: "/spotify.svg" },
//   { name: "JavaScript", logo: "/javascript.svg" },
// ];

// export default function SkillsCard({ darkMode }) {
//   return (
//     <div className={`bg-fuchsia-400 rounded-2xl border-3 p-6 flex flex-col h-full ${darkMode ? 'border-white' : 'border-black'}`}>
//       <div className="text-5xl font-editorial mb-4">Skills</div>
//       <div className="flex flex-wrap gap-2 font-geist">
//         {skills.map((skill) => (
//           <span
//             key={skill.name}
//             className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${skill.color} border border-transparent bg-white/25 transition-all duration-150 hover:bg-transparent hover:border-[#282828]`}
//           >
//             <img src={skill.logo} alt={skill.name + ' logo'} className="h-5 w-5 mr-1" />
//             {skill.name}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const skills = [
  { name: "HTML", logo: "/html.svg" },
  { name: "CSS", logo: "/css.svg" },
  { name: "Figma", logo: "/figma.svg" },
  { name: "Webflow", logo: "/webflow.svg" },
  { name: "Framer", logo: "/framer.svg" },
  { name: "Spline3D", logo: "/spline.svg" },
  { name: "Youtube", logo: "/youtube.svg" },
  { name: "ChatGPT", logo: "/chatgpt.svg" },
  { name: "Tailwind CSS", logo: "/tailwindcss.svg" },
  { name: "React JS", logo: "/react.svg" },
  { name: "Spotify", logo: "/spotify.svg" },
  { name: "JavaScript", logo: "/javascript.svg" },
  { name: "Vite.js", logo: "/javascript.svg" },
  { name: "Git", logo: "/javascript.svg" },
  { name: "Github", logo: "/javascript.svg" },
  { name: "Node.js", logo: "/javascript.svg" },
  { name: "Matter.js", logo: "/javascript.svg" },
  { name: "Matter.js", logo: "/javascript.svg" },
  { name: "Motion.dev", logo: "/javascript.svg" },
  { name: "GSAP", logo: "/javascript.svg" },
];

export default function SkillsCard({ darkMode }) {
  const containerRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;
    const container = containerRef.current;
    let engine = Engine.create();
    engineRef.current = engine;

    function setupMatter() {
      // Remove any previous canvas
      const prevCanvas = container.querySelector('canvas');
      if (prevCanvas) prevCanvas.remove();
      engine = Engine.create();
      engineRef.current = engine;

      const width = container.clientWidth;
      const height = container.clientHeight;

      const render = Render.create({
        element: container,
        engine,
        options: {
          width,
          height,
          background: "transparent",
          wireframes: false,
        },
      });

      // Make the Matter.js canvas ignore pointer events so DOM pills are interactive
      setTimeout(() => {
        if (render.canvas) {
          render.canvas.style.pointerEvents = "none";
        }
      }, 0);

      // Remove any previous pills' absolute positioning
      const skillElements = container.querySelectorAll('.pill');
      const bodies = [];
      skillElements.forEach((el) => {
        el.style.position = "absolute";
        // Start at random x, y near the top
        const pillWidth = el.offsetWidth;
        const pillHeight = el.offsetHeight;
        const x = Math.random() * (width - pillWidth) + pillWidth / 2;
        const y = Math.random() * (height / 3 - pillHeight) + pillHeight / 2 + 10;
        el.style.left = `${x - pillWidth / 2}px`;
        el.style.top = `${y - pillHeight / 2}px`;
        const body = Bodies.rectangle(x, y, pillWidth, pillHeight, {
          restitution: 0.9,
          friction: 0.9,
          render: { opacity: 0 },
        });
        Composite.add(engine.world, body);
        bodies.push({ el, body });
      });

      // Add invisible boundaries (walls) on all four sides
      const wallThickness = 40; // Increased thickness for better containment
      const transparentWall = { isStatic: true, render: { visible: false } };
      const walls = [
        // Floor
        Bodies.rectangle(width / 2, height + wallThickness / 2 , width , wallThickness, transparentWall),
        // Ceiling
        Bodies.rectangle(width / 2, -wallThickness / 2 , width , wallThickness, transparentWall),
        // Left wall
        Bodies.rectangle(-wallThickness / 2 , height / 2, wallThickness, height , transparentWall),
        // Right wall
        Bodies.rectangle(width + wallThickness / 2 - 2, height / 2, wallThickness, height , transparentWall),
      ];
      Composite.add(engine.world, walls);

      // Mouse control (supports mouse and touch)
      const mouse = Mouse.create(container); // Use container for mouse source
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.5, render: { visible: false } }, // Lowered stiffness for less sensitivity
        collisionFilter: { mask: 0xFFFFFFFF },
      });
      Composite.add(engine.world, mouseConstraint);

      Render.run(render);
      Runner.run(Runner.create(), engine);

      // Sync DOM with Matter.js
      const update = () => {
        bodies.forEach(({ el, body }) => {
          el.style.left = `${body.position.x - el.offsetWidth / 2}px`;
          el.style.top = `${body.position.y - el.offsetHeight / 2}px`;
          el.style.transform = `rotate(${body.angle}rad)`;
        });
        requestAnimationFrame(update);
      };
      update();

      return () => {
        Render.stop(render);
        Composite.clear(engine.world);
        Engine.clear(engine);
      };
    }

    let cleanup = setupMatter();

    // Re-setup Matter.js on window resize to keep boundaries correct
    const handleResize = () => {
      cleanup && cleanup();
      cleanup = setupMatter();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cleanup && cleanup();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-fuchsia-400 rounded-2xl border-3 p-6 h-[32rem] relative overflow-hidden ${darkMode ? 'border-white' : 'border-black'}`}
      ref={containerRef}
      style={{ paddingLeft:'28px', minHeight: 200, height: '100%', maxHeight: '100%', display: 'flex', flexDirection: 'column',cursor:"-webkit-grab", justifyContent: 'flex-start' }}
      onMouseEnter={() => {
        window.dispatchEvent(new CustomEvent('custom-cursor-hide'));
      }}
      onMouseLeave={() => {
        window.dispatchEvent(new CustomEvent('custom-cursor-show'));
      }}
    >
      <div className="text-6xl font-editorial z-10 relative">Skills</div>
      <div
        className="relative z-10 font-geist w-full h-full"
        style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: 0 }}
      >
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="pill flex items-center gap-1 px-5 py-2 rounded-full text-base font-medium bg-white/25 border border-transparent hover:bg-transparent hover:border-[#282828] shadow-md"
            style={{ minWidth: 110, minHeight: 38, marginBottom: 7, position: 'relative', fontSize: '0.95rem' }}
          >
            <img src={skill.logo} alt={skill.name} className="h-5 w-5 mr-1" />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
