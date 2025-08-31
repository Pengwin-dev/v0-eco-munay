"use client"

import type React from "react"

import { useAccount } from "wagmi"
import { Card, CardContent } from "@/components/ui/card"
import { WalletConnectButton } from "@/components/wallet-connect-button"
import { useLanguage } from "@/components/language-provider"
import { Wallet, Shield, Recycle } from "lucide-react"

interface WalletGateProps {
  children: React.ReactNode
}

export function WalletGate({ children }: WalletGateProps) {
  const { isConnected } = useAccount()
  const { t } = useLanguage()

  if (isConnected) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="container max-w-md mx-auto">
        <Card className="border-eco-green/20 bg-gradient-to-br from-eco-green/5 to-eco-aqua/5">
          <CardContent className="p-8 text-center space-y-6">
            {/* Logo and branding */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Recycle className="h-8 w-8 text-eco-green" />
              <span className="text-2xl font-bold text-eco-green">EcoMunay</span>
            </div>

            {/* Wallet icon */}
            <div className="w-20 h-20 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto">
              <Wallet className="h-10 w-10 text-eco-green" />
            </div>

            {/* Title and description */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-balance">
                {t.language === "en" ? "Connect Your Wallet" : "Conecta tu Billetera"}
              </h1>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                {t.language === "en"
                  ? "To start earning MUNAY COINS for recycling PET bottles, please connect your wallet. This ensures secure transactions and verifiable proof of your environmental impact."
                  : "Para comenzar a ganar MUNAY COINS por reciclar botellas PET, conecta tu billetera. Esto asegura transacciones seguras y prueba verificable de tu impacto ambiental."}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-eco-green" />
                <span>
                  {t.language === "en" ? "Secure blockchain transactions" : "Transacciones blockchain seguras"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Recycle className="h-4 w-4 text-eco-aqua" />
                <span>{t.language === "en" ? "Verifiable recycling proof" : "Prueba de reciclaje verificable"}</span>
              </div>
            </div>

            {/* Connect wallet button */}
            <div className="pt-4">
              <WalletConnectButton className="w-full" />
            </div>

            {/* Additional info */}
            <p className="text-xs text-muted-foreground">
              {t.language === "en"
                ? "Supported wallets: MetaMask, WalletConnect, Coinbase Wallet"
                : "Billeteras compatibles: MetaMask, WalletConnect, Coinbase Wallet"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
