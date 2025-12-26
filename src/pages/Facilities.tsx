import { useState } from "react";
import { Search, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All", icon: "🏢" },
  { id: "ticketing", name: "Ticketing & Help", icon: "🎫" },
  { id: "essentials", name: "Passenger Essentials", icon: "🚻" },
  { id: "food", name: "Food", icon: "🍽️" },
];

const facilities = [
  // Ticketing & Help
  { name: "Ticket Counter", category: "ticketing", location: "Main Hall", status: "open", icon: "🎟️", hours: "6 AM - 10 PM" },
  { name: "ATVM Machine", category: "ticketing", location: "Platform 1", status: "open", icon: "🏧", hours: "24/7" },
  { name: "Enquiry Counter", category: "ticketing", location: "Main Hall", status: "open", icon: "ℹ️", hours: "6 AM - 10 PM" },
  
  // Passenger Essentials
  { name: "Restrooms", category: "essentials", location: "All Platforms", status: "open", icon: "🚻", hours: "24/7" },
  { name: "Waiting Room", category: "essentials", location: "Platform 1", status: "open", icon: "🪑", hours: "24/7" },
  { name: "Drinking Water", category: "essentials", location: "All Platforms", status: "open", icon: "💧", hours: "24/7" },
  
  // Food
  { name: "IRCTC Food Stall", category: "food", location: "Platform 1", status: "open", icon: "🍱", hours: "6 AM - 10 PM" },
  { name: "Tea / Snacks Stall", category: "food", location: "Platform 2", status: "open", icon: "☕", hours: "5 AM - 11 PM" },
];

export default function Facilities() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFacilities = facilities.filter((facility) => {
    const matchesCategory = selectedCategory === "all" || facility.category === selectedCategory;
    const matchesSearch = facility.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Station Facilities
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Find restrooms, food stalls, and ticket counters
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search facilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-card text-foreground shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <span>{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredFacilities.length} facilities
          </p>

          {/* Facilities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{facility.icon}</div>
                  <span
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      facility.status === "open"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    )}
                  >
                    {facility.status === "open" ? "Open" : "Closed"}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {facility.name}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{facility.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{facility.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFacilities.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No facilities found</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
