'use strict'


function initMapPage() {
    initMap();
    renderMarkers()
}

function initMap() {
    var elMap = document.getElementById('map')
    var map = createMap(elMap);
    map.addListener('click', function (event) {
        onAddMarker(event.latLng, map);
    });
    createMarkers();
    initMarkers()
    return map
}




function initMarkers() {
    if (gMarkers.length === 0) return
    var myLatLng;
    var marker;
    for (var i = 0; i < gMarkers.length; i++) {
        myLatLng = { lat: gMarkers[i].lat, lng: gMarkers[i].lng }
        marker = new google.maps.Marker({
            id: gMarkers[i].id,
            position: myLatLng,
            map: gMap,
            name: gMarkers[i].name
        });
        gSessionMarkers.push(marker)
    }
}


function onSetCurrLoc() {
    event.stopPropagation();
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return
    } else setUserLoc()
}


function onAddMarker(location, map) {
    var elModal = document.querySelector('.modal');
    var elSubmit = document.querySelector('.done');
    elModal.style.display = 'block';
    var elName = document.querySelector('.name')
    elSubmit.onclick = function () { 
        elModal.style.display = 'none';
        if(elName.value === '') return
        createMarker(location, elName.value, map);
        elName.value = ''
    };
    
}

function handleLocationError(error) {
    var locationError = document.getElementById('locationError');

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function renderMarkers() {
    let elMarkers = document.querySelector('.markers');
    let markers = getMarkers();
    let strHTML = markers.map((marker) => {
        return `<li onclick="onMoveToMarker(${marker.id})">${marker.name} <i class="far fa-trash-alt" onclick="onDeleteMarker(${marker.id})"></i></li>`
    });
    elMarkers.innerHTML = strHTML.join('');
}

function onMoveToMarker(markerId) {
    var markers = getMarkers()
    var marker = markers.find(marker => marker.id === markerId)
    setMapCenter(marker.position);
}

function onDeleteMarker(markerId) {
    event.stopPropagation();
    deleteMarker(markerId);
    renderMarkers();
}

function onMarkerClick(markerId) {
    var marker = findMarkerById(markerId)
    setMapCenter(marker.lat, marker.lng)
}





function onToggleMarkers() {
    var elBtn = document.querySelector('.toggle-all-btn')
    if (elBtn.innerText === 'Hide Markers') {
        hideMarkers()
        elBtn.innerText = 'Show Markers'
    }
    else {
        showMarkers()
        elBtn.innerText = 'Hide Markers'
    }

}
