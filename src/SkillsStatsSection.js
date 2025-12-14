import React, { useEffect, useRef, useState } from "react";
import ScrollBanner from "./ScrollBanner";

const skills = [
  { name: "React", level: 20, color: "#22c55e" }, 
  { name: "Tailwind CSS", level: 10, color: "#0ea5e9" }, 
  { name: "CSS", level: 10, color: "#6366f1" }, 
  { name: "Bootstrap", level: 7, color: "#a855f7" }, 
  { name: "JavaScript", level: 16, color: "#f97316" },
  { name: "TypeScript", level: 12, color: "#3b82f6" }, 
  { name: "Manual QA/Unit Testing", level: 6, color: "#ec4899" }, 
  { name: "Automation", level: 5, color: "#14b8a6" }, 
  { name: "Testing & Debugging", level: 5, color: "#eab308" },
  { name: "Documentation", level: 7, color: "#eab308" },
  {name:"Express",level:2,color:"#14b8a6"} 

];

const totalLevel = skills.reduce((sum, s) => sum + s.level, 0);

function polarToCartesian(cx, cy, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

function describeDonutSlice(cx, cy, innerR, outerR, startAngle, endAngle) {
  const outerStart = polarToCartesian(cx, cy, outerR, endAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, startAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, endAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    outerStart.x,
    outerStart.y,
    "A",
    outerR,
    outerR,
    0,
    largeArcFlag,
    0,
    outerEnd.x,
    outerEnd.y,
    "L",
    innerEnd.x,
    innerEnd.y,
    "A",
    innerR,
    innerR,
    0,
    largeArcFlag,
    1,
    innerStart.x,
    innerStart.y,
    "Z",
  ].join(" ");
}

export default function SkillsStatsSection() {
  const primary = skills[0];

  const sectionRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      const total = rect.height + viewportHeight;
      const rawProgress = (viewportHeight - rect.top) / total;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      setRotation(clamped * 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 0.9 + (rotation / 360) * 0.3;

  let currentAngle = 0;
  const slices = skills.map((skill) => {
    const angle = (skill.level / totalLevel) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    const midAngle = startAngle + angle / 2;
    currentAngle += angle;
    return { skill, startAngle, endAngle, midAngle };
  });

  return (
    <section
      ref={sectionRef}
      className="bg-slate-100 py-16 sm:py-20 px-4 sm:px-8 relative z-20"
    >
      <div className="max-w-5xl mx-auto text-slate-900">
    
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-xs sm:text-sm font-semibold mb-2 text-emerald-200">
              Skill snapshot
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              Where I{" "}
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                spend most of my energy
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
              A quick overview of my strengths across design and front-end. These
              scores are based on real projects, not just buzzwords.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto,minmax(0,1.2fr)] gap-8 md:gap-10 items-center">
     
          <div className="flex justify-center">
            <div
              className="relative w-52 h-52 sm:w-60 sm:h-60"
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.15s linear",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-slate-200 shadow-[0_24px_80px_rgba(15,23,42,0.45)] flex items-center justify-center">
                <svg
                  viewBox="0 0 240 240"
                  className="w-40 h-40 sm:w-44 sm:h-44"
                >
                  <g
                    style={{
                      transformOrigin: "120px 120px",
                      transform: `rotate(${rotation}deg)`,
                      transition: "transform 0.15s linear",
                    }}
                  >
                    {slices.map(({ skill, startAngle, endAngle, midAngle }, i) => {
                      const isActive = hoveredIndex === i;
                      const offset = isActive ? 18 : 0; 
                      const scaleSlice = isActive ? 1.08 : 1; 
                      const rad = (midAngle * Math.PI) / 180;
                      const dx = Math.cos(rad) * offset;
                      const dy = Math.sin(rad) * offset;

                      return (
                        <g
                          key={skill.name}
                          transform={`translate(${dx}, ${dy}) scale(${scaleSlice})`}
                          style={{ transformOrigin: "120px 120px" }}
                        >
                          <path
                            d={describeDonutSlice(
                              120,
                              120,
                              55,
                              90,
                              startAngle,
                              endAngle
                            )}
                            fill={skill.color}
                            className="cursor-pointer transition-[transform,filter] duration-150"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                          />
                        </g>
                      );
                    })}

                    {hoveredIndex != null && (() => {
                      const { skill, midAngle } = slices[hoveredIndex];
                      const labelRadius = 72;
                      const rad = (midAngle * Math.PI) / 180;
                      const x = 120 + Math.cos(rad) * labelRadius;
                      const y = 120 + Math.sin(rad) * labelRadius;

                      return (
                        <text
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-[9px] sm:text-[10px] font-semibold pointer-events-none"
                          fill="#0f172a"
                        >
                          {skill.name}
                        </text>
                      );
                    })()}
                  </g>

              
                  <circle cx="120" cy="120" r="48" fill="#f9fafb" />
                </svg>

           
                <div className="pointer-events-none absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/90 flex flex-col items-center justify-center border border-slate-300">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    {hoveredIndex != null ? "Skill" : "Focus"}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-300">
                    {hoveredIndex != null
                      ? `${skills[hoveredIndex].level}%`
                      : `${primary.level}%`}
                  </span>
                  <span className="text-[10px] text-slate-500 text-center px-2">
                    {hoveredIndex != null
                      ? skills[hoveredIndex].name
                      : primary.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

     
          <div className="w-full max-w-md mx-auto md:mx-0">
            <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-slate-800">
              {skills.map((skill, index) => {
                const isActive = hoveredIndex === index;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`flex items-center gap-2 rounded-full px-2.5 py-1 border text-left transition-colors ${
                      isActive
                        ? "bg-emerald-50 border-emerald-400 text-slate-900"
                        : "bg-white border-slate-200 text-slate-800"
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="truncate">{skill.name}</span>
                    <span className="ml-auto text-emerald-500 font-semibold">
                      {skill.level}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
    
    
  );
}




