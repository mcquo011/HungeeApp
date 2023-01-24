mapboxgl.accessToken =
  "pk.eyJ1IjoibWNxdW8wMTEiLCJhIjoiY2xkOWtjMHptMDltcTNvcXA5ZzMwajRuNSJ9.WCNtQ1mI_VhpHUAcRPZj_A";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position) {
console.log(position)
setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([44.986656, -93.258133]);
}

function setupMap(center) {
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: center,
  zoom: 15
}); 

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
});

map.addControl(directions, "top-left");

}

  
