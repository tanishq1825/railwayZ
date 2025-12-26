import { Train, Users, Target, Award, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const team = [
  { name: "Tanishq Chodhary", role: "Full-stack Developer Project Lead", avatar: "👨‍💼" },
  { name: "Umesh Rathore", role: "UI/UX Designer", avatar: "🧑‍🎨" },
  { name: "Tarun Kumar Prajapati", role: "Full-stack Developer", avatar: "👨‍💻" },
  { name: "Vansh Jain", role: "Documentation", avatar: "🙋🏻‍♂️" },
];

const stats = [
  { value: "500+", label: "Stations Mapped" },
  { value: "10M+", label: "Users Helped" },
  { value: "99.5%", label: "Uptime" },
  { value: "4.8★", label: "User Rating" },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To make railway station navigation seamless and accessible for every Indian traveler.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Designing for everyone - elderly, differently-abled, and first-time travelers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous improvement based on user feedback and emerging technologies.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Train className="h-4 w-4 text-primary-foreground" />
              <span className="text-primary-foreground/90 text-sm font-medium">About RailWayZ</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Making Railway Navigation{" "}
              <span className="text-accent">Simple</span> for Everyone
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              RailWayZ is a smart navigation solution designed to help millions of Indian travelers 
              find their way around railway stations with ease and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Born from Real Travel Challenges
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RailWayZ was conceived during Smart India Hackathon (SIH) 2024, inspired by the 
                  common struggles travelers face navigating India's vast railway network.
                </p>
                <p>
                  With over 7,000 stations and millions of daily passengers, finding facilities, 
                  platforms, and services can be overwhelming—especially for first-time travelers, 
                  elderly passengers, and differently-abled individuals.
                </p>
                <p>
                  Our team set out to create a solution that combines modern technology with 
                  user-centric design, making station navigation as simple as following a map.
                </p>
              </div>
              <Link to="/stations" className="inline-block mt-6">
                <Button variant="accent">Explore Stations</Button>
              </Link>
            </div>
            <div className="bg-secondary rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Train className="h-32 w-32 text-primary/20 mx-auto mb-4" />
                <p className="text-muted-foreground">Building for India's Railways</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">The People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <a
                href="mailto:support@railwayz.in"
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-6 w-6 text-primary-foreground mx-auto mb-3" />
                <p className="text-primary-foreground text-sm">support@railwayz.in</p>
              </a>
              <a
                href="tel:1800-111-139"
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="h-6 w-6 text-primary-foreground mx-auto mb-3" />
                <p className="text-primary-foreground text-sm">1800-111-139</p>
              </a>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="h-6 w-6 text-primary-foreground mx-auto mb-3" />
                <p className="text-primary-foreground text-sm">New Delhi, India</p>
              </div>
            </div>
            <Link to="/signup">
              <Button size="lg" variant="accent">
                Join RailWayZ Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
