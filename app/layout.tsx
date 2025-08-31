import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { WagmiProvider } from "@/components/wagmi-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Suspense } from "react"
import "@/lib/polyfills" // Import polyfills to fix WalletConnect browser compatibility issues
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EcoMunay - Recycle bottles and earn instantly",
  description:
    "Deliver your PET bottles to smart recycling centers and receive immediate digital credit without apps or waiting.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${plusJakartaSans.variable} ${inter.variable} antialiased`}>
        <Suspense>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <WagmiProvider>
              <LanguageProvider>{children}</LanguageProvider>
            </WagmiProvider>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
