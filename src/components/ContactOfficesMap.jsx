import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FitBounds({ bounds }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 11 });
  }, [map, bounds]);
  return null;
}

/**
 * Approximate coordinates for PDA offices (geocoded from published addresses).
 */
export const contactOfficeLocations = [
  {
    id: "accra",
    position: [5.5882, -0.2198],
    titleKey: "contact.accraOffice",
    address:
      "No. 30, Asafoatse Oman Street (Near Accra Central View Hotel and ATTC), Kokomlemle, Accra",
  },
  {
    id: "kumasi",
    position: [6.683, -1.578],
    titleKey: "contact.kumasiOffice",
    address: "Anwomaso Rd, Kumasi",
  },
];

const ContactOfficesMap = ({ t }) => {
  const bounds = useMemo(
    () =>
      L.latLngBounds(contactOfficeLocations.map((o) => o.position)),
    []
  );

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg aspect-[16/10] min-h-[280px] sm:min-h-[360px]">
      <MapContainer
        center={[6.14, -0.9]}
        zoom={7}
        scrollWheelZoom
        className="h-full w-full z-0 [&_.leaflet-control-attribution]:text-[10px] [&_.leaflet-control-attribution]:leading-tight"
        style={{ height: "100%", minHeight: "280px" }}
      >
        <TileLayer attribution={ATTRIBUTION} url={TILE_URL} />
        <FitBounds bounds={bounds} />
        {contactOfficeLocations.map((office) => (
          <Marker
            key={office.id}
            position={office.position}
            icon={defaultIcon}
          >
            <Popup>
              <div className="font-poppins text-sm min-w-[200px]">
                <p className="font-bold text-gray-900 mb-1">
                  {t(office.titleKey)}
                </p>
                <p className="text-gray-700">{office.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ContactOfficesMap;
