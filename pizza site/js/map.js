let map;
let marker;
const pizzeria = {lat: 54.423933, lng: 18.600443};

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: pizzeria,
    zoom: 16,
    });
    marker = new google.maps.Marker ({
        position: pizzeria,
        map: map,
    });
}