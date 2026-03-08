// EXAMPLE: PhotoCard.jsx updated to use Cloudinary
// This is just a reference - use this pattern for your components

import React from "react";
import { cloudinaryImages, getOptimizedImage } from "../config/cloudinaryImages";

export default function PhotoCard({ darkMode }) {
  // Get optimized image based on theme
  const imageSrc = darkMode 
    ? getOptimizedImage('portfolio/profile_night', { width: 800, quality: 'auto:best' })
    : getOptimizedImage('portfolio/profile_day', { width: 800, quality: 'auto:best' });

  return (
    <div className={`photo-card-cursor grayscale rounded-2xl border-3 flex items-center justify-center overflow-hidden h-full cursor-none ${darkMode ? 'border-white' : 'border-black'}`}>
      <img
        src={imageSrc}
        alt="Profile"
        className="object-cover w-full h-full object-center"
        style={{ objectPosition: darkMode ? 'center 20%' : 'center 70%' }}
        loading="eager"
        key={imageSrc}
      />
    </div>
  );
}
