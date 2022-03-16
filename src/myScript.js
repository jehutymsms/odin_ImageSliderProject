// Slider Functions

import './style.css';
import Flickity from 'flickity'

var elem = document.querySelector('.main-carousel');

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
  draggable: false,
  wrapAround: true,
});

