import React from "react";

export default function ContactCard() {
  return (
    <div className="bg-[#0091FF] rounded-2xl border-3 p-0 flex flex-col h-full relative overflow-hidden shadow-lg">
      <div className="absolute top-6 left-6 text-base font-geist tracking-wide text-black">
        U & I Let’s Talk UI
      </div>
      <div className="flex flex-col items-end justify-end h-full w-full p-0">
        <div className="flex flex-col items-end justify-end px-8 pb-8">
          <div className="text-5xl font-editorial mb-2 text-black leading-none text-right">
            Contact me
          </div>
          <a
            href="mailto:senguptasomuchdeep@gmail.com"
            className="text-lg font-geist underline text-black/90 hover:text-black text-right"
          >
            senguptasomuchdeep@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
