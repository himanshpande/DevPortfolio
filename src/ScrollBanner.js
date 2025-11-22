import React from "react";

export default function ScrollBanner() {
  return (
    <>
      {/* Scroll banner - animated left to right text */}
      <div className="w-full mt-10 lg:mt-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-300 to-lime-300 shadow-2xl px-4 sm:px-8 py-3 sm:py-4">
          <div className="absolute inset-0 bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative flex items-center">
            <div className="whitespace-nowrap animate-marquee font-extrabold text-lg sm:text-2xl md:text-3xl tracking-[0.2em] uppercase text-emerald-950 drop-shadow-md">
  Build Modern Websites • Smooth UI/UX • Experienced Developer • High-Quality Work at Valuable Prices •
  Build Modern Websites • Smooth UI/UX • Experienced Developer • High-Quality Work at Valuable Prices •
</div>

          </div>
        </div>
      </div>

      {/* Local keyframes for marquee animation */}
      <style>{`
        @keyframes marquee-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee-slide 20s linear infinite;
        }
      `}</style>
    </>
  );
}



