import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import style from '../css/Sobre.module.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibHVpemJhcnVlcmkiLCJhIjoiY2t3cW92czJmMG1yejJ4cWd4eTV6Z2FpZiJ9.BpYTVqy6xGXSrUGTHKEF8g';

export default function Mapa() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-46.8843);
  const [lat, setLat] = useState(-23.5334);
  const [zoom, setZoom] = useState(17.03);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className={style.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className={style.map_container} />
    </div>
  );
}
