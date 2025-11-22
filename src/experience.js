import React, { useState } from "react";
import ScrollBanner from "./ScrollBanner";

export default function Experience() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 gap-8 lg:gap-12">
      {/* Left Content - Website-style preview (iPad-like) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <div className="relative w-full max-w-2xl h-auto">
          {/* Main Website Card */}
          <div
            className="relative z-10 w-full mx-auto transform hover:scale-105 transition-transform duration-500"
            onMouseEnter={() => setHoveredCard("main")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="bg-gray-900 rounded-3xl p-3 sm:p-4 shadow-xl sm:shadow-2xl border border-gray-800">
              {/* Browser-style top bar */}
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <div className="ml-3 flex-1 h-5 rounded-full bg-gray-800"></div>
              </div>

              {/* Website Content - dashboard-style UI */}
              <div className="bg-white rounded-2xl overflow-hidden h-72 sm:h-80 md:h-96 flex">
                {/* Sidebar */}
                <aside className="hidden sm:flex flex-col w-32 md:w-40 bg-gray-900 text-white py-4 px-3 space-y-4">
                  <div className="font-bold text-sm md:text-base mb-2">Live Buy</div>
                  {["Overview", "Properties", "Tenants", "Analytics", "Settings"].map((item, idx) => (
                    <button
                      key={item}
                      className={`text-left text-xs md:text-sm rounded-lg px-2 py-1.5 mb-1 transition-colors ${
                        idx === 0 ? "bg-emerald-500 text-gray-900" : "hover:bg-gray-800"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                  <div className="mt-auto text-[10px] text-gray-400">v1.0 • Owner Dashboard</div>
                </aside>

                {/* Main Area */}
                <div className="flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Dashboard</div>
                      <div className="font-semibold text-sm md:text-base text-gray-900">I Am A Owner</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="hidden sm:flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Live
                      </button>
                      <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-xs font-semibold text-white">
                        BA
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="px-4 pt-3 pb-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                    {[
                      { label: "My Properties", value: "10", accent: "border-emerald-400" },
                      { label: "Active Tenants", value: "120", accent: "border-blue-400" },
                      { label: "Occupancy", value: "92%", accent: "border-yellow-400" },
                      { label: "Monthly Revenue", value: "₹4.3L", accent: "border-purple-400" },
                    ].map((card) => (
                      <div
                        key={card.label}
                        className={`bg-gray-50 rounded-xl px-3 py-2 border-l-4 ${card.accent} shadow-[0_1px_2px_rgba(15,23,42,0.04)]`}
                      >
                        <div className="text-[11px] text-gray-500 mb-1">{card.label}</div>
                        <div className="text-sm md:text-base font-semibold text-gray-900">{card.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Lower Content */}
                  <div className="flex-1 px-4 pb-3 flex flex-col md:flex-row gap-3 md:gap-4">
                    {/* Left: Properties list */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-semibold text-gray-700">Property Insights</div>
                        <button className="text-[11px] text-emerald-600 hover:text-emerald-700 font-semibold">
                          View all
                        </button>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-gray-600 overflow-y-auto">
                        {[
                          { name: "SNK Apartment", city: "Thousand Lights", occupancy: "96%", trend: "up" },
                          { name: "Green View Residency", city: "Anna Nagar", occupancy: "88%", trend: "steady" },
                          { name: "Marina Towers", city: "Besant Nagar", occupancy: "91%", trend: "up" },
                        ].map((p) => (
                          <div
                            key={p.name}
                            className="flex items-center justify-between rounded-lg px-2 py-1 hover:bg-white transition-colors"
                          >
                            <div>
                              <div className="font-semibold text-[11px] text-gray-800">{p.name}</div>
                              <div className="text-[10px] text-gray-500">{p.city}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[11px] font-semibold text-gray-900">{p.occupancy}</div>
                              <div className="text-[10px] text-emerald-600">
                                {p.trend === "up" && "▲ Stable"}
                                {p.trend === "steady" && "• Steady"}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Mini chart / activity */}
                    <div className="w-full md:w-48 bg-gray-900 text-white rounded-xl p-3 flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] text-gray-300 mb-1">Today's Activity</div>
                        <div className="text-sm font-semibold mb-1">18 New Enquiries</div>
                        <div className="text-[10px] text-emerald-300 mb-2">+32% vs last week</div>

                        <div className="flex items-end gap-1 h-16 mb-2">
                          {[12, 20, 28, 18, 24, 32, 26].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t-full bg-gradient-to-t from-emerald-500 to-lime-300"
                              style={{ height: `${h}px` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-gray-300">
                        <span>09:00</span>
                        <span>12:00</span>
                        <span>15:00</span>
                        <span>18:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Main Label */}
        <div className="text-emerald-400 text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Freelancer</div>

        {/* Sub Label */}
        <div className="text-gray-400 text-3xl text-3xl font-semibold mb-3 sm:mb-4">1 Year+</div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
          Experienced in frontend
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
          I’m an experienced Frontend Engineer with a strong focus on building clean, intuitive, and high-performance user interfaces. Alongside my engineering work, I also take on freelance projects, helping brands and startups turn ideas into polished digital experiences. I specialize in crafting modern, responsive web applications with attention to detail, smooth animations, and seamless user interactions
        </p>

        {/* CTA Button */}
        <a
          href="https://www.upwork.com/freelancers/~0125e765973f5d980b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-lime-300 hover:bg-lime-400 text-gray-900 font-bold text-sm sm:text-base rounded-full transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Contact Me</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </a>
      </div>

      {/* Animated banner text */}
      {/* <ScrollBanner /> */}
    </section>
  );
}
