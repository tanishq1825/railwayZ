import { useState } from "react";
import { Navigation as NavIcon, MapPin, Clock, Accessibility, ArrowRight, Footprints, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import StationMap from "@/components/StationMap";

const facilities = [
  { name: "Restroom", distance: "50m", time: "1 min", icon: "🚻" },
  { name: "Food Stall", distance: "80m", time: "2 min", icon: "🍽️" },
  { name: "Ticket Counter", distance: "60m", time: "1 min", icon: "🎫" },
  { name: "Waiting Room", distance: "100m", time: "2 min", icon: "🪑" },
  { name: "Drinking Water", distance: "30m", time: "1 min", icon: "💧" },
  { name: "ATVM", distance: "70m", time: "2 min", icon: "🏧" },
];

const locations = [
  "Entry Gate",
  "Platform 1",
  "Platform 2",
  "Platform 3",
  "Platform 4",
  "Main Hall",
];

const destinations = [
  "Restroom",
  "Food Stall",
  "Ticket Counter",
  "Waiting Room",
  "Platform 1",
  "Platform 2",
  "Platform 3",
  "Exit Gate",
];

export default function NavigationPage() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [accessibleRoute, setAccessibleRoute] = useState(false);
  const [showDirections, setShowDirections] = useState(false);

  // Simple walking time logic (2-5 min)
  const getWalkingTime = () => {
    const times = [2, 3, 4, 5];
    return times[Math.floor(Math.random() * times.length)];
  };

  const walkingTime = getWalkingTime();

  const getDirections = () => {
    const steps = [
      { instruction: `Start from ${currentLocation}`, icon: "📍" },
      { instruction: "Walk straight ahead for 50m", icon: "🚶" },
      { instruction: accessibleRoute ? "Use lift to go up" : "Take the stairs or escalator", icon: accessibleRoute ? "🛗" : "📶" },
      { instruction: "Turn right at the junction", icon: "↪️" },
      { instruction: `${destination} is on your left`, icon: "✅" },
    ];
    return steps;
  };

  const handleGuideMe = () => {
    if (currentLocation && destination) {
      setShowDirections(true);
    }
  };

  // Indore Junction for map preview
  const previewStation = { name: "Indore Junction", code: "INDB", city: "Indore", lat: 22.7196, lng: 75.8577, platforms: 6 };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Guide Me
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Get step-by-step directions within the station
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Navigation Form */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-foreground mb-6">Navigate</h2>
                
                <div className="space-y-4">
                  {/* Current Location */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Location
                    </label>
                    <select
                      value={currentLocation}
                      onChange={(e) => setCurrentLocation(e.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-secondary text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select your location</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Destination
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-secondary text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>

                  {/* Accessible Route Toggle */}
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <Accessibility className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Accessible Route</span>
                    </div>
                    <button
                      onClick={() => setAccessibleRoute(!accessibleRoute)}
                      className={cn(
                        "w-12 h-6 rounded-full transition-colors relative",
                        accessibleRoute ? "bg-primary" : "bg-muted"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                          accessibleRoute ? "left-7" : "left-1"
                        )}
                      />
                    </button>
                  </div>

                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleGuideMe}
                    disabled={!currentLocation || !destination}
                  >
                    <NavIcon className="mr-2 h-5 w-5" /> Guide Me
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Results */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Access */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Nearby Facilities</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {facilities.map((facility, index) => (
                    <button
                      key={index}
                      onClick={() => setDestination(facility.name)}
                      className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors text-left group"
                    >
                      <div className="text-2xl">{facility.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {facility.name}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Footprints className="h-3 w-3" /> {facility.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {facility.time}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Directions */}
              {showDirections && (
                <div className="bg-card rounded-2xl shadow-card p-6 animate-fade-in-up">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Directions</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" /> ~{walkingTime} min walk
                    </div>
                  </div>

                  <div className="space-y-0">
                    {getDirections().map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                            {step.icon}
                          </div>
                          {index < getDirections().length - 1 && (
                            <div className="w-0.5 h-10 bg-border my-2" />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <p className="text-foreground">{step.instruction}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-green-700 dark:text-green-400 font-medium">You have arrived!</p>
                  </div>
                </div>
              )}

              {/* Map Preview */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Station Map</h3>
                <div className="h-64 md:h-80">
                  <StationMap station={previewStation} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
