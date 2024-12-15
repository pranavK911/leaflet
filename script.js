// console.log("hello");
var map = L.map('map').setView([25.771103, 87.482185], 5.2);
const tileLaye='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

const tile=L.tileLayer(tileLaye);
tile.addTo(map)

// const circle=L.circle([25.771103, 87.482185],{radius:300,color:'black'})

// circle.addTo(map)

// var bounds = [[25.490593, 85.039695], [25.646448, 85.296013]];
// L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);

// const icon=L.icon({
//     iconUrl:'icon.png',
//     iconSize:[90,80]
// })

// const marker= L.marker([25.771103, 87.482185],{})
// marker.bindPopup('<h1>Pranav</h1>')
// marker.addTo(map)
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

