import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
const icon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Station {
  name: string;
  code: string;
  city: string;
  lat: number;
  lng: number;
  platforms: number;
}

interface StationMapProps {
  station?: Station | null;
  stations?: Station[];
}

export default function StationMap({ station, stations = [] }: StationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Clean up existing map
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const defaultCenter: [number, number] = station 
      ? [station.lat, station.lng] 
      : [22.9, 76.2]; // Center of MP
    
    const defaultZoom = station ? 14 : 7;

    // Create new map
    const map = L.map(mapRef.current).setView(defaultCenter, defaultZoom);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add markers
    if (station) {
      L.marker([station.lat, station.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${station.name}</strong><br/>${station.city}`);
    } else if (stations.length > 0) {
      stations.forEach((s) => {
        L.marker([s.lat, s.lng], { icon })
          .addTo(map)
          .bindPopup(`<strong>${s.name}</strong><br/>${s.city}`);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [station, stations]);

  return (
    <div 
      ref={mapRef} 
      className="h-full w-full rounded-xl"
      style={{ minHeight: '300px' }}
    />
  );
}
