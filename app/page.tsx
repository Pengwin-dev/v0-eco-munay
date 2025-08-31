"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactModal } from "@/components/contact-modal"
import { MapModal } from "@/components/map-modal"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, MapPin, Zap, Shield, Recycle, Star, Users, TrendingUp, CheckCircle, Gift } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                  <span className="text-eco-green">{t.hero.title.split(" and ")[0]}</span> and{" "}
                  <span className="text-eco-aqua">{t.hero.title.split(" and ")[1]}</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.hero.subtitle}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MapModal
                  trigger={
                    <Button
                      size="lg"
                      className="bg-eco-green hover:bg-eco-dark-green text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group"
                    >
                      {t.hero.findPoint}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white bg-transparent transition-all duration-200 hover:shadow-md"
                >
                  {t.hero.howItWorks}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200} className="relative">
              <div className="aspect-square bg-gradient-to-br from-eco-green/10 to-eco-aqua/10 rounded-2xl flex items-center justify-center">
                <img
                  src="/person-using-recycling-machine-with-digital-vouche.png"
                  alt="Person using RVM with digital voucher"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.valueProposition.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t.valueProposition.subtitle}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="border-eco-green/20 hover:border-eco-green/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-eco-green/10 rounded-lg flex items-center justify-center mx-auto">
                    <Zap className="h-6 w-6 text-eco-green" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.valueProposition.immediatePayment.title}</h3>
                  <p className="text-muted-foreground">{t.valueProposition.immediatePayment.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="border-eco-aqua/20 hover:border-eco-aqua/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-eco-aqua/10 rounded-lg flex items-center justify-center mx-auto">
                    <MapPin className="h-6 w-6 text-eco-aqua" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.valueProposition.nearbyPoints.title}</h3>
                  <p className="text-muted-foreground">{t.valueProposition.nearbyPoints.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="border-eco-amber/20 hover:border-eco-amber/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-eco-amber/10 rounded-lg flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-eco-amber" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.valueProposition.auditableProof.title}</h3>
                  <p className="text-muted-foreground">{t.valueProposition.auditableProof.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.howItWorks.title}</h2>
            <p className="text-xl text-muted-foreground">{t.howItWorks.subtitle}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100} className="text-center space-y-4">
              <div className="w-16 h-16 bg-eco-green rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl transition-transform hover:scale-110">
                1
              </div>
              <h3 className="text-xl font-semibold">{t.howItWorks.step1.title}</h3>
              <p className="text-muted-foreground">{t.howItWorks.step1.description}</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="text-center space-y-4">
              <div className="w-16 h-16 bg-eco-aqua rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl transition-transform hover:scale-110">
                2
              </div>
              <h3 className="text-xl font-semibold">{t.howItWorks.step2.title}</h3>
              <p className="text-muted-foreground">{t.howItWorks.step2.description}</p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="text-center space-y-4">
              <div className="w-16 h-16 bg-eco-amber rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl transition-transform hover:scale-110">
                3
              </div>
              <h3 className="text-xl font-semibold">{t.howItWorks.step3.title}</h3>
              <p className="text-muted-foreground">{t.howItWorks.step3.description}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal className="space-y-6">
              <h2 className="text-3xl font-bold text-eco-green">{t.problemSolution.problemTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.problemSolution.problemText}</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="space-y-6">
              <h2 className="text-3xl font-bold text-eco-aqua">{t.problemSolution.solutionTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.problemSolution.solutionText}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.differentiators.title}</h2>
            <p className="text-xl text-muted-foreground">{t.differentiators.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-eco-green/20">
              <CardContent className="p-6 space-y-4">
                <CheckCircle className="h-8 w-8 text-eco-green" />
                <h3 className="text-xl font-semibold">{t.differentiators.noApp.title}</h3>
                <p className="text-muted-foreground">{t.differentiators.noApp.description}</p>
              </CardContent>
            </Card>

            <Card className="border-eco-aqua/20">
              <CardContent className="p-6 space-y-4">
                <Shield className="h-8 w-8 text-eco-aqua" />
                <h3 className="text-xl font-semibold">{t.differentiators.antiFraud.title}</h3>
                <p className="text-muted-foreground">{t.differentiators.antiFraud.description}</p>
              </CardContent>
            </Card>

            <Card className="border-eco-amber/20">
              <CardContent className="p-6 space-y-4">
                <TrendingUp className="h-8 w-8 text-eco-amber" />
                <h3 className="text-xl font-semibold">{t.differentiators.dashboard.title}</h3>
                <p className="text-muted-foreground">{t.differentiators.dashboard.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.testimonials.title}</h2>
            <p className="text-xl text-muted-foreground">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-eco-amber text-eco-amber" />
                  ))}
                </div>
                <p className="text-muted-foreground">{t.testimonials.user1.text}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-eco-green/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium">{t.testimonials.user1.name}</p>
                    <p className="text-sm text-muted-foreground">{t.testimonials.user1.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-eco-amber text-eco-amber" />
                  ))}
                </div>
                <p className="text-muted-foreground">{t.testimonials.partner1.text}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-eco-aqua/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-eco-aqua" />
                  </div>
                  <div>
                    <p className="font-medium">{t.testimonials.partner1.name}</p>
                    <p className="text-sm text-muted-foreground">{t.testimonials.partner1.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-eco-amber text-eco-amber" />
                  ))}
                </div>
                <p className="text-muted-foreground">{t.testimonials.user2.text}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-eco-amber/10 rounded-full flex items-center justify-center">
                    <Recycle className="h-4 w-4 text-eco-amber" />
                  </div>
                  <div>
                    <p className="font-medium">{t.testimonials.user2.name}</p>
                    <p className="text-sm text-muted-foreground">{t.testimonials.user2.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-eco-green/20 bg-gradient-to-r from-eco-green/5 to-eco-aqua/5">
            <CardContent className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <Gift className="h-12 w-12 text-eco-green" />
              </div>
              <div className="space-y-4">
                <Badge className="bg-eco-amber text-black font-medium">{t.specialOffer.badge}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.specialOffer.title}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.specialOffer.subtitle}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-eco-green hover:bg-eco-dark-green text-white font-medium">
                  {t.specialOffer.findLocations}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white bg-transparent"
                >
                  {t.specialOffer.partnerWithUs}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.faq.title}</h2>
            <p className="text-xl text-muted-foreground">{t.faq.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="materials" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">{t.faq.materials.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t.faq.materials.answer}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="app" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">{t.faq.app.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t.faq.app.answer}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="redeem" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">{t.faq.redeem.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t.faq.redeem.answer}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="verification" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">{t.faq.verification.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t.faq.verification.answer}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="locations" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">{t.faq.locations.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t.faq.locations.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust Signals and Impact Metrics */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.impact.title}</h2>
            <p className="text-xl text-muted-foreground">{t.impact.subtitle}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <ScrollReveal delay={100} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-eco-green">
                <AnimatedCounter end={2500000} suffix="+" />
              </div>
              <div className="text-muted-foreground">{t.impact.bottlesRecycled}</div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-eco-aqua">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-muted-foreground">{t.impact.activeLocations}</div>
            </ScrollReveal>
            <ScrollReveal delay={300} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-eco-amber">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <div className="text-muted-foreground">{t.impact.activeUsers}</div>
            </ScrollReveal>
            <ScrollReveal delay={400} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-eco-green">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-muted-foreground">{t.impact.userSatisfaction}</div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500} className="text-center">
            <p className="text-muted-foreground mb-8">{t.impact.trustedBy}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold hover:opacity-100 transition-opacity">SuperMart</div>
              <div className="text-lg font-semibold hover:opacity-100 transition-opacity">EcoChain</div>
              <div className="text-lg font-semibold hover:opacity-100 transition-opacity">GreenTech Alliance</div>
              <div className="text-lg font-semibold hover:opacity-100 transition-opacity">City Recycling Dept</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Updated Main CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-eco-green/10 to-eco-aqua/10">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t.mainCta.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.mainCta.subtitle}</p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="flex flex-col sm:flex-row gap-4 justify-center">
            <MapModal
              trigger={
                <Button
                  size="lg"
                  className="bg-eco-green hover:bg-eco-dark-green text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group"
                >
                  {t.mainCta.findPoint}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
            <ContactModal
              title="Request Free Demo"
              description="Get a personalized demo of EcoMunay for your business or organization."
              trigger={
                <Button
                  size="lg"
                  variant="outline"
                  className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white bg-transparent transition-all duration-200 hover:shadow-md"
                >
                  {t.mainCta.getDemo}
                </Button>
              }
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Recycle className="h-6 w-6 text-eco-green" />
              <span className="font-semibold text-eco-green">EcoMunay</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© EcoMunay</span>
              <a href="/terms" className="hover:text-eco-green transition-colors">
                {t.footer.terms}
              </a>
              <a href="/privacy" className="hover:text-eco-green transition-colors">
                {t.footer.privacy}
              </a>
              <a href="/contact" className="hover:text-eco-green transition-colors">
                {t.footer.contact}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
