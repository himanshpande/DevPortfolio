import React, { useEffect, useRef, useState } from "react";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    tag: "Productivity",
    color: "from-amber-300 to-orange-400",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    tag: "Focus",
    color: "from-sky-300 to-blue-500",
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    tag: "Product Design",
    color: "from-emerald-300 to-teal-500",
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    tag: "UX Design",
    color: "from-rose-300 to-pink-500",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    tag: "Psychology",
    color: "from-indigo-300 to-purple-500",
  },
];

export default function BookShowcase() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 → first book, 1 → last book

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

  const maxShift = (books.length - 1) * 320; // pixels to move horizontally
  const translateX = -progress * maxShift;

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white"
    >
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Header */}
        <div className="px-6 sm:px-12 pt-24 pb-6 sm:pb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs sm:text-sm font-semibold text-emerald-300 border border-emerald-500/40 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Reading Log
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3">
            Popular books I{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              keep revisiting
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            A curated shelf of reads that shaped how I think about design,
            systems, and habits. Scroll down and watch the shelf slide by.
          </p>
        </div>

        {/* Horizontal slider */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 flex items-center"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.15s linear",
            }}
          >
            <div className="flex gap-6 sm:gap-8 px-6 sm:px-12">
              {books.map((book, index) => (
                <article
                  key={book.title}
                  className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] group"
                >
                  <div
                    className={`relative h-64 sm:h-72 md:h-80 rounded-3xl bg-gradient-to-br ${book.color} shadow-2xl shadow-black/40 overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-emerald-400/40 transition-all duration-300`}
                  >
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                      <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-black/20 blur-2xl" />
                    </div>

                    <div className="relative h-full flex flex-col justify-between p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="rounded-full bg-black/20 border border-white/30 px-3 py-1 text-[11px] uppercase tracking-wide">
                          {book.tag}
                        </span>
                        <span className="text-xs text-white/80">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold mb-2 leading-tight">
                          {book.title}
                        </h3>
                        <p className="text-sm text-white/80 mb-3">
                          by {book.author}
                        </p>
                        <p className="text-xs sm:text-sm text-white/80 max-w-xs">
                          Key ideas: highlight-worthy, margin-notes filled, and
                          constantly referenced in my design process.
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4 text-xs">
                        <span className="inline-flex items-center gap-1 text-white/80">
                          <span className="text-base">★</span> 4.5 / 5 impact
                        </span>
                        <span className="text-white/60">scroll ▸</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 via-slate-900/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}





