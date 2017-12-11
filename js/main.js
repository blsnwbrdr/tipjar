// DISPLAY THE LIST OF COUNTRIES
function showCountryList() {
  document.getElementById('banner').style.display = 'none';
  document.getElementById('countryList').style.display = 'block';
  document.getElementById('countryTipData').style.display = 'none';
  document.getElementById('main').style.display = 'block';
  document.getElementById('header').className = 'headerTop animated fadeIn';
  document.getElementById('h1').className = 'secondaryColor';
  document.getElementById('h3').className = 'primaryColor';
  document.getElementById('globe').className += ' primaryColor';
  document.getElementById('listBtn').className = 'primaryColor';
  document.getElementById('listBtn').style.display = 'none';
  document.getElementById('appStoreLogo').style.display = 'inline-block';
  document.getElementById('footer').style.display = 'block';
}
document.getElementById('listBtn').addEventListener('click', showCountryList);

// MAIN PAGE BANNER RANDOMIZER
var photos = ["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
var banner = document.getElementById('banner');
var random = Math.floor(Math.random() * photos.length);
banner.style.backgroundImage = 'url(img/' + photos[random] + ')';

// HOVER EFFECT ON H3
function mouseOverH3() {
  document.getElementById('h3').style.borderLeftColor = '#CC9F74';
  document.getElementById('h3').style.borderRightColor = '#CC9F74';
  document.getElementById('h3').style.transition = 'all 0.3s ease-out';
}
document.getElementById('listBtn').addEventListener('mouseover', mouseOverH3);
function mouseOutH3() {
  document.getElementById('h3').style.borderLeftColor = 'initial';
  document.getElementById('h3').style.borderRightColor = 'initial';
}
document.getElementById('listBtn').addEventListener('mouseout', mouseOutH3);

// DISABLE HOVER EFFECT ON H3 FOR TOUCH DEVICES
function mouseOverH3None() {
  document.getElementById('h3').style.borderLeftColor = 'initial';
  document.getElementById('h3').style.borderRightColor = 'initial';
}
window.addEventListener('touchstart', function hover() {
  document.getElementById('listBtn').addEventListener('mouseover', mouseOverH3None);
});
