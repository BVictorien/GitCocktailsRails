// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap';

window.onload = function(){

  TweenMax.set('body', {opacity:1});
  let tl = new TimelineMax();
  
  tl
    // .from('.article1', 1, {x: 500, opacity: 0})
    .from('.banner', 2, {opacity: 0, y:-200, ease: Expo.easeOut}, 1)
    .from('.card', 2, {opacity: 0, y:200, ease: Expo.easeOut}, 2)
    .from('.btn-primary', 2, {opacity: 0, x:-200, ease: Expo.easeOut}, 3)
    .from('.btn-danger', 2, {opacity: 0, x:200, ease: Expo.easeOut}, 3)

  
  }