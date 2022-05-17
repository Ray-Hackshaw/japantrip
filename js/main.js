mapboxgl.accessToken = 'pk.eyJ1IjoicmhhY2tzaGF3IiwiYSI6ImNrZmd1MWlkbzBzNXgyem5weHF5dmg4aDYifQ.6e2Is20NCFjCSsfuLyA88w';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/rhackshaw/ckyy0qlp6000114odrc96ss59',
    center: [134.9198, 34.6555],
    zoom: 7.054,
    bearingSnap: 0,
    attributionControl: false,
    scrollWheelZoom: false
});

map.scrollZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.doubleClickZoom.disable();

// map.scrollZoom.disable();
map.on('load', function () {
    map.loadImage(
        'css/marker.png',
        function(error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);

             // Coordinates retrieved with Google Maps API call: https://maps.googleapis.com/maps/api/directions/json?origin=Fukuoka+Japan&destination=Tokyo+Japan&mode=driving&key=REACT_APP_GOOGLE_MAPS_TOKEN
            map.addSource('route', {
                'type': 'geojson',
                'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                'type': 'LineString',
                "coordinates": [
                    [130.4014689, 33.5919164],
                    [130.4024834, 33.5921441],
                    [130.4018864, 33.5934911],
                    [130.4089968, 33.6005018],
                    [130.4089226, 33.6059336],
                    [130.4089746, 33.61042640000001],
                    [130.4190791, 33.6337808],
                    [130.4230373, 33.6349296],
                    [130.4879236, 33.6299333],
                    [130.490708, 33.6330527],
                    [130.9806264, 33.92195090000001],
                    [130.9509481, 33.9738585],
                    [131.0708429, 34.09471449999999],
                    [131.4437862, 34.13060919999999],
                    [131.454474, 34.1297539],
                    [132.4522611306503, 34.38278891579711],
                    [135.2141792, 34.8494172],
                    [135.226283, 34.8442104],
                    [135.49234655889848, 34.69131484578331],
                    [135.5351875, 34.8075177],
                    [135.6427341, 34.86375340000001],
                    [135.75749136628474, 35.01619080260397],
                    [135.9519751, 34.9800522],
                    [135.9610851, 34.9785934],
                    [136.3966462, 34.9158669],
                    [136.8532555, 35.0528157],
                    [137.180101, 35.0420257],
                    [138.9154568, 35.2698919],
                    [139.6187383, 35.6283068],
                    [139.6257697, 35.627502],
                    [139.6133189, 35.6702538],
                    [139.6133395, 35.6719886],
                    [139.6447575, 35.6680779],
                    [139.6570534, 35.67170660000001],
                    [139.6563286, 35.6725486],
                    [139.6521202, 35.6772937],
                    [139.6506377, 35.6760996],
                    [139.6503054, 35.6761762],
                    [139.75527600814758, 35.690612319896516]
                    ]
                    }
                }
            })
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                'line-join': 'round',
                'line-cap': 'round'
                },
                'paint': {
                'line-color': '#888',
                'line-width': 2
                }
            })
            
            map.addSource('places', {
                'type': 'geojson',
                'data': {
                'type': 'FeatureCollection',
                'features': [
                {
                    'type': 'Feature',
                    'properties': {
                    'title': 'Fukuoka'
                },
                    'geometry': {
                    'type': 'Point',
                    'coordinates': [130.40221975652344, 33.5834837539706]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'title': 'Hiroshima',
                        },
                    'geometry': {
                    'type': 'Point',
                    'coordinates': [132.45214667744142, 34.38249539345438]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                    'title': 'Osaka'
                    },
                    'geometry': {
                    'type': 'Point',
                    'coordinates': [135.49234655889848, 34.69131484578331]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                    'title': 'Kyoto'
                    },
                    'geometry': {
                    'type': 'Point',
                    'coordinates': [135.75749136628474, 35.01619080260397]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                    'title': 'Tokyo'
                    },
                    'geometry': {
                    'type': 'Point',
                    'coordinates': [139.75527600814758, 35.690612319896516]
                    }
                }
            ]}    
            })
            // map.on('mouseenter', 'places', function () {
            //     map.getCanvas().style.cursor = 'pointer';
            // })
            map.on('mouseleave', 'places', function () {
                map.getCanvas().style.cursor = '';
            })
            map.addLayer({
                'id': 'places',
                'type': 'symbol',
                'source': 'places',
                'layout': {
                'icon-image': 'custom-marker',
                'icon-offset': [0, -19],
                'icon-allow-overlap': true,
                'text-field': "{title}",
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0],
                'text-anchor': 'top'
                },
                paint: {
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            })

       }
    )
});