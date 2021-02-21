import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

ReactDOM.render(
  <React.StrictMode>
    <div id="overlay" className="theme">
        <h1 className="title">Tokyo 2019</h1>
        <div className="bio">This is the route my friends and I took during our trip to Japan in late 2019. It outlines the major stops along the way, starting from Fukuoka and ending in Tokyo.</div>
        {/* <div class="bio"><b>Clicking</b> them will bring up a gallery of images from the time we spent in that city. <i>(COMING SOON)</i></div> */}
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

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);