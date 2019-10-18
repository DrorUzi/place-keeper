'use script'




var gMap;
function initMap() {
  gMap = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 29.55805, lng: 34.94821},
    zoom: 8
  });
}
