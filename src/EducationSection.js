import React, { useEffect, useRef, useState } from "react";

const educationItems = [
  {
    title: "Bachelor of Computer Science And Tecnology",
    school: "Uttrakhand Technical University",
    year: "2023 – 2026",
  },
  {
    title: "Bachelors of Science",
    school: "Kumaon University",
    year: "2021 – 2023",
  },
  {
    title: "Intern",
    school: "React Intern",
    year: "2024",
  },
  {
    title:"Associative Software Engineer",
    school:"Ui Developer",
    year:"2024-2025"
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

  // Calculate which item should be active based on progress
  const activeIndex = Math.min(
    Math.floor(progress * educationItems.length),
    educationItems.length - 1
  );

  // Calculate progress within current segment
  const segmentProgress = (progress * educationItems.length) % 1;

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] bg-slate-950 z-10"
    >
      <div className="sticky top-0 h-[60vh] flex flex-col items-center justify-center text-white px-4 sm:px-8 z-10">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 text-xs sm:text-sm font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            Education
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-1">
            Highlights of my{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Education & Experience
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-emerald-50/80 max-w-md mx-auto">
            Scroll to slide through the key stops in my education timeline.
          </p>
        </div>


        <div className="relative w-full max-w-4xl h-[400px] sm:h-[450px] flex items-center justify-center">
          {/* Animated connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/20 via-emerald-400/60 to-emerald-400/20 transform -translate-y-1/2">
            <div
              className="h-full bg-emerald-400 transition-all duration-500 ease-out"
              style={{
                width: `${(progress * 100)}%`,
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
              }}
            />
          </div>

          {/* Timeline items */}
          <div className="relative w-full h-full flex items-center justify-between px-4 sm:px-8">
            {educationItems.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              const isFuture = index > activeIndex;
              
              // Calculate opacity and scale based on position
              let opacity = 0.4;
              let scale = 0.8;
              
              if (isActive) {
                // Active item: scale up with progress
                opacity = 0.5 + segmentProgress * 0.5;
                scale = 0.9 + segmentProgress * 0.3;
              } else if (isPast) {
                // Past items: fully visible but smaller
                opacity = 0.7;
                scale = 0.85;
              }

              // Position items along the timeline
              const positionPercent = (index / (educationItems.length - 1)) * 100;

              return (
                <div
                  key={item.title}
                  className="absolute top-1/2 group -translate-y-1/2"
                  style={{
                    left: `${positionPercent}%`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity: opacity,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: isActive ? 20 : 10,
                  }}
                >
                  {/* Active item tooltip - always visible */}
                  {isActive && (
                    <div className="mb-4 opacity-100 translate-y-0 transition-all duration-300 pointer-events-none">
                      <div className="mx-auto w-48 sm:w-56 rounded-xl bg-slate-950/95 border-2 border-emerald-400/80 shadow-[0_18px_45px_rgba(16,185,129,0.5)] px-4 py-3 text-left backdrop-blur-sm">
                        <div className="text-xs sm:text-sm text-emerald-200/90 font-medium mb-1">
                          {item.year}
                        </div>
                        <div className="text-sm sm:text-base font-bold leading-snug text-white">
                          {item.title}
                        </div>
                        <div className="text-[11px] sm:text-xs text-emerald-50/80 mt-1">
                          {item.school}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover tooltip for non-active items */}
                  {!isActive && (
                    <div className="mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
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
                  )}

                  {/* Node with year and number */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`text-[10px] sm:text-xs font-semibold transition-colors duration-300 ${
                        isActive
                          ? "text-emerald-300 scale-110"
                          : "text-emerald-100/70"
                      }`}
                    >
                      {item.year}
                    </div>
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-base sm:text-lg font-bold text-slate-900 transition-all duration-300 ${
                        isActive
                          ? "bg-emerald-400 shadow-[0_0_0_4px_rgba(15,23,42,1),0_0_30px_rgba(16,185,129,0.8)] scale-110"
                          : isPast
                          ? "bg-emerald-500/70 shadow-[0_0_0_3px_rgba(15,23,42,1)]"
                          : "bg-emerald-600/50 shadow-[0_0_0_3px_rgba(15,23,42,1)]"
                      } group-hover:shadow-[0_0_0_6px_rgba(45,212,191,0.9)]`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Pulsing ring for active item */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-emerald-400/60 animate-ping" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


