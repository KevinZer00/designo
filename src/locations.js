var map1 = L.map('mapid1').setView([43.644210366657944, -79.39458768305077], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map1);
var marker1 = L.marker([43.644210366657944, -79.39458768305077]).addTo(map1);

var map2 = L.map('mapid2').setView([-30.32913918171873, 149.78829354107768], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map2);
var marker2 = L.marker([-30.32913918171873, 149.78829354107768]).addTo(map2);

var map3 = L.map('mapid3').setView([51.732536249327815, -3.86192136645621], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map3);
var marker3 = L.marker([51.732536249327815, -3.86192136645621]).addTo(map3);



  