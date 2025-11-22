import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Experience from "./experience";
import Home from "./mainPage";
import Skills from "./skills";
import SkillsBubbles from "./skillBubble";
import BookShowcase from "./BookShowcase";
import EducationSection from "./EducationSection";
import SkillsStatsSection from "./SkillsStatsSection";
import Footer from "./Footer";

// Wrapper that creates a scroll-based transition where Experience
// slides up and sits on top of Skills as the user scrolls.
function SkillsExperienceStack() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 = only Skills, 1 = Experience fully on top

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

  const translateY = (1 - progress) * 100; // from 100% (bottom) to 0%

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Stick the viewport while we play the animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Base layer: Skills */}
        <div className="absolute inset-0">
          <Skills />
        </div>

        {/* Top layer: Experience (slides up over Skills) */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${translateY}%)`,
            transition: "transform 0.15s linear",
          }}
        >
          <Experience />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Home />
      <SkillsExperienceStack />
      <SkillsBubbles/>
      <BookShowcase />
      <EducationSection />
      <SkillsStatsSection />
      <Footer />
    </div>
  );
}

export default App;
