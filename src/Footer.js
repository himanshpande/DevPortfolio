import React from "react";

export default function Footer() {
  // const navLinks = ["Work", "Skills", "Books", "About", "Contact"];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-50 pt-14 pb-8 px-4 sm:px-8 mt-24">
      {/* background layer mixing dots + gradient band */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(46,64,26,0.65) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-br from-emerald-400/20 via-sky-400/10 to-amber-300/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* top row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-white/10 pb-10">
          {/* brand + line */}
          <div className="space-y-4 max-w-md">
            {/* <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-black/60 border border-emerald-300/50 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Designing through Pixels & Passion
            </div> */}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              Let’s turn{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                ideas into interfaces
              </span>{" "}
              that feel effortless.
            </h2>

            <p className="text-xs sm:text-sm text-emerald-50/80">
              Product design, front‑end, prototypes, and a bookshelf of
              frameworks behind every decision. If you liked scrolling here,
              you’ll probably enjoy working together too.
            </p>
          </div>

          {/* pill nav + CTA */}
          <div className="flex flex-col items-start md:items-end gap-4">
            {/* <div className="inline-flex flex-wrap gap-2 rounded-full bg-slate-900/80 border border-slate-700/70 px-3 py-2">
              {navLinks.map((item) => (
                <button
                  key={item}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm text-slate-200 hover:text-emerald-300 hover:bg-slate-800/90 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div> */}

            <a
              href="https://www.upwork.com/freelancers/~0125e765973f5d980b"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-300 text-slate-900 font-semibold text-sm sm:text-base px-5 py-2.5 shadow-lg shadow-emerald-500/40 hover:bg-emerald-200 hover:shadow-emerald-300/50 transform hover:scale-105 active:scale-95 transition-all"
            >
              <span>Connect with Me</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>

          </div>
        </div>

        {/* middle stats row */}
        <div className="relative mt-8 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
          <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-slate-950 font-black text-lg">
              92%
            </div>
            <div>
              <div className="font-semibold text-slate-50">
                Product Design focus
              </div>
              <div className="text-emerald-100/80 text-[11px]">
                Deep work on flows, UI and handoff.
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f3f2e6] border border-[#2d3a1e]/40 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#2f3b1e] bg-[#faf9f2] text-[#2a3818] text-sm font-semibold flex items-center justify-center">
              UX
            </div>
            <div>
              <div className="font-semibold text-[#2a3818]">
                Playful explorations
              </div>
              <div className="text-[#273218] text-[11px]">
                Bubbles, micro‑interactions & prototypes.
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700/70 px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <div className="font-semibold text-slate-50">
                Always shipping
              </div>
              <div className="text-slate-300 text-[11px]">
                Side projects, experiments & case studies.
              </div>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              Local time
              <div className="text-slate-100 text-sm font-semibold">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400">
          <div className="flex items-center gap-2">
            {/* <span className="text-base">👁</span> */}
            {/* <span>
              Crafted in React & Tailwind — inspired by dashboards, reading logs
              and playful physics.
            </span> */}

            
          </div>
          {/* <div className="flex flex-wrap gap-3 sm:gap-4">
            <span className="hover:text-slate-200 cursor-pointer">
              Dribbble‑style shots
            </span>
            <span className="hover:text-slate-200 cursor-pointer">
              Framer‑ready prototypes
            </span>
            <span className="hover:text-slate-200 cursor-pointer">
              Resume & case studies
            </span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}



