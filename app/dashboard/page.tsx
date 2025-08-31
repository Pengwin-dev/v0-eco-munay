"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Coins, Recycle, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function RecyclingDashboard() {
  const { t } = useLanguage()
  const [isProcessing, setIsProcessing] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)

  // Simulate processing transaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const transactionData = {
    bottles: 8,
    munayCoins: 24.5,
    location: "SuperMart Plaza Norte",
    timestamp: new Date().toLocaleString(),
    transactionId: "ECO-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    co2Saved: 0.156, // kg of CO2 saved
    energySaved: 2.4, // kWh saved
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.navigation.findPoint}
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold">Recycling Dashboard</h1>
              <p className="text-sm text-muted-foreground">Transaction in progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Processing State */}
        {isProcessing && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-eco-green mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">Processing your bottles...</h2>
                <p className="text-muted-foreground">
                  Validating and counting your PET bottles. This will take just a moment.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Success State */}
        {showSuccess && (
          <>
            {/* Success Header */}
            <Card className="mb-6 border-eco-green bg-eco-green/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-eco-green mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-eco-green mb-2">Transaction Complete!</h2>
                  <p className="text-muted-foreground">
                    Your bottles have been successfully processed and MunayCoins earned.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Summary */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="h-5 w-5 text-eco-green" />
                  Transaction Summary
                </CardTitle>
                <CardDescription>Transaction ID: {transactionData.transactionId}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-eco-green">{transactionData.bottles}</div>
                    <div className="text-sm text-muted-foreground">PET Bottles</div>
                  </div>
                  <div className="text-center p-4 bg-eco-green/10 rounded-lg">
                    <div className="text-2xl font-bold text-eco-green flex items-center justify-center gap-1">
                      <Coins className="h-5 w-5" />
                      {transactionData.munayCoins}
                    </div>
                    <div className="text-sm text-muted-foreground">MunayCoins Earned</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {transactionData.location}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {transactionData.timestamp}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-eco-green">Environmental Impact</CardTitle>
                <CardDescription>Your contribution to a sustainable future</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-eco-aqua/10 rounded-lg">
                    <div className="text-xl font-bold text-eco-aqua">{transactionData.co2Saved} kg</div>
                    <div className="text-sm text-muted-foreground">CO₂ Saved</div>
                  </div>
                  <div className="text-center p-4 bg-eco-amber/10 rounded-lg">
                    <div className="text-xl font-bold text-eco-amber">{transactionData.energySaved} kWh</div>
                    <div className="text-sm text-muted-foreground">Energy Saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proof of Impact */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Proof of Impact</CardTitle>
                <CardDescription>Non-transferable digital credential for verification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Digital Receipt</span>
                    <Badge variant="secondary">Blockchain Verified</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Hash: 0x{Math.random().toString(16).substr(2, 40)}</div>
                    <div>Block: #{Math.floor(Math.random() * 1000000)}</div>
                    <div>Network: Base Mainnet</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-eco-green hover:bg-eco-dark-green text-white" size="lg">
                <Coins className="mr-2 h-4 w-4" />
                View MunayCoins Balance
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg">
                  Share Impact
                </Button>
                <Link href="/" className="w-full">
                  <Button variant="outline" size="lg" className="w-full bg-transparent">
                    Find Another Point
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
