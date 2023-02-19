import React, { useRef, useEffect, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";

export function MapTiler() {
  const mapContainer = useRef<null | any>(null);
  const map = useRef<null | any>();
  const [lng] = useState(-57.68492145);
  const [lat] = useState(-16.06951865);
  const [zoom] = useState(14);
  const [API_KEY] = useState("SZb1yFkUUGNZhNsSkDg2");

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    // map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([-57.68492145, -16.06951865])
      .addTo(map.current);
  });

  return (
    <div className="col-span-3 relative w-full h-[500px] rounded-lg">
      <div
        ref={mapContainer}
        className="absolute w-full h-full border rounded-lg"
      />
    </div>
  );
}
