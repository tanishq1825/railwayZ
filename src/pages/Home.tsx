import { Link } from "react-router-dom";
import { Search, Navigation, Train, MapPin, Coffee, Accessibility, Bell, Clock, Users, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const features = [
  {
    icon: Search,
    title: "Find Anything",
    description: "Search platforms, facilities, food stalls, and services instantly"
  },
  {
    icon: Navigation,
    title: "Smart Navigation",
    description: "Get step-by-step directions with walking time estimates"
  },
  {
    icon: Accessibility,
    title: "Accessible Routes",
    description: "Barrier-free paths for elderly and specially-abled passengers"
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Stay updated with platform changes and facility status"
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Search Your Station",
    description: "Enter your station name or scan QR code at the station entrance",
    icon: MapPin
  },
  {
    step: "02",
    title: "Find What You Need",
    description: "Browse facilities, food options, or services near your platform",
    icon: Search
  },
  {
    step: "03",
    title: "Navigate Easily",
    description: "Follow smart directions to reach your destination quickly",
    icon: Navigation
  },
];

const stats = [
  { value: "500+", label: "Stations Covered" },
  { value: "50K+", label: "Daily Users" },
  { value: "99%", label: "Navigation Accuracy" },
  { value: "24/7", label: "Support Available" },
];

const popularFeatures = [
  { icon: Coffee, label: "Food & Drinks", count: "1200+ outlets" },
  { icon: Train, label: "Platform Info", count: "Real-time updates" },
  { icon: Clock, label: "Wait Times", count: "Live estimates" },
  { icon: Users, label: "Crowd Info", count: "Smart suggestions" },
  { icon: Shield, label: "Safety Features", count: "Emergency help" },
  { icon: Zap, label: "Fast Access", count: "Instant search" },
];

export default function Home() {
  return (
    <Layout>
    
      <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-float animation-delay-200" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">Smart Indian Railway Navigation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up animation-delay-100">
              Navigate Indian Railway Stations,{" "}
              <span className="text-accent">Smarter</span> &{" "}
              <span className="text-accent">Faster</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Find platforms, facilities, food, and services in seconds. 
              Your intelligent companion for seamless railway station navigation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <Link to="/stations">
                <Button size="xl" variant="accent" className="w-full sm:w-auto">
                  <Search className="mr-2 h-5 w-5" />
                  Search Station
                </Button>
              </Link>
              <Link to="/navigation">
                <Button size="xl" variant="hero-outline" className="w-full sm:w-auto">
                  <Navigation className="mr-2 h-5 w-5" />
                  Guide Me
                </Button>
              </Link>
            </div>

          
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up animation-delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-0 left-0 right-0">
  <svg
    viewBox="0 0 1440 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-[100px] block -mb-px"
    preserveAspectRatio="none"
  >
    <path
      d="
        M0 70
        C240 40 480 40 720 55
        C960 70 1200 90 1440 70
        L1440 100
        L0 100
        Z
      "
      fill="hsl(var(--background))"
    />
  </svg>
</div>


      </section>


      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Simple & Easy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">How RailWayZ Works</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Three simple steps to navigate any railway station like a local
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="relative group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 text-6xl font-bold text-primary/10">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Everything You Need</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Explore</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Popular Features</h2>
            </div>
            <Link to="/facilities">
              <Button variant="outline">
                View All Facilities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <feature.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{feature.label}</h4>
                <p className="text-xs text-muted-foreground">{feature.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
                <Accessibility className="h-4 w-4 text-primary-foreground" />
                <span className="text-primary-foreground/90 text-sm font-medium">Accessibility First</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Navigation for Everyone
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                We believe everyone deserves easy access. RailWayZ provides barrier-free routes, 
                wheelchair-accessible paths, and assistive navigation for all passengers.
              </p>
              <ul className="space-y-3 mb-8">
                {["Wheelchair accessible routes", "Voice-guided navigation", "Large text mode", "High contrast support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/navigation">
                <Button variant="accent" size="lg">
                  Try Accessible Mode
                </Button>
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="bg-primary-foreground/10 rounded-3xl p-8 backdrop-blur-sm border border-primary-foreground/20">
                <div className="aspect-square max-w-sm mx-auto bg-primary-foreground/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Accessibility className="h-24 w-24 text-primary-foreground/50 mx-auto mb-4" />
                    <p className="text-primary-foreground/60">Accessible Navigation Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-accent to-accent/80 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                Ready to Navigate Smarter?
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of travelers who navigate Indian railway stations with ease. 
                Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="xl" className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 w-full sm:w-auto">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="xl" variant="hero-outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
