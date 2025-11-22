import React, { useEffect, useRef, useState } from "react";

const educationItems = [
  {
    title: "Bachelor of Computer Science",
    school: "Your University Name",
    year: "2018 – 2022",
  },
  {
    title: "Design & UX Specialization",
    school: "Online / Bootcamp",
    year: "2022 – 2023",
  },
  {
    title: "Continuous Learning",
    school: "Books, courses & side projects",
    year: "Always",
  },
];

export default function EducationSection() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }
      const scrolledInside =
        Math.min(Math.max(-rect.top, 0), totalScrollable) || 0;
      setProgress(scrolledInside / totalScrollable);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ellipse radii for the path
  const radiusX = 240;
  const radiusY = 130;

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] bg-slate-950"
    >
      <div className="sticky top-0 h-[60vh] flex flex-col items-center justify-center text-white px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 text-xs sm:text-sm font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            Education
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-1">
            Milestones along my{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
              learning track
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-emerald-50/80 max-w-md mx-auto">
            Scroll to slide through the key stops in my education timeline.
          </p>
        </div>

        {/* Oval path with moving nodes */}
        <div className="relative w-full max-w-3xl h-52 sm:h-60 flex items-center justify-center">
          {/* Thicker ellipse outline / belt */}
          <div className="absolute inset-x-2 h-40 sm:h-44 rounded-full border-[3px] border-emerald-400/60 opacity-80 shadow-[0_0_40px_rgba(16,185,129,0.35)]" />

          {/* Moving dots on the ellipse */}
          <div className="relative w-full h-full">
            {educationItems.map((item, index) => {
              const angle =
                (progress * 2 * Math.PI +
                  (index / educationItems.length) * 2 * Math.PI) %
                (2 * Math.PI);
              const x = Math.cos(angle) * radiusX;
              const y = Math.sin(angle) * radiusY;

              return (
                <div
                  key={item.title}
                  className="absolute left-1/2 top-1/2 group"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    transition: "transform 0.15s linear",
                  }}
                >
                  {/* Tooltip above node */}
                  <div className="mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                    <div className="mx-auto w-40 sm:w-48 rounded-xl bg-slate-950/95 border border-emerald-300/60 shadow-[0_18px_45px_rgba(0,0,0,0.7)] px-3 py-2 text-left">
                      <div className="text-[11px] sm:text-xs text-emerald-200/90">
                        {item.year}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold leading-snug">
                        {item.title}
                      </div>
                      <div className="text-[10px] sm:text-xs text-emerald-50/80 mt-0.5">
                        {item.school}
                      </div>
                    </div>
                  </div>

                  {/* Node with small heading */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[10px] sm:text-xs text-emerald-100 font-semibold">
                      {item.year}
                    </div>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(15,23,42,1)] group-hover:shadow-[0_0_0_6px_rgba(45,212,191,0.9)] flex items-center justify-center text-[11px] sm:text-xs font-bold text-slate-900 transition-shadow duration-200">
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


