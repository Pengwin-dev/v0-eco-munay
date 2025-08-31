"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Globe, Shield, Zap, Users, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function WhitepaperPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t.whitepaper.backToHome}
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <FileText className="h-4 w-4 mr-2" />
              {t.whitepaper.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.whitepaper.title}</h1>
            <p className="text-xl text-muted-foreground text-balance">{t.whitepaper.subtitle}</p>
          </div>

          {/* Executive Summary */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-eco-green" />
                {t.whitepaper.executiveSummary.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.whitepaper.executiveSummary.content}</p>
            </CardContent>
          </Card>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">{t.whitepaper.problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.whitepaper.problem.content}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-eco-green">{t.whitepaper.solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.whitepaper.solution.content}</p>
              </CardContent>
            </Card>
          </div>

          {/* Technology */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-eco-aqua" />
                {t.whitepaper.technology.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">{t.whitepaper.technology.blockchain.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{t.whitepaper.technology.blockchain.content}</p>

                  <h4 className="font-semibold mb-2">{t.whitepaper.technology.smartContracts.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{t.whitepaper.technology.smartContracts.content}</p>

                  <h4 className="font-semibold mb-2">{t.whitepaper.technology.oracles.title}</h4>
                  <p className="text-muted-foreground text-sm">{t.whitepaper.technology.oracles.content}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.whitepaper.technology.token.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{t.whitepaper.technology.token.content}</p>

                  <h4 className="font-semibold mb-2">{t.whitepaper.technology.privacy.title}</h4>
                  <p className="text-muted-foreground text-sm">{t.whitepaper.technology.privacy.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market & Users */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-eco-amber" />
                {t.whitepaper.market.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.whitepaper.market.content}</p>
            </CardContent>
          </Card>

          {/* Tokenomics */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-eco-green" />
                {t.whitepaper.tokenomics.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t.whitepaper.tokenomics.emission.title}</h4>
                    <p className="text-muted-foreground text-sm">{t.whitepaper.tokenomics.emission.content}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.whitepaper.tokenomics.redemption.title}</h4>
                    <p className="text-muted-foreground text-sm">{t.whitepaper.tokenomics.redemption.content}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t.whitepaper.tokenomics.staking.title}</h4>
                    <p className="text-muted-foreground text-sm">{t.whitepaper.tokenomics.staking.content}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.whitepaper.tokenomics.transparency.title}</h4>
                    <p className="text-muted-foreground text-sm">{t.whitepaper.tokenomics.transparency.content}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-eco-aqua" />
                {t.whitepaper.roadmap.title}
              </h2>
              <div className="space-y-4">
                {t.whitepaper.roadmap.phases.map((phase: any, index: number) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-eco-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{phase.title}</h4>
                      <p className="text-muted-foreground text-sm">{phase.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Impact */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-eco-green" />
                {t.whitepaper.socialImpact.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.whitepaper.socialImpact.content}</p>
            </CardContent>
          </Card>

          {/* Team & Contact */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{t.whitepaper.team.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.whitepaper.team.content}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{t.whitepaper.contact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.whitepaper.contact.content}</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/">
              <Button size="lg" className="bg-eco-green hover:bg-eco-dark-green">
                {t.whitepaper.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
