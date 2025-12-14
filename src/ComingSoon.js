import React, { useState, useEffect } from "react";

export default function ComingSoon({ onBack }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set target date (30 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative gradient spheres */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Subtitle */}
        <p className="text-slate-600 text-lg sm:text-xl mb-4 font-medium">
          Something great is on the way
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-thin text-slate-900 mb-12 tracking-tight">
          COMING SOON
        </h1>

        {/* Countdown Timer */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold text-slate-900 mb-2">
                {formatTime(timeLeft.days)}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider">
                Days
              </div>
            </div>

            {/* Separator */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold text-slate-400">
              :
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold text-slate-900 mb-2">
                {formatTime(timeLeft.hours)}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider">
                Hours
              </div>
            </div>

            {/* Separator */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold text-slate-400">
              :
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold text-slate-900 mb-2">
                {formatTime(timeLeft.minutes)}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider">
                Mins
              </div>
            </div>

            {/* Separator */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold text-slate-400">
              :
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold text-slate-900 mb-2">
                {formatTime(timeLeft.seconds)}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider">
                Secs
              </div>
            </div>
          </div>
        </div>

        {/* Back Button - Centered at the end */}
        {onBack && (
          <div className="flex justify-center">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base rounded-full transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

