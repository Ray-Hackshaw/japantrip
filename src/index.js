import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmhhY2tzaGF3IiwiYSI6ImNrZmd1MWlkbzBzNXgyem5weHF5dmg4aDYifQ.6e2Is20NCFjCSsfuLyA88w';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// var styles = 'mapbox://styles/rhackshaw/ckkkt1i3w34kx17m9gugc2yzh';