"use client"

import { useAccount, useBalance } from "wagmi"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, Zap } from "lucide-react"

export function WalletStatus() {
  const { address, isConnected, chain } = useAccount()
  const { data: balance } = useBalance({
    address,
  })

  if (!isConnected || !address) {
    return (
      <Card className="border-muted">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Wallet className="h-4 w-4" />
            <span className="text-sm">No wallet connected</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-eco-green/20">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-eco-green" />
              <span className="text-sm font-medium">Wallet Connected</span>
            </div>
            <Badge variant="secondary" className="bg-eco-green/10 text-eco-green">
              {chain?.name || "Unknown"}
            </Badge>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Address</div>
            <div className="text-sm font-mono">
              {address.slice(0, 8)}...{address.slice(-6)}
            </div>
          </div>

          {balance && (
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Balance</div>
              <div className="text-sm font-medium">
                {Number.parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
