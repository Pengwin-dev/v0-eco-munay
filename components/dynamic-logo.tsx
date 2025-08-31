"use client"

import { useEffect, useState } from "react"

interface DynamicLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function DynamicLogo({ className = "", size = "lg" }: DynamicLogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 md:w-56 lg:w-64",
    xl: "w-56 md:w-64 lg:w-72",
  }

  const getDotPosition = (dotIndex: number, phase: number) => {
    const baseAngle = dotIndex * 120 + phase
    const radius = 40 + Math.sin(phase * 0.02) * 15
    const leafFormation = Math.sin(phase * 0.03 + dotIndex * 2) * 20

    return {
      x: Math.cos((baseAngle * Math.PI) / 180) * radius + leafFormation,
      y: Math.sin((baseAngle * Math.PI) / 180) * radius + leafFormation,
      scale: 1 + Math.sin(phase * 0.025 + dotIndex) * 0.3,
    }
  }

  return (
    <div
      className={`${sizeClasses[size]} ${className} cursor-pointer transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dotGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="dotGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="dotGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#84cc16" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="trail">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feOffset in="blur" dx="2" dy="2" result="offset" />
            <feMerge>
              <feMergeNode in="offset" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform={`translate(150,150)`}>
          {[0, 1, 2].map((dotIndex) => {
            const position = getDotPosition(dotIndex, animationPhase)
            const gradientId = `dotGradient${dotIndex + 1}`

            return (
              <g key={dotIndex}>
                {/* Dot trail for growth effect */}
                <circle
                  cx={position.x * 0.8}
                  cy={position.y * 0.8}
                  r={8 * position.scale * 0.6}
                  fill={`url(#${gradientId})`}
                  className="opacity-30"
                  filter="url(#trail)"
                />
                {/* Main dot */}
                <circle
                  cx={position.x}
                  cy={position.y}
                  r={12 * position.scale}
                  fill={`url(#${gradientId})`}
                  filter="url(#glow)"
                  className="transition-all duration-300"
                  style={{
                    transform: `scale(${isHovered ? 1.2 : 1})`,
                    transformOrigin: "center",
                  }}
                />
                {/* Inner highlight for vitality */}
                <circle
                  cx={position.x}
                  cy={position.y}
                  r={6 * position.scale}
                  fill="rgba(255,255,255,0.3)"
                  className="transition-all duration-300"
                />
              </g>
            )
          })}

          {[0, 1, 2].map((lineIndex) => {
            const pos1 = getDotPosition(lineIndex, animationPhase)
            const pos2 = getDotPosition((lineIndex + 1) % 3, animationPhase)
            const opacity = 0.2 + Math.sin(animationPhase * 0.02 + lineIndex) * 0.1

            return (
              <path
                key={`line-${lineIndex}`}
                d={`M ${pos1.x} ${pos1.y} Q 0 0 ${pos2.x} ${pos2.y}`}
                stroke={`url(#dotGradient${lineIndex + 1})`}
                strokeWidth="2"
                fill="none"
                opacity={opacity}
                className="transition-all duration-500"
              />
            )
          })}
        </g>

        {/* Existing code */}
        <text
          x="150"
          y="240"
          textAnchor="middle"
          className="fill-current text-2xl font-bold"
          style={{ fill: "url(#dotGradient1)" }}
        >
          ECO MUNAY
        </text>

        <text
          x="150"
          y="260"
          textAnchor="middle"
          className="fill-current text-xs font-medium opacity-80"
          style={{ fill: "url(#dotGradient2)" }}
        >
          RECYCLE, EARN, REPEAT
        </text>
      </svg>
    </div>
  )
}
