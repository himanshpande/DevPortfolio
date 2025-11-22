"use client"

import { useState, useEffect } from "react"

/**
 * ScreenSizeGuard Component
 * Blocks access to the app when screen size is below specified dimensions
 */
export default function ScreenSizeGuard({ children, minWidth = 1000, minHeight = 815 }) {
  const [isScreenTooSmall, setIsScreenTooSmall] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      const tooSmall = width < minWidth || height < minHeight

      setIsScreenTooSmall(tooSmall)
      setIsChecking(false)

      if (tooSmall) {
        document.body.classList.add("screen-too-small")
      } else {
        document.body.classList.remove("screen-too-small")
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    window.addEventListener("orientationchange", () => {
      setTimeout(checkScreenSize, 100)
    })

    return () => {
      window.removeEventListener("resize", checkScreenSize)
      window.removeEventListener("orientationchange", checkScreenSize)
      document.body.classList.remove("screen-too-small")
    }
  }, [minWidth, minHeight])

  if (isChecking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground animate-pulse text-lg font-semibold">Checking screen size...</div>
      </div>
    )
  }

  if (isScreenTooSmall) {
    return (
      <div className="w-full">
        <div className="w-full">{children}</div>
        <WarningPage minWidth={minWidth} minHeight={minHeight} />
      </div>
    )
  }

  return <>{children}</>
}

/**
 * Warning Page UI Component
 */
function WarningPage({ minWidth, minHeight }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", updateDimensions)
    window.addEventListener("orientationchange", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      window.removeEventListener("orientationchange", updateDimensions)
    }
  }, [])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-6 py-16">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl shadow-lg p-12 text-center space-y-8 animate-fadeIn">
        {/* Icon Container - Improved styling */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-display text-primary text-4xl animate-pulse"></i>
          </div>
        </div>

        {/* Title - Enhanced typography */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Screen Size Required</h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            This application requires a larger screen for the best experience. Please rotate your device or use a
            desktop.
          </p>
        </div>

        {/* Requirements Info */}
        <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Minimum Requirements</p>
          <div className="flex justify-around text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">{minWidth}px</p>
              <p className="text-xs">Width</p>
            </div>
            <div className="text-border">|</div>
            <div>
              <p className="font-semibold text-foreground">{minHeight}px</p>
              <p className="text-xs">Height</p>
            </div>
          </div>
        </div>

        {/* Current Dimensions */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p className="font-medium">
            Current: {dimensions.width}px × {dimensions.height}px
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-4 flex flex-col items-center gap-2">
          <p className="text-xs font-medium text-muted-foreground">Scroll up to return</p>
          <i className="fa-solid fa-arrow-up text-primary animate-bounce text-lg"></i>
        </div>
      </div>
    </div>
  )
}
