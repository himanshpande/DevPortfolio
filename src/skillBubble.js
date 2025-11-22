"use client"

import { useEffect, useRef, useState } from "react"

export default function SkillsBubbles() {
  const labels = [
    "Drawing",
    "Copywriting",
    "Web Design",
    "Product Design",
    "UX Design",
    "3D Illustration",
    "Photography",
  ]

  const containerRef = useRef(null)
  const nodesRef = useRef([])
  const animRef = useRef(null)
  const lastRef = useRef(performance.now())
  const dragRef = useRef({ id: null, ox: 0, oy: 0, lx: 0, ly: 0, lt: 0 })

  const [, setTick] = useState(0)

  const FRICTION = 0.995
  const BOUNCE = 0.82
  const SPRING = 0.15
  const FPS = 60

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const W = rect.width
    const H = rect.height

    const radiusFor = (label) => 55 // SAME pill size as screenshot

    nodesRef.current = labels.map((label, i) => ({
      id: i,
      label,
      x: 100 + i * 110,
      y: H - 100 - (i % 2) * 60,
      r: radiusFor(label),
      vx: (Math.random() - 0.5) * 50,
      vy: (Math.random() - 0.5) * 50,
    }))

    animRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(animRef.current)
  }, [])

  function loop(now) {
    const dt = Math.min(0.04, (now - lastRef.current) / 1000)
    lastRef.current = now
    physics(dt)
    setTick((t) => t + 1)
    animRef.current = requestAnimationFrame(loop)
  }

  function physics(dt) {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const W = rect.width
    const H = rect.height

    const nodes = nodesRef.current

    for (const n of nodes) {
      if (dragRef.current.id === n.id) {
        n.vx = 0
        n.vy = 0
        continue
      }

      n.x += n.vx * dt
      n.y += n.vy * dt

      n.vx *= Math.pow(FRICTION, dt * FPS)
      n.vy *= Math.pow(FRICTION, dt * FPS)

      if (n.x - n.r < 0) {
        n.x = n.r
        n.vx = Math.abs(n.vx) * BOUNCE
      }
      if (n.x + n.r > W) {
        n.x = W - n.r
        n.vx = -Math.abs(n.vx) * BOUNCE
      }
      if (n.y - n.r < 0) {
        n.y = n.r
        n.vy = Math.abs(n.vy) * BOUNCE
      }
      if (n.y + n.r > H) {
        n.y = H - n.r
        n.vy = -Math.abs(n.vy) * BOUNCE
      }
    }

    // collisions
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i]
        const b = nodes[j]

        const dx = b.x - a.x
        const dy = b.y - a.y
        const dist = Math.hypot(dx, dy)
        const minDist = a.r + b.r - 30

        if (dist < minDist) {
          const nx = dx / (dist || 1)
          const ny = dy / (dist || 1)
          const overlap = minDist - dist

          if (dragRef.current.id !== a.id) {
            a.x -= nx * overlap * SPRING
            a.y -= ny * overlap * SPRING
          }
          if (dragRef.current.id !== b.id) {
            b.x += nx * overlap * SPRING
            b.y += ny * overlap * SPRING
          }

          const rvx = b.vx - a.vx
          const rvy = b.vy - a.vy
          const rel = rvx * nx + rvy * ny

          if (rel < 0) {
            const impulse = (-(1 + 0.8) * rel) / 2
            const ix = impulse * nx
            const iy = impulse * ny

            if (dragRef.current.id !== a.id) {
              a.vx -= ix
              a.vy -= iy
            }
            if (dragRef.current.id !== b.id) {
              b.vx += ix
              b.vy += iy
            }
          }
        }
      }
    }
  }

  // dragging
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const pos = (e) =>
      e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY }

    function down(e) {
      const p = pos(e)
      const rect = container.getBoundingClientRect()
      const x = p.x - rect.left
      const y = p.y - rect.top

      for (const n of [...nodesRef.current].reverse()) {
        if (Math.hypot(x - n.x, y - n.y) < n.r) {
          dragRef.current = {
            id: n.id,
            ox: x - n.x,
            oy: y - n.y,
            lx: p.x,
            ly: p.y,
            lt: performance.now(),
          }
          break
        }
      }
    }

    function move(e) {
      if (dragRef.current.id === null) return

      const p = pos(e)
      const rect = container.getBoundingClientRect()
      const x = p.x - rect.left
      const y = p.y - rect.top

      const d = dragRef.current
      const n = nodesRef.current.find((q) => q.id === d.id)
      if (!n) return

      n.x = x - d.ox
      n.y = y - d.oy

      const dt = (performance.now() - d.lt) / 1000
      n.vx = (p.x - d.lx) / dt
      n.vy = (p.y - d.ly) / dt

      d.lx = p.x
      d.ly = p.y
      d.lt = performance.now()
    }

    function up() {
      dragRef.current.id = null
    }

    container.addEventListener("mousedown", down)
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseup", up)

    container.addEventListener("touchstart", down, { passive: false })
    window.addEventListener("touchmove", move, { passive: false })
    window.addEventListener("touchend", up)

    return () => {
      container.removeEventListener("mousedown", down)
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseup", up)
      container.removeEventListener("touchstart", down)
      window.removeEventListener("touchmove", move)
      window.removeEventListener("touchend", up)
    }
  }, [])

  const nodes = nodesRef.current

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[420px] lg:h-[520px]">
      {/* LEFT AREA */}
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden min-h-[260px] sm:min-h-[320px]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(46,64,26,0.7) 1px, transparent 1px)",
          backgroundSize: "13px 13px",
          backgroundColor: "#f3f3e7",
        }}
      >
        {nodes.map((n) => (
          <div
            key={n.id}
            className="
              absolute 
              rounded-full 
              border border-[#2f3b1e]
              bg-[#faf9f2]
              text-[#252f14]
              font-medium
              flex items-center justify-center
              shadow-sm
              select-none
              transition-transform
            "
            style={{
              width: n.r * 2.1,
              height: 42,
              left: n.x - n.r,
              top: n.y - 21,
              borderRadius: "999px",
            }}
          >
            {n.label}
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-[360px] bg-[#f3f2e6] border-t lg:border-t-0 lg:border-l border-[#2d3a1e] p-6 lg:p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#2a3818] mb-4">So, what do I even do?</h1>
          <p className="text-[#273218] text-sm leading-relaxed">
            My expertise lies in crafting intuitive, user-centered digital experiences — from wireframes and UI layouts
            to high-fidelity prototypes. I design products that not only look great but solve real problems and drive
            measurable impact.
          </p>
        </div>

        <a
  href="https://www.linkedin.com/in/himanshu-pandey-27273a216"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="flex items-center gap-3 px-5 py-3 rounded-full bg-lime-300 border border-[#2e381b] hover:scale-105 transition">
    <span className="w-7 h-7 bg-red-400 rounded-full flex items-center justify-center text-white">→</span>
    <span className="font-semibold text-[#2c371b]">Get in touch</span>
  </button>
</a>

      </div>
    </div>
  )
}
