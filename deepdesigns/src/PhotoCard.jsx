import React from "react";

export default function PhotoCard({ darkMode }) {
  const imageSrc = darkMode ? "/profile_night.jpeg" : "/profile_day.jpeg";

  return (
    <div className="grayscale rounded-2xl border-3 flex items-center justify-center overflow-hidden h-full">
      <img
        src={imageSrc}
        alt="Profile"
        className="object-cover w-full h-full"
        loading="eager"
        key={imageSrc} // Force re-render when image source changes
      />
    </div>
  );
}
