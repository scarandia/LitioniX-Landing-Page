// components/OpenStreetMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
const iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
const iconShadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl,
    shadowUrl: iconShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface OpenStreetMapProps {
    latitude: number;
    longitude: number;
    zoom?: number;
}

const OpenStreetMap: React.FC<OpenStreetMapProps> = ({
    latitude,
    longitude,
    zoom = 15
}) => {
    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    <strong>Nuestra Tienda</strong><br />
                    Av. Calampampa 3002, Cochabamba
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default OpenStreetMap;