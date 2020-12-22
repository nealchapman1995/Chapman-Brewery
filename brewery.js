// Initialize and add the map
function initMap() {
  // The location of Uluru
  const capHill = { lat: 39.733653, lng: -104.979978 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: capHill,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: capHill,
    map: map,
  });
}