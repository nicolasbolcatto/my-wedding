let map = L.map('map').setView([-24.713417110864725, -65.4899437764219], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([-24.713417110864725, -65.4899437764219]).addTo(map);

marker.bindPopup("<b>Holis!</b><br>Soy la Finca Los Maitines.").openPopup();