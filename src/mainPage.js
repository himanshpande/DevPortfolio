import React, { useState } from "react";

export default function Home() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isScrollHovered, setIsScrollHovered] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const heading = "Hi, I'm Himanshu".split("");

  const navItems = [
    { id: "home", path: "M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 4v4m0-11l7-4" },
    { id: "portfolio", path: "M20 7l-8-4-8 4m0 0l8 4m0 0l8-4m0 0v10l-8 4m0 0l-8-4m0 0v-10" },
    { id: "about", path: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { id: "docs", path: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
  ];

  const socialItems = [
    { id: "linkedin", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 11-4 0 2 2 0 014 0z" },
    { id: "twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" },
    { id: "settings", path: "M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "email", path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  ];

  const SvgIcon = ({ path }) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full text-white font-bold text-lg hover:bg-blue-600 transition-all cursor-pointer">
          H
        </div>

        {/* Navbar Icons */}
        <nav className="hidden min-[675px]:flex absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3 bg-black px-8 py-3 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-white hover:text-blue-500 transition-all duration-300 transform hover:scale-125 p-2"
              >
                <SvgIcon path={item.path} />
              </button>
            ))}
          </div>
        </nav>

        {/* Social Icons */}
        <div className="hidden min-[639px]:flex items-center gap-4">
          {socialItems.map((item) => (
            <button
              key={item.id}
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-125 p-2"
            >
              <SvgIcon path={item.path} />
            </button>
          ))}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-32 px-4 text-center">

        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 bg-white px-4 py-2 border rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-gray-700 text-sm font-medium">Open to Opportunities</span>
        </div>

        {/* HEADING WITH PER-LETTER HOVER ANIMATION */}
        <h1
          className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 transition-transform duration-300"
          style={{ transform: "scale(1)" }}
        >
          <span className="inline-block transition-all duration-300 hover:scale-105">
            {heading.map((letter, index) => (
              <span
                key={index}
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
                className="inline-block transition-all duration-200 cursor-default"
                style={{
                  color: hoveredLetter === index ? "#2563EB" : "inherit",
                  transform: hoveredLetter === index ? "scale(1.3)" : "scale(1)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-xl text-gray-600 text-lg mb-12"
          style={{ animation: "slideUp 0.8s ease-out 0.2s both" }}
        >
         Frontend Engineer skilled in React, Redux, Tailwind, Bootstrap, Node.js, and manual/automation testing.I also work as a freelance developer, building fast and modern web experiences.
          <br />currently working on my own project bugstrack.
        </p>

        {/* CONNECT BUTTON */}
<a
  href="https://mail.google.com/mail/u/0/#sent?compose=CllgCKCDlVVzxsxpXFPGGpptWmzWtjFgVJNZMGstDWCRPFfhPdllpbfPMtbdJDHsxmTXgPDXKfL"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    onMouseEnter={() => setIsButtonHovered(true)}
    onMouseLeave={() => setIsButtonHovered(false)}
    className="px-8 py-3 bg-black text-white rounded-full text-lg hover:bg-blue-600 transition-all transform hover:scale-105 mb-28"
    style={{ animation: "slideUp 0.8s ease-out 0.4s both" }}
  >
    Let's Connect
    <span
      className="inline-block ml-2 transition-transform"
      style={{ transform: isButtonHovered ? "rotate(45deg)" : "rotate(0deg)" }}
    >
      ↗
    </span>
  </button>
</a>


        {/* Scroll */}
        <p className="text-gray-500">Explore my work</p>

        <button
          onMouseEnter={() => setIsScrollHovered(true)}
          onMouseLeave={() => setIsScrollHovered(false)}
          className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mt-4 hover:bg-blue-700 transition-all transform hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              transform: isScrollHovered ? "translateY(2px)" : "translateY(-2px)",
              transition: "0.3s ease",
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* FOOTER */}
      <footer className="fixed bottom-8 left-8 text-blue-600 font-semibold cursor-pointer group">
        {/* <span className="text-xl">✨</span> */}
        {/* <span className="hidden sm:inline group-hover:underline">
          Designing through Pixels & Passion
        </span> */}
      </footer>

      <div className="fixed bottom-8 right-8 text-gray-500 text-sm">
        {new Date().toLocaleTimeString()}
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
