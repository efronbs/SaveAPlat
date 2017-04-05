var allAddresses = [];
var _map = null;
var _geocoder = null;

function populateAddresses(initAddresses) {
  allAddresses = initAddresses;
}

function setLocation(address) {
  _geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      _map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function addMarker(address) {
  _geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      var marker = new google.maps.Marker({
        map: _map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  _map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru
  });
  _geocoder = new google.maps.Geocoder();

  while (allAddresses.length == 0);
  for (address in allAddresses) {
    addMarker(allAddresses[address], _geocoder, _map);
  }
  setLocation(allAddresses[0], _geocoder, _map);
}
