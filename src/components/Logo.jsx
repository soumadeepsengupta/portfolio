import React from "react";
import { cloudinaryImages } from "../config/cloudinaryImages";

export default function Logo({ darkMode }) {
  return (
    <div className=" flex justify-center items-center transition-colors duration-300">
      <img
        src={cloudinaryImages.logo}
        alt="deepdesigns logo"
        className={`h-12 w-auto ${darkMode ? 'invert' : ''}`}
        draggable={false}
      />
    </div>
  );
}
