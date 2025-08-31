"use client"

import { useState, useEffect } from "react"
import { Coins } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function MunayTokenCounter() {
  const [tokens, setTokens] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    // Start with a base amount
    const baseTokens = 1247
    setTokens(baseTokens)

    // Simulate occasional token increases (like from recycling activities)
    const interval = setInterval(() => {
      setTokens((prev) => {
        // Small chance of token increase to simulate recycling rewards
        if (Math.random() < 0.1) {
          return prev + Math.floor(Math.random() * 5) + 1
        }
        return prev
      })
    }, 10000) // Check every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Badge
      variant="outline"
      className="bg-eco-green/10 border-eco-green/30 text-eco-green hover:bg-eco-green/20 transition-all duration-200 px-3 py-1.5 font-medium"
    >
      <Coins className="h-4 w-4 mr-2" />
      <span className="font-mono">{tokens.toLocaleString()}</span>
      <span className="ml-1 text-xs">MUNAY</span>
    </Badge>
  )
}
