mapboxgl.accessToken = "pk.eyJ1IjoibWNxdW8wMTEiLCJhIjoiY2xkOWtjMHptMDltcTNvcXA5ZzMwajRuNSJ9.WCNtQ1mI_VhpHUAcRPZj_A";



navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([44.986656, -93.258133]);
}

function setupMap(center) {
  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/carisseb/clddu22ol003r01qnzl3eh0yk",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-right");

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");

  // Use the Mapbox Geocoding API to reverse geocode the user's location
  // and get the address
  var geocodingURL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    center[0] +
    "," +
    center[1] +
    ".json?types=address&access_token=" +
    mapboxgl.accessToken;

  fetch(geocodingURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var address = data.features[0].place_name;
      // Use the Mapbox Places API to search for nearby grocery stores
      var placesURL =
        "https://api.mapbox.com/places/v1/search?types=grocery_or_supermarket&proximity=" +
        center[0] +
        "," +
        center[1] +
        "&access_token=" +
        mapboxgl.accessToken;
      fetch(placesURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // Display the closest grocery stores to the user's location on the map
          for (var i = 0; i < data.features.length; i++) {
            var store = data.features[i];
            var marker = new mapboxgl.Marker()
              .setLngLat([
                store.geometry.coordinates[0],
                store.geometry.coordinates[1],
              ])
              .addTo(map);
          }
        });
    });

    
}
