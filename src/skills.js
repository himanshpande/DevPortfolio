import React, { useState } from "react";

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  return (
    <>
    <style>{`
      @media (min-width: 1000px) and (max-width: 1739px) {
        .skills-section {
          justify-content: center !important;
        }
        .skills-right-section {
          width: 100% !important;
          max-width: 800px !important;
          text-align: center !important;
        }
        .skills-logo-container {
          justify-content: center !important;
        }
        .skills-buttons-container {
          justify-content: center !important;
        }
        .skills-description {
          margin-left: auto !important;
          margin-right: auto !important;
        }
      }
    `}</style>
    <section className={`skills-section min-h-screen bg-gradient-to-br from-emerald-400 via-emerald-350 to-emerald-500 flex flex-col lg:flex-row items-center justify-between min-[1740px]:justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 gap-8 lg:gap-12 ${isVideoPopupOpen ? 'hidden' : ''}`}>

      {/* Left Content - Hidden below 1740px */}
      <div className="hidden min-[1740px]:block w-full lg:w-1/2 flex items-center justify-center relative">
        {/* Increased max width to make GIF larger while keeping same position */}
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-auto">

          {/* Main GIF Image */}
          <div className="relative h-80 sm:h-96 md:h-[420px] md:w-[680px] flex items-center justify-center">
            <img
              src="/myProduct (2).gif"
              alt="Employee Tracker preview"
              className="h-full w-auto rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Duration Card */}
          {/* <div
            className="absolute top-4 sm:top-8 -left-12 sm:-left-20 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl transform hover:scale-110 transition-all duration-300 w-28 sm:w-auto"
            onMouseEnter={() => setHoveredCard("duration")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-gray-500 text-xs font-semibold mb-1">Avg duration</div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">02:24</div>
            <div className="text-gray-500 text-xs font-semibold mb-1">Long call</div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">25:34</div>

            <div className="text-gray-500 text-xs font-semibold mb-1 mt-2 sm:mt-3">Short call</div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">00:44</div>
          </div> */}

          {/* Calls Badge */}
          {/* <div
            className="absolute top-24 sm:top-32 -right-12 sm:-right-16 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-6 py-3 sm:py-4 shadow-lg sm:shadow-xl transform hover:scale-110 transition-all duration-300 w-max"
            onMouseEnter={() => setHoveredCard("calls")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">📞</span>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">256</div>
                <div className="text-gray-500 text-xs font-semibold">Outgoing calls</div>
              </div>
            </div>
          </div> */}

          {/* Contact Card */}
          {/* <div
            className="absolute bottom-4 sm:bottom-12 -right-8 sm:-right-12 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl w-60 sm:w-72 transform hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setHoveredCard("contact")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <img
                  src="/diverse-avatars.png"
                  alt="Hanna Torff"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 text-sm sm:text-base truncate">Hanna Torff</div>
                  <div className="text-gray-500 text-xs">1800 123 4567</div>
                </div>
              </div>

              <button className="w-8 sm:w-10 h-8 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 text-white font-bold flex-shrink-0 text-sm sm:text-base">
                ✓
              </button>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a1 1 0 100-2 1 1 0 000 2z" />
              </svg>

              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 sm:w-1 bg-gray-300 rounded-full"
                    style={{ height: `${Math.random() * 16 + 8}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </div> */}

        </div>
      </div>

      {/* Right Section - Centered when video is hidden */}
      <div className="skills-right-section w-full lg:w-1/2 min-[1740px]:lg:w-1/2 text-center min-[1740px]:lg:text-left">

        {/* Logo */}
        <div className="skills-logo-container flex items-center gap-2 mb-3 sm:mb-4 justify-center min-[1740px]:lg:justify-start">
         
          <span className="text-gray-900 font-semibold text-base sm:text-lg">Product to launch</span>
        </div>

  

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          Employee Tracker
        </h1>

        {/* Description */}
        <p className="skills-description text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 min-[1740px]:lg:mx-0">
          This App Includes real time tracking of employee activities, attendance monitoring, and productivity analysis to help businesses optimize their workforce management.
        </p>

        {/* CTA Buttons */}
        <div className="skills-buttons-container flex items-center gap-3 sm:gap-4 justify-center min-[1740px]:lg:justify-start flex-wrap">
          <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold text-sm sm:text-base rounded-full transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Early Avail</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          
          <button 
            onClick={() => setIsVideoPopupOpen(true)}
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm sm:text-base rounded-full transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Preview</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">▶</span>
          </button>
        </div>

      </div>
    </section>

    {/* Video Popup Modal */}
    {isVideoPopupOpen && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
        onClick={() => setIsVideoPopupOpen(false)}
      >
        <div 
          className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVideoPopupOpen(false)}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold transition-colors duration-300 z-10"
            aria-label="Close video"
          >
            ×
          </button>
          
          {/* Video Container */}
          <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/myProduct (2).gif"
              alt="Employee Tracker preview"
              className="w-full h-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    )}
    </>
  );
}
