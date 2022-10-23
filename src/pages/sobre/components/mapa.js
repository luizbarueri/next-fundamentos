    // <link href="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css" rel="stylesheet" />
    // <scrip src="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js"></script> 

export default function Mapa() {

    function dataMapa() {
        //mapboxgl.href="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css";
        //mapboxgl.src="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js";

            mapboxgl.accessToken = 'pk.eyJ1IjoibHVpemJhcnVlcmkiLCJhIjoiY2t3cW92czJmMG1yejJ4cWd4eTV6Z2FpZiJ9.BpYTVqy6xGXSrUGTHKEF8g';
            const map = new mapboxgl.Map({
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-74.0066, 40.7135],
            zoom: 15.5,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            antialias: true
            });
            
            map.on('load', () => {
            // Insert the layer beneath any symbol layer.
            const layers = map.getStyle().layers;
            const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
            ).id;
            
            // The 'building' layer in the Mapbox Streets
            // vector tileset contains building height data
            // from OpenStreetMap.
            map.addLayer(
            {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
            'fill-extrusion-color': '#aaa',
            
            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
            ],
            'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
            }
            },
            labelLayerId
            );
            });
    }

    return (
        <>
            {/* <link href="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css" rel="stylesheet" />
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js"></script> */}

            {dataMapa()}

        </>
    )
}