'use strict'

const MARKER_KEY = 'markers';
let gNextId = 101;
let gMap;
let gMarkers = [];


function createMarkers(){
    var markers = loadFromStorage(MARKER_KEY);
    if(!markers || markers.length === 0) markers = [createMarker(29.55805 , 34.94821, 'Eilat')]
    gMarkers = markers;
    gNextId = gMarkers[0].id;
    saveToStorage(MARKER_KEY,gMarkers);
}

function createMarker(lat,lng,name){
    let marker = {
        id: gNextId++,
        lat,
        lng,
        name
    } 
    return marker
}

function getMap(){
    return gMap
}