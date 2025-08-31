"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, Clock, Star, ArrowLeft, Recycle, CheckCircle, Coins } from "lucide-react"

interface RecyclingPoint {
  id: string
  name: string
  address: string
  distance: string
  status: "open" | "closed" | "busy"
  hours: string
  rating: number
  phone: string
  coordinates: { lat: number; lng: number }
}

// Mock data for recycling points
const mockRecyclingPoints: RecyclingPoint[] = [
  {
    id: "1",
    name: "SuperMart Downtown",
    address: "123 Main Street, Downtown",
    distance: "0.3 km",
    status: "open",
    hours: "6:00 AM - 11:00 PM",
    rating: 4.8,
    phone: "+1 (555) 123-4567",
    coordinates: { lat: -12.0464, lng: -77.0428 },
  },
  {
    id: "2",
    name: "EcoCenter Mall",
    address: "456 Shopping Ave, Mall District",
    distance: "0.8 km",
    status: "open",
    hours: "8:00 AM - 10:00 PM",
    rating: 4.6,
    phone: "+1 (555) 234-5678",
    coordinates: { lat: -12.0564, lng: -77.0328 },
  },
  {
    id: "3",
    name: "GreenMarket Plaza",
    address: "789 Eco Street, Green District",
    distance: "1.2 km",
    status: "busy",
    hours: "7:00 AM - 9:00 PM",
    rating: 4.7,
    phone: "+1 (555) 345-6789",
    coordinates: { lat: -12.0364, lng: -77.0528 },
  },
  {
    id: "4",
    name: "Metro Station Hub",
    address: "321 Transit Way, Metro Area",
    distance: "1.5 km",
    status: "open",
    hours: "5:00 AM - 12:00 AM",
    rating: 4.5,
    phone: "+1 (555) 456-7890",
    coordinates: { lat: -12.0664, lng: -77.0228 },
  },
]

type ModalStep = "map" | "recycling" | "completed"

interface MapModalProps {
  trigger: React.ReactNode
}

export function MapModal({ trigger }: MapModalProps) {
  const [selectedPoint, setSelectedPoint] = useState<RecyclingPoint | null>(null)
  const [currentStep, setCurrentStep] = useState<ModalStep>("map")
  const [bottleCount, setBottleCount] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-eco-green text-white"
      case "busy":
        return "bg-eco-amber text-black"
      case "closed":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Open"
      case "busy":
        return "Busy"
      case "closed":
        return "Closed"
      default:
        return "Unknown"
    }
  }

  const handleLocationSelect = (point: RecyclingPoint) => {
    setSelectedPoint(point)
    setCurrentStep("recycling")
    setBottleCount(0)
  }

  const handleStartRecycling = () => {
    setIsProcessing(true)
    const interval = setInterval(() => {
      setBottleCount((prev) => {
        if (prev >= 12) {
          clearInterval(interval)
          setIsProcessing(false)
          setTimeout(() => setCurrentStep("completed"), 1000)
          return prev
        }
        return prev + 1
      })
    }, 300)
  }

  const handleReset = () => {
    setCurrentStep("map")
    setSelectedPoint(null)
    setBottleCount(0)
    setIsProcessing(false)
  }

  const renderContent = () => {
    switch (currentStep) {
      case "map":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-eco-green" />
                Find Nearby Recycling Points
              </DialogTitle>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-6 h-[70vh]">
              {/* Mock Map Area */}
              <div className="relative bg-muted/30 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 to-eco-aqua/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 text-eco-green mx-auto" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Interactive Map</h3>
                      <p className="text-sm text-muted-foreground max-w-xs">
                        Select a location from the list to start recycling
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mock map pins */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-eco-green rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-eco-aqua rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-eco-amber rounded-full animate-pulse"></div>
                <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-eco-green rounded-full animate-pulse"></div>
              </div>

              {/* Points List */}
              <div className="space-y-4 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Nearby Points ({mockRecyclingPoints.length})</h3>
                  <Button size="sm" variant="outline" className="text-eco-green border-eco-green bg-transparent">
                    <Navigation className="h-4 w-4 mr-2" />
                    Use my location
                  </Button>
                </div>

                <div className="space-y-3">
                  {mockRecyclingPoints.map((point) => (
                    <Card
                      key={point.id}
                      className="cursor-pointer transition-all duration-200 hover:shadow-md hover:ring-2 hover:ring-eco-green/50"
                      onClick={() => handleLocationSelect(point)}
                    >
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h4 className="font-semibold text-sm">{point.name}</h4>
                              <p className="text-xs text-muted-foreground">{point.address}</p>
                            </div>
                            <Badge className={`text-xs ${getStatusColor(point.status)}`}>
                              {getStatusText(point.status)}
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Navigation className="h-3 w-3" />
                                {point.distance}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {point.hours}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-eco-amber text-eco-amber" />
                              <span>{point.rating}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </>
        )

      case "recycling":
        return (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={handleReset} className="p-1 h-8 w-8">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <DialogTitle className="flex items-center gap-2">
                  <Recycle className="h-5 w-5 text-eco-green" />
                  Recycling at {selectedPoint?.name}
                </DialogTitle>
              </div>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center space-y-8 py-8">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto">
                  <Recycle className="h-16 w-16 text-eco-green animate-spin" />
                </div>
                <h3 className="text-2xl font-bold">Recycling PET Bottles</h3>
                <p className="text-muted-foreground">Insert your bottles into the recycling machine</p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-eco-green">{bottleCount}</div>
                <p className="text-lg">Bottles Recycled</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Coins className="h-4 w-4" />
                  <span>Earning: {bottleCount * 10} MUNAY COINS</span>
                </div>
              </div>

              {!isProcessing && bottleCount === 0 && (
                <Button
                  onClick={handleStartRecycling}
                  size="lg"
                  className="bg-eco-green hover:bg-eco-dark-green text-white"
                >
                  Start Recycling
                </Button>
              )}

              {isProcessing && (
                <div className="text-center space-y-2">
                  <div className="animate-pulse text-eco-green">Processing bottles...</div>
                  <div className="w-64 bg-muted rounded-full h-2">
                    <div
                      className="bg-eco-green h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(bottleCount / 12) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </>
        )

      case "completed":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-eco-green" />
                Transaction Complete
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center space-y-8 py-8">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-16 w-16 text-eco-green" />
                </div>
                <h3 className="text-2xl font-bold text-eco-green">Recycling Complete!</h3>
                <p className="text-muted-foreground">Thank you for helping the environment</p>
              </div>

              <Card className="w-full max-w-md">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <h4 className="text-lg font-semibold">Transaction Summary</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Bottles Recycled:</span>
                        <span className="font-semibold">{bottleCount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Location:</span>
                        <span className="font-semibold text-sm">{selectedPoint?.name}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between items-center text-lg">
                          <span className="flex items-center gap-2">
                            <Coins className="h-5 w-5 text-eco-amber" />
                            MUNAY COINS Earned:
                          </span>
                          <span className="font-bold text-eco-green text-2xl">{bottleCount * 10}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-eco-green text-eco-green bg-transparent"
                >
                  Recycle More
                </Button>
                <Button className="bg-eco-green hover:bg-eco-dark-green text-white">View Dashboard</Button>
              </div>
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">{renderContent()}</DialogContent>
    </Dialog>
  )
}
