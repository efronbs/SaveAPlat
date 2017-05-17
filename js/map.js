var allAddresses = [];
var _map = null;
var _geocoder = null;
var _user_loc = null;
var markers = [];
var _directionsService;
var _directionsDisplay;

function populateAddresses(initAddresses) {
  allAddresses = initAddresses;
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

function setLocation(address) {
  _geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      clearMarkers();
      addMarker(address);
      _map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function setPathToFood(address) {
  _geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      clearMarkers();
      addMarker(address);
      markers.push(new google.maps.Marker({
        map: _map,
        position: _user_loc
      }));
      _directionsService.route({
        origin: _user_loc,
        destination: address,
        travelMode: 'WALKING'
      }, function(response, status) {
        if (status === 'OK') {
          _directionsDisplay.setDirections(response);
          clearMarkers();
        } else {
          console.log("SETTING DIRECTIONS FAILED " + status);
        }
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function addMarker(address) {
  if (address === 'Olin Hall') {
    address = address + ', Rose Hulman Institute Road, Terre Haute, IN';
  }
  console.log(address);
  _geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      var marker = new google.maps.Marker({
        map: _map,
        position: results[0].geometry.location
      });
      markers.push(marker);

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function initMap() {
  _map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
  });
  _geocoder = new google.maps.Geocoder();
  _directionsService = new google.maps.DirectionsService;
  _directionsDisplay = new google.maps.DirectionsRenderer;
  _directionsDisplay.setMap(_map);

  while (allAddresses.length == 0);
  setLocation('Hulman Memorial Union, Terre Haute, IN');
  clearMarkers();
  setUserLocation();
}

function setUserLocation() {
  // console.log(navigator.geolocation);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      _user_loc = pos;
    });
  }
}
