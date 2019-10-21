'use strict'

const MARKER_KEY = 'markers';
let gNextId = 101;
let gMap
let gMarkers = [];
let gSessionMarkers = [];


function createMap(elMap) {
    gMap = new google.maps.Map(elMap, {
        center: { lat: 29.556069, lng: 34.951831 },
        zoom: 15
    });
    return gMap
}


function createMarkers() {
    var markers = loadMarkersFromStorage();
    var loc = { lat: 29.556069, lng: 34.951831 }
    if (!markers || markers.length === 0) markers = [createMarker(loc, 'Eilat', gMap)]
    gMarkers = markers ;
    saveMarkersToStorage();
}

function createMarker(position, name, map) {
    let marker = new google.maps.Marker({
        id: gNextId++,
        name,
        position,
        map: map
    });
    let newMarker = {
        id: marker.id,
        position: marker.position,
        name,
    }
    gSessionMarkers.push(marker)
    gMarkers.push(newMarker)
    saveMarkersToStorage()
    renderMarkers();
    return marker
}






function setUserLoc() {
    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Your current location');
            infoWindow.open(gMap);
            gMap.setCenter(pos);
            createMarker(pos, 'Your current location', gMap)
        }, handleLocationError)
    }
}

function saveMarkersToStorage() {
    saveToStorage(MARKER_KEY, gMarkers)
}

function loadMarkersFromStorage() {
    return loadFromStorage(MARKER_KEY)
}

function getMarkers() {
    return gMarkers
}

function findMarkerById(id) {
    let currMarker = gSessionMarkers.find((marker) => {
        return marker.id === id
    })
    return currMarker
}

function findMarkerIdx(id) {
    let markerIdx = gSessionMarkers.findIndex((marker) => {
        return marker.id === id
    });
    return markerIdx
}

// function goToMarker(marker) {
//     gMap.setCenter(marker.position);
// }

function deleteMarker(markerId) {
    let sessionMarkerIdx = gSessionMarkers.findIndex((marker) => marker.id === markerId)
    let markerIdx = gMarkers.findIndex((marker) => marker.id === markerId)
    gSessionMarkers[sessionMarkerIdx].setMap(null)
    gSessionMarkers.splice(markerIdx, 1)
    gMarkers.splice(markerIdx, 1)
    saveMarkersToStorage()
}

function setMapCenter(lat, lng){
    gMap.setCenter(lat,lng);
}

function setMapOnAll(map) {
    for (var i = 0; i < gSessionMarkers.length; i++) {
        gSessionMarkers[i].setMap(map);
    }
}

function getMap(){
    return gMap
}

function hideMarkers() {
    setMapOnAll(null)
}

function showMarkers() {
    setMapOnAll(gMap);
}