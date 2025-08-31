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

export default function HomePage() {
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
                  <span className="text-eco-green">Recycle bottles</span> and{" "}
                  <span className="text-eco-aqua">earn instantly</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Deliver your PET bottles to smart recycling centers and receive immediate digital credit without apps
                  or waiting.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MapModal
                  trigger={
                    <Button
                      size="lg"
                      className="bg-eco-green hover:bg-eco-dark-green text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group"
                    >
                      Find a point
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white bg-transparent transition-all duration-200 hover:shadow-md"
                >
                  How it works
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
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Why choose <span className="text-eco-green">EcoMunay</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Simple, secure, and sustainable recycling with immediate rewards
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="border-eco-green/20 hover:border-eco-green/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-eco-green/10 rounded-lg flex items-center justify-center mx-auto">
                    <Zap className="h-6 w-6 text-eco-green" />
                  </div>
                  <h3 className="text-xl font-semibold">Immediate Payment</h3>
                  <p className="text-muted-foreground">
                    Get instant digital vouchers for each container with QR codes ready for redemption
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="border-eco-aqua/20 hover:border-eco-aqua/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-eco-aqua/10 rounded-lg flex items-center justify-center mx-auto">
                    <MapPin className="h-6 w-6 text-eco-aqua" />
                  </div>
                  <h3 className="text-xl font-semibold">Nearby Points</h3>
                  <p className="text-muted-foreground">
                    Find recycling points in supermarkets and high-traffic centers near you
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="border-eco-amber/20 hover:border-eco-amber/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-eco-amber/10 rounded-lg flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-eco-amber" />
                  </div>
                  <h3 className="text-xl font-semibold">Auditable Proof</h3>
                  <p className="text-muted-foreground">
                    Non-transferable digital credentials provide verifiable recycling history
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-balance">How it works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to start earning from recycling</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100} className="text-center space-y-4">
              <div className="w-16 h-16 bg-eco-green rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl transition-transform hover:scale-110">
                1
              </div>
              <h3 className="text-xl font-semibold">Find a Point</h3>
              <p className="text-muted-foreground">
                Locate the nearest EcoMunay recycling point in supermarkets and shopping centers
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="text-center space-y-4">
              <div className="w-16 h-16 bg-eco-aqua rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl transition-transform hover:scale-110">
                2
              </div>
              <h3 className="text-xl font-semibold">Scan & Drop</h3>
              <p className="text-muted-foreground">
                Insert your PET bottles into the smart machine. No app required - just scan and go
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="text-center space-y-4">
              <div className="w-16 h-16 bg-eco-amber rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl transition-transform hover:scale-110">
                3
              </div>
              <h3 className="text-xl font-semibold">Earn Instantly</h3>
              <p className="text-muted-foreground">
                Receive a digital voucher with QR code for immediate redemption at partner locations
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal className="space-y-6">
              <h2 className="text-3xl font-bold text-eco-green">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Low home recycling rates due to lack of immediate incentives and convenience. Businesses and
                municipalities need anti-fraud systems and verifiable recycling data.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="space-y-6">
              <h2 className="text-3xl font-bold text-eco-aqua">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Smart recycling points with RVMs that validate, compact, and issue digital vouchers with QR codes for
                immediate redemption. Each session generates non-transferable receipts for reputation and auditing.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">What makes us different</h2>
            <p className="text-xl text-muted-foreground">Advanced technology meets environmental responsibility</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-eco-green/20">
              <CardContent className="p-6 space-y-4">
                <CheckCircle className="h-8 w-8 text-eco-green" />
                <h3 className="text-xl font-semibold">No App Required</h3>
                <p className="text-muted-foreground">
                  Simple "scan and go" incentive system without downloading apps or creating accounts
                </p>
              </CardContent>
            </Card>

            <Card className="border-eco-aqua/20">
              <CardContent className="p-6 space-y-4">
                <Shield className="h-8 w-8 text-eco-aqua" />
                <h3 className="text-xl font-semibold">Anti-Fraud Protection</h3>
                <p className="text-muted-foreground">
                  Physical and logical validation systems prevent double redemption and ensure authenticity
                </p>
              </CardContent>
            </Card>

            <Card className="border-eco-amber/20">
              <CardContent className="p-6 space-y-4">
                <TrendingUp className="h-8 w-8 text-eco-amber" />
                <h3 className="text-xl font-semibold">Partner Dashboard</h3>
                <p className="text-muted-foreground">
                  Comprehensive metrics and reporting for campaigns, impact tracking, and business insights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">What people are saying</h2>
            <p className="text-xl text-muted-foreground">Real feedback from users and partners</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-eco-amber text-eco-amber" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "So convenient! I can recycle my bottles while grocery shopping and get instant credit. No waiting, no
                  hassle."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-eco-green/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Regular User</p>
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
                <p className="text-muted-foreground">
                  "The impact metrics help us track our sustainability goals. The anti-fraud system gives us confidence
                  in the data."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-eco-aqua/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-eco-aqua" />
                  </div>
                  <div>
                    <p className="font-medium">SuperMart Chain</p>
                    <p className="text-sm text-muted-foreground">Retail Partner</p>
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
                <p className="text-muted-foreground">
                  "Fast, reliable, and I can see the environmental impact of my actions. This is the future of
                  recycling."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-eco-amber/10 rounded-full flex items-center justify-center">
                    <Recycle className="h-4 w-4 text-eco-amber" />
                  </div>
                  <div>
                    <p className="font-medium">Carlos Mendez</p>
                    <p className="text-sm text-muted-foreground">Environmental Advocate</p>
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
                <Badge className="bg-eco-amber text-black font-medium">Limited Time Offer</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Extra bonus for early adopters</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get an additional 20% bonus credit for your first 10 bottles returned at our pilot locations
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-eco-green hover:bg-eco-dark-green text-white font-medium">
                  Find pilot locations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white bg-transparent"
                >
                  Partner with us
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
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Frequently asked questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about EcoMunay</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="materials" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">What materials do you accept?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We currently accept PET bottles (plastic bottles with recycling code #1). This includes water bottles,
                soda bottles, and other clear plastic beverage containers. We're working to expand to other materials
                soon.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="app" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Do I need to download an app?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No app required! Our system is designed to be simple and accessible. Just bring your bottles to any
                EcoMunay point, insert them into the machine, and receive your digital voucher instantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="redeem" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">How do I redeem my vouchers?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Each voucher comes with a unique QR code that can be scanned at participating partner locations. Simply
                show the QR code at checkout to redeem your credit for discounts or cash equivalent.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="verification" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">How do you verify the environmental impact?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Every recycling session generates a non-transferable digital receipt stored on the blockchain. This
                creates an auditable trail of your environmental impact that can be verified by third parties and
                contributes to your sustainability reputation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="locations" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Where can I find EcoMunay points?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our recycling points are strategically located in supermarkets, shopping centers, and other high-traffic
                areas for maximum convenience. Use our location finder to discover the nearest point to you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust Signals and Impact Metrics */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Making a real impact</h2>
            <p className="text-xl text-muted-foreground">Live metrics from our recycling network</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <ScrollReveal delay={100} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-eco-green">
                <AnimatedCounter end={2500000} suffix="+" />
              </div>
              <div className="text-muted-foreground">Bottles Recycled</div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-eco-aqua">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-muted-foreground">Active Locations</div>
            </ScrollReveal>
            <ScrollReveal delay={300} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-eco-amber">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <div className="text-muted-foreground">Active Users</div>
            </ScrollReveal>
            <ScrollReveal delay={400} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-eco-green">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-muted-foreground">User Satisfaction</div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500} className="text-center">
            <p className="text-muted-foreground mb-8">Trusted by leading retailers and environmental organizations</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Find your nearest point and <span className="text-eco-green">earn by recycling</span> today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users making a positive environmental impact while earning instant rewards
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="flex flex-col sm:flex-row gap-4 justify-center">
            <MapModal
              trigger={
                <Button
                  size="lg"
                  className="bg-eco-green hover:bg-eco-dark-green text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group"
                >
                  Find a point near me
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
                  Get free demo
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
                Terms
              </a>
              <a href="/privacy" className="hover:text-eco-green transition-colors">
                Privacy
              </a>
              <a href="/contact" className="hover:text-eco-green transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
