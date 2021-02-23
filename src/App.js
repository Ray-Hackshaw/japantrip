import React, { useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';
import $ from 'jquery';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const App = () => {
  const mapContainerRef = useRef(null);
  
  useEffect(() => {
    var width = window.innerWidth;
    var map_center;
    var min_zoom;
    if (width < 1920) {
        map_center = [130.4017, 33.5902]; //Mobile center - Fukuoka
        min_zoom = 6.95;
        $('#mobile').css('visibility', 'visible');
    }
    else {
        map_center = [135.153043689403, 35.09315131123772]; //Desktop center - Osaka/Kobe/Kyoto
        min_zoom = 6.95;
    }
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/rhackshaw/ckkkt1i3w34kx17m9gugc2yzh',
        center: map_center,
        zoom: 5,
        bearingSnap: 0,
        minZoom: min_zoom,
        attributionControl: false
    }); 

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    map.on('load', function () {
        map.loadImage(
            './marker.png',
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
                        'title': 'Fukuoka',
                        'description':
                        '<div class="marker-board"><strong class="title center">Fukuoka | November 19th - November 24th</strong><p class="description">We flew in initially from Auckland, NZ and used Seoul, SK as our transit location. From there, we travelled to Fukuoka where we would spend the first few days of our trip. We visited Fukuoka tower, a variety of different parks, and the Canal City Mall complex. The city acted as a great landing spot for us to work our way up the country. It provided us an authentic look into an everyday Japanese urban lifestyle, relatively stripped away from the standard tourist hotspots that heavily occupy cities such as Tokyo or Osaka. </p></div>'
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
                        'description':
                        '<div class="marker-board"><strong class="title center">Hiroshima | November 24th - November 26th</strong><p class="description">Hiroshima was our second major city we stayed in. Travelling from Fukuoka using the Japanese Shinkansen train line, we stayed in a capsule hotel in the city centre for 2 nights. Our activities included visiting the Peace Park Memorial, Peace Park Museum, and visiting the Hiroshima Castle. The city itself stood quietly during the day yet was filled with bars and restaurants that illuminated the night life.</p></div>'
                        },
                        'geometry': {
                        'type': 'Point',
                        'coordinates': [132.4522611306503, 34.48278891579711]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                        'title': 'Osaka',
                        'description':
                        '<div class="marker-board"><strong class="title center">Osaka | November 26th - November 30th</strong><p class="description">We stayed about 5 days or so in Osaka, with a single day trip to Kyoto in the middle of this period of time. We stayed at an Airbnb further out from the city, which proved to be insightful for the sake of understanding how vastly different life was in the suburbs. The suburbs were alarmingly quiet and quaint, with houses glued together with little to no breathing room. Any noise you made could be effortlessly heard by your neighbours. Contrastingly, the city was constantly overflowing with an incredibly diverse stream of both locals and tourists sharing spaces together. We visited the Osaka Castle, an owl and dog café, a ferris wheel, as well as a series of restaurants and bars around the primary strip of Dotonburi. </p></div>'
                        },
                        'geometry': {
                        'type': 'Point',
                        'coordinates': [135.49234655889848, 34.69131484578331]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                        'title': 'Kyoto',
                        'description':
                        '<div class="marker-board"><strong class="title center">Kyoto | November 29th</strong><p class="description">Although not a city we stayed at for any extended period of time, we decided to have a day trip in Kyoto. Taking the train directly from Osaka, we arrived and spent some time exploring around the Ōi River. We visited the Arashiyama Monkey park and nearby Bamboo Forest. In the future, I would love to spend more time in Kyoto and spend a few days staying in the city, as one day trip was not enough to properly appreciate the surrounding scenery and atmosphere.</p></div>'
                        },
                        'geometry': {
                        'type': 'Point',
                        'coordinates': [135.75749136628474, 35.01619080260397]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                        'title': 'Tokyo',
                        'description':
                        '<div class="marker-board"><strong class="title center">Tokyo | December 1st - December 14th</strong><p class="description">Our final stop and our longest stay for any city on our trip. We spent around 2 weeks in Tokyo, staying at 3 different locations, one hostel in Kita, one Airbnb on the outer banks of Shinjuku, and another hostel in the heart of Shinjuku. Originally we were planning to stay at 2 Airbnbs for our final accommodation, however changed our minds closer to the date. We all experienced Tokyo in our own special ways. To me it illustrated an interesting duality between a vast working metropolis fighting against tourist attractions and hotspots littered across the city. Through the bars and restaurants in the Golden Gai (red light district), to the shops and retail outlets sprawled out across Harujuku, to the temples and shrines and castles found throughout the city, Tokyo had something on every corner and it never ceased to captivate us. </p></div>'
                        },
                        'geometry': {
                        'type': 'Point',
                        'coordinates': [139.75527600814758, 35.690612319896516]
                        }
                    }
                ]}    
                })
                
                map.addLayer({
                    'id': 'places',
                    'type': 'symbol',
                    'source': 'places',
                    'layout': {
                    'icon-image': 'custom-marker',
                    'icon-allow-overlap': true,
                    'text-field': "{title}",
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                        'text-offset': [0, 1.25],
                        'text-anchor': 'top'
        }
                })
            }
        )
    });

    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        if (width < 1920 && coordinates[0] === 130.4022216796875) {
            console.log('Fukuoka')
            $('#mobile').css('visibility', 'hidden');
            $('#overlay').css('visibility', 'hidden');
            $('#modal').css('margin-left', '2%');
            $('#modal').css('margin-right', '2%');
            $('#modal').css('width', 'auto');
            $('#modal').css('font-size', '3vw');
            // document.getElementById('overlay').innerHTML = '';
        }
        var description = e.features[0].properties.description;
        map.easeTo({
            zoom: 5,
            bearing: 0,
            bearingSnap: 0,
            speed: 0.15,
            curve: 2,
            center: e.features[0].geometry.coordinates,
            offset: [0, 100]
        });
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        document.getElementById('modal').innerHTML = description;
    });

    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });

    
    return () => map.remove();
  }, []); 

  return (
    <div className="App">
        <div className="map-container" ref={mapContainerRef} />
        <div id="overlay" className="theme">   
            <h1 className="title">Tokyo 2019</h1>
            <div className="bio">This Is the route my friends and I took during our trip to Japan in late 2019. It outlines the major stops along the way, starting from Fukuoka and ending in Tokyo.</div>
        </div>
        <div className="overlay_second theme">
            <a href="https://github.com/Ray-Hackshaw" target="_blank" rel="noopener noreferrer">source</a>
        </div>
        <div id="modal" className="theme">
            <div className="center"><b>Clicking</b> the markers will give a brief description of each city and our activities there.</div>
        </div>
        <div id="mobile" className="theme">
            <p className="center"><b>Disclaimer:</b> this site is best viewed on Desktop devices; the mobile site is currently under development.</p>
        </div>
    </div>
  );
};

export default App;


