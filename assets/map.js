

mapboxgl.accessToken = "";



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

    
}
