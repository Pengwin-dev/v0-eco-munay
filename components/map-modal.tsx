"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, Clock, Star, Phone } from "lucide-react"

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

interface MapModalProps {
  trigger: React.ReactNode
}

export function MapModal({ trigger }: MapModalProps) {
  const [selectedPoint, setSelectedPoint] = useState<RecyclingPoint | null>(null)

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

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
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
                    Map integration coming soon. For now, browse the list of nearby points.
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
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedPoint?.id === point.id ? "ring-2 ring-eco-green" : ""
                  }`}
                  onClick={() => setSelectedPoint(point)}
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

                      {selectedPoint?.id === point.id && (
                        <div className="pt-2 border-t space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <Phone className="h-3 w-3" />
                            <span>{point.phone}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-eco-green hover:bg-eco-dark-green text-white flex-1">
                              Get Directions
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-eco-green text-eco-green bg-transparent"
                            >
                              Call
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
