mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinatesArray, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 7 // starting zoom
});


console.log(coordinatesArray);

if (Array.isArray(coordinatesArray) && coordinatesArray.length === 2) {
const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(coordinatesArray)
    .setPopup( new mapboxgl.Popup({offset: 25})
    .setHTML("<h6> Listing Location! </h6>"))
    .addTo(map);
} else {
    console.error("Coordinates are not in the correct format:", coordinatesArray);
}


// const testCoordinates = [77.209, 28.6139];
// const marker = new mapboxgl.Marker()
//     .setLngLat(testCoordinates)
//     .addTo(map);