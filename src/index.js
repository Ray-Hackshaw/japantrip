import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

ReactDOM.render(
  <React.StrictMode>
    <div class="overlay">
        <h1 class="title">Tokyo 2019</h1>
        <div class="bio">This is the route my friends and I took during our trip to Japan in late 2019. It outlines the major stops along the way, starting from Fukuoka and ending in Tokyo.</div>
        <div class="bio"><b>Hovering</b> the markers will give a brief description of each city and our activities there.</div>
        <div class="bio"><b>Clicking</b> them will bring up a gallery of images from the time we spent in that city.</div>
        </div>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);