import React from "react";
import { cloudinaryImages } from "../config/cloudinaryImages";

export default function PhotoCard({ darkMode }) {
  const imageSrc = darkMode ? cloudinaryImages.profileNight : cloudinaryImages.profileDay;

  return (
    <div className={`photo-card-cursor grayscale rounded-2xl border-3 flex items-center justify-center overflow-hidden h-full cursor-none ${darkMode ? 'border-white' : 'border-black'}`}>
      <img
        src={imageSrc}
        alt="Profile"
        className="object-cover w-full h-full object-center"
        style={{ objectPosition:darkMode?'center 20%': 'center 70%'}}
        loading="eager"
        key={imageSrc} // Force re-render when image source changes
      />
    </div>
  );
}
