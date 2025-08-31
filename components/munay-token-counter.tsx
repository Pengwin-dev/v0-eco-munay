"use client"

import { useState, useEffect } from "react"
import { Coins } from "lucide-react"
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
    <div className="bg-gradient-to-r from-eco-green/20 to-eco-aqua/20 dark:from-eco-green/30 dark:to-eco-aqua/30 border border-eco-green/40 dark:border-eco-green/50 rounded-lg px-4 py-2 backdrop-blur-sm shadow-lg dark:shadow-eco-green/10">
      <div className="flex items-center gap-2">
        <div className="bg-eco-green/20 dark:bg-eco-green/30 p-1.5 rounded-full">
          <Coins className="h-4 w-4 text-eco-green dark:text-eco-green" />
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-lg font-bold text-eco-green dark:text-eco-green">
            {tokens.toLocaleString()}
          </span>
          <span className="text-xs text-eco-green/80 dark:text-eco-green/90 font-medium tracking-wide">
            MUNAY COINS
          </span>
        </div>
      </div>
    </div>
  )
}
