import { useState } from "react";
import { Search, MapPin, Train, ChevronRight, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import StationMap from "@/components/StationMap";

const stations = [
  { 
    name: "Indore Junction", 
    code: "INDB", 
    city: "Indore", 
    platforms: 6, 
    lat: 22.7196, 
    lng: 75.8577,
    image: "🏛️" 
  },
  { 
    name: "Dewas Junction", 
    code: "DWX", 
    city: "Dewas", 
    platforms: 3, 
    lat: 22.9623, 
    lng: 76.0508,
    image: "🚉" 
  },
  { 
    name: "Ujjain Junction", 
    code: "UJN", 
    city: "Ujjain", 
    platforms: 5, 
    lat: 23.1765, 
    lng: 75.7885,
    image: "🕌" 
  },
  { 
    name: "Bhopal Junction", 
    code: "BPL", 
    city: "Bhopal", 
    platforms: 6, 
    lat: 23.2687, 
    lng: 77.4122,
    image: "🏙️" 
  },
];

export default function Stations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStation, setSelectedStation] = useState<typeof stations[0] | null>(null);
  
  const filteredStations = searchQuery 
    ? stations.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.city.toLowerCase().includes(searchQuery.toLowerCase()))
    : stations;

  return (
    <Layout>
      {/* Hero Search */}
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Find Your Station
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Search from railway stations in Madhya Pradesh
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search station by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-card text-foreground shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Station Detail */}
      {selectedStation && (
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="bg-primary p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="text-5xl">{selectedStation.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-primary-foreground">
                        {selectedStation.name}
                      </h2>
                      <span className="px-2 py-1 bg-primary-foreground/20 rounded text-xs font-medium text-primary-foreground">
                        {selectedStation.code}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {selectedStation.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Train className="h-4 w-4" /> {selectedStation.platforms} Platforms
                      </span>
                    </div>
                  </div>
                  <Button variant="accent" size="lg">
                    <Navigation className="mr-2 h-4 w-4" /> Guide Me
                  </Button>
                </div>
              </div>
              
              {/* Station Map */}
              <div className="h-80 md:h-96">
                <StationMap station={selectedStation} />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Station Facilities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Restrooms", "Ticket Counter", "Waiting Room", "Food Stall", "ATM", "Enquiry", "Drinking Water", "ATVM"].map((facility, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-xs">✓</span>
                      </div>
                      <span className="text-sm text-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stations List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">Available Stations</h2>
            <p className="text-muted-foreground">Select a station to view details</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStations.map((station) => (
              <button
                key={station.code}
                onClick={() => setSelectedStation(station)}
                className={cn(
                  "bg-card rounded-xl p-6 text-left shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group",
                  selectedStation?.code === station.code && "ring-2 ring-primary"
                )}
              >
                <div className="text-4xl mb-4">{station.image}</div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {station.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{station.city}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Train className="h-4 w-4" />
                    <span>{station.platforms} Platforms</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>

          {filteredStations.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
              <p className="text-muted-foreground">No stations found</p>
            </div>
          )}
        </div>
      </section>

      {/* Map Overview */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">All Stations Map</h2>
            <div className="h-80 md:h-96">
              <StationMap stations={stations} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
