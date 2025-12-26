import { useState } from "react";
import { Bell, AlertTriangle, Info, CheckCircle, Clock, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const alertTypes = [
  { id: "all", name: "All Alerts", icon: Bell },
  { id: "urgent", name: "Urgent", icon: AlertTriangle },
  { id: "info", name: "Information", icon: Info },
  { id: "resolved", name: "Resolved", icon: CheckCircle },
];

const alerts = [
  {
    id: 1,
    type: "urgent",
    title: "Platform Change Alert",
    description: "Train 12301 Rajdhani Express has been shifted from Platform 5 to Platform 8",
    station: "New Delhi",
    time: "5 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    type: "info",
    title: "Restroom Under Maintenance",
    description: "Restroom on Platform 3 is temporarily closed for cleaning. Please use Platform 4 restroom.",
    station: "New Delhi",
    time: "15 minutes ago",
    isRead: false,
  },
  {
    id: 3,
    type: "urgent",
    title: "Gate Closure Notice",
    description: "Entry Gate B will be closed from 2:00 PM to 4:00 PM for maintenance work",
    station: "Mumbai Central",
    time: "1 hour ago",
    isRead: true,
  },
  {
    id: 4,
    type: "info",
    title: "Food Stall Timing Update",
    description: "IRCTC Food Plaza on Platform 1 will remain open till midnight today",
    station: "Chennai Central",
    time: "2 hours ago",
    isRead: true,
  },
  {
    id: 5,
    type: "resolved",
    title: "Escalator Restored",
    description: "Escalator at Platform 5 is now operational after maintenance",
    station: "Howrah Junction",
    time: "3 hours ago",
    isRead: true,
  },
  {
    id: 6,
    type: "urgent",
    title: "Delay Notification",
    description: "Train 12951 Mumbai Rajdhani is running 45 minutes late due to fog conditions",
    station: "New Delhi",
    time: "4 hours ago",
    isRead: true,
  },
  {
    id: 7,
    type: "info",
    title: "New Facility Added",
    description: "New mobile charging station installed near Waiting Room A. Free for all passengers.",
    station: "Bengaluru City",
    time: "5 hours ago",
    isRead: true,
  },
  {
    id: 8,
    type: "resolved",
    title: "Water Supply Restored",
    description: "Drinking water supply on Platform 6-10 has been restored",
    station: "Secunderabad",
    time: "6 hours ago",
    isRead: true,
  },
];

export default function Alerts() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedAlert, setSelectedAlert] = useState<typeof alerts[0] | null>(null);

  const filteredAlerts = alerts.filter(
    (alert) => selectedType === "all" || alert.type === selectedType
  );

  const unreadCount = alerts.filter((a) => !a.isRead).length;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Bell className="h-4 w-4 text-primary-foreground" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                {unreadCount} New Alerts
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Station Alerts & Updates
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Stay informed about platform changes, closures, and important announcements
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide mb-6">
            {alertTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all",
                  selectedType === type.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <type.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{type.name}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Alerts List */}
            <div className="lg:col-span-2 space-y-4">
              {filteredAlerts.map((alert) => (
                <button
                  key={alert.id}
                  onClick={() => setSelectedAlert(alert)}
                  className={cn(
                    "w-full text-left bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5",
                    selectedAlert?.id === alert.id && "ring-2 ring-primary",
                    !alert.isRead && "border-l-4 border-accent"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        alert.type === "urgent" && "bg-destructive/10 text-destructive",
                        alert.type === "info" && "bg-primary/10 text-primary",
                        alert.type === "resolved" && "bg-success/10 text-success"
                      )}
                    >
                      {alert.type === "urgent" && <AlertTriangle className="h-5 w-5" />}
                      {alert.type === "info" && <Info className="h-5 w-5" />}
                      {alert.type === "resolved" && <CheckCircle className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate">{alert.title}</h3>
                        {!alert.isRead && (
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                        {alert.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{alert.station}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {alert.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}

              {filteredAlerts.length === 0 && (
                <div className="text-center py-16 bg-card rounded-xl">
                  <Bell className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">No alerts in this category</p>
                </div>
              )}
            </div>

            {/* Alert Detail */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-24">
                {selectedAlert ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium uppercase",
                          selectedAlert.type === "urgent" && "bg-destructive/10 text-destructive",
                          selectedAlert.type === "info" && "bg-primary/10 text-primary",
                          selectedAlert.type === "resolved" && "bg-success/10 text-success"
                        )}
                      >
                        {selectedAlert.type}
                      </span>
                      <button
                        onClick={() => setSelectedAlert(null)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      {selectedAlert.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{selectedAlert.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between py-2 border-t border-border">
                        <span className="text-muted-foreground">Station</span>
                        <span className="font-medium text-foreground">{selectedAlert.station}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-t border-border">
                        <span className="text-muted-foreground">Posted</span>
                        <span className="font-medium text-foreground">{selectedAlert.time}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6" variant="outline">
                      Mark as Read
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Bell className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Select an alert to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
