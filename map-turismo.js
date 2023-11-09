import data from "./data-turismo.js"


let map = L.map('map-turismo').setView([-24.788850, -65.405439], 15);
let layerGroup = L.layerGroup().addTo(map);

function showTextAndMap(e){
   
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
        }).addTo(map);
    let category    
    if (e == "salta-centro"){
        category = e
    } else {
        category = e.target.id
        layerGroup.clearLayers()
        document.getElementById("zone-description").innerHTML = data[category].description
    }
    let dataset = data[category].data    
    map.setView([data[category].center[0], data[category].center[1]], data[category].center[2]);
    for (let element of dataset){
    let marker = L.marker([element.lat, element.long]).addTo(layerGroup)
    marker.bindPopup(`<h5><b>${element.name}</b></h5><hr><p>${element.description}</p><a href=${element.url} target=”_blank”><b>Ver más</b></a>`)
        
    }
        
}

showTextAndMap("salta-centro")

let buttons = document.getElementsByClassName("turismo-buttons")
for (let button of buttons){
    button.addEventListener("click", showTextAndMap)
}