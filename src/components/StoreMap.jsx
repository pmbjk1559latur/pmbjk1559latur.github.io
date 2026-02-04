import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// --- Fix for default Marker Icon not showing in React-Leaflet ---
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const POSITION = [18.392613600561738, 76.56392391073831];

export default function StoreMap() {
  return (
    <div className="h-full w-full min-h-[350px] overflow-hidden rounded-lg border border-slate-300 relative z-0">
      <MapContainer
        center={POSITION}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={POSITION}>
          <Popup>
            <div className="flex flex-col items-center gap-2 p-1">
              <div className="text-center leading-tight">
                <span className="font-bold text-slate-800">PMBJK-1559</span>
                <br />
                <span className="text-xs text-slate-600">Ram Nagar, Latur</span>
              </div>
              <a
                href="https://maps.app.goo.gl/LLk2pu2hF3fjq3e86"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 rounded bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700 no-underline"
              >
                <span className="text-white">Get Location</span>
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
