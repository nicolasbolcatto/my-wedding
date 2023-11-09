let map = L.map('map-comer-beber').setView([-24.78297138018254, -65.42513896250249], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap'
}).addTo(map);

data = [
    {name: "Doña Salta", lat: -24.790488614432157, long: -65.40843052825818, description: "Las mejores empanadas", url:"https://maps.app.goo.gl/sJtK8xmsNQJgfNX98"},
    {name: "El Charrúa", lat:-24.789895405050498, long: -65.40585102802712, description: "Odiamos la expresión “cocina honesta”, no obstante, en este caso, le queda pintada. No existe un solo plato malo. Cada bocado te te teletransporta a los 80/90s. Las empanadas son una carta de amor, el lomo a la pimienta con papas a la crema te da ganas de casarte con él. Las porciones son ENORMES! Sin embargo, recuerden que en salta las empanadas son más pequeñas que las que solemos comer en Rosario, Santa Fe y Buenos Aires. No es necesario reservar, el sitio es enorme y suelen tener lugar.", url: "https://maps.app.goo.gl/vcasydHvBdmN5smx7" },
    {name: "La Casona del Molino", lat: -24.787591009310937, long: -65.43709100150623, description: "Que decir de la Casona", url: "https://maps.app.goo.gl/WzS9g3JxWUVJArGU8"},
    {name: "Don Sanca", lat: -24.729366509009814, long: -65.49504000549648, description: "De lo más típico y tradicional de San Lorenzo. Empanadas divinas y mucha comida ochennoventosa. Les hará felices.",url:"https://maps.app.goo.gl/Cv6oVmXX5Apmv7289"},
    {name: "El baqueano", lat: -24.789165696169775, long: -65.39298741978551, description: "Ubicado en la cima del cerro San Bernando, tiene la mejor vista de la ciudad. Es posible tomar el teleférico desde el Parque San Martín, recorrer un poco, y a las 20 Hs. Ingresar al restaurante. Su cocina reversiona platos e ingredientes regionales tradicionales, dando lugar a platos exclusivos. Hay dos opciones: una para pudientes e irresponsables, que consiste en un menú de pasos y degustación de vinos; y otra para quienes tengan deseen conocer el lugar y degustar opciones más frugales, ubicándose en la barra. Es necesario reservar con anticipación.",  url: "https://maps.app.goo.gl/ahQeis66dRVavDCJ8"},
    {name: "Bodegón San Lorenzo", lat: -24.746730293670737, long: -65.48456296211536, description: "Las mejores empanadas del mundo, afirmado por Cande Maidana Cornejo, nuestra guía espiritual salteña en este evento. Una maravilla y súper económico. Es posible que tengan que hacer fila, pero vale la pena", url: "https://maps.app.goo.gl/2VKPjJ8eweHZCnqZ6"},
    {name: "Pacha Wine", lat: -24.789843262506203, long: -65.40913391954756, description: "Vino", url: "https://maps.app.goo.gl/zoo2pETGrdqAdXWSA"}
    

]

for (let element of data){
    let marker = L.marker([element.lat, element.long]).addTo(map)
    marker.bindPopup(`<b>${element.name}</b><hr><p>${element.description}</p><p><br><a target="_blank" href="${element.url}">Ver más</a>`)
}