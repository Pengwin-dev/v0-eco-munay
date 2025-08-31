"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { WalletConnectButton } from "@/components/wallet-connect-button"
import { useLanguage } from "@/components/language-provider"
import { Recycle, Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Recycle className="h-8 w-8 text-eco-green" />
          <span className="text-xl font-bold text-eco-green">EcoMunay</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#how-it-works" className="text-foreground/80 hover:text-eco-green transition-colors">
            {t.navigation.howItWorks}
          </Link>
          <Link href="#nearby-points" className="text-foreground/80 hover:text-eco-green transition-colors">
            {t.navigation.nearbyPoints}
          </Link>
          <Link href="#benefits" className="text-foreground/80 hover:text-eco-green transition-colors">
            {t.navigation.benefits}
          </Link>
          <Link href="#help" className="text-foreground/80 hover:text-eco-green transition-colors">
            {t.navigation.help}
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <div className="hidden md:block">
            <WalletConnectButton />
          </div>
          <Button className="hidden md:block bg-eco-green hover:bg-eco-dark-green text-white font-medium">
            {t.navigation.findPoint}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-2">
                  <Recycle className="h-6 w-6 text-eco-green" />
                  <span className="text-lg font-bold text-eco-green">EcoMunay</span>
                </div>

                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#how-it-works"
                    className="text-foreground/80 hover:text-eco-green transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navigation.howItWorks}
                  </Link>
                  <Link
                    href="#nearby-points"
                    className="text-foreground/80 hover:text-eco-green transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navigation.nearbyPoints}
                  </Link>
                  <Link
                    href="#benefits"
                    className="text-foreground/80 hover:text-eco-green transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navigation.benefits}
                  </Link>
                  <Link
                    href="#help"
                    className="text-foreground/80 hover:text-eco-green transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navigation.help}
                  </Link>
                </nav>

                <div className="space-y-4">
                  <WalletConnectButton />
                  <Button className="w-full bg-eco-green hover:bg-eco-dark-green text-white font-medium">
                    {t.navigation.findPoint}
                  </Button>
                  <div className="flex justify-center space-x-2">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
