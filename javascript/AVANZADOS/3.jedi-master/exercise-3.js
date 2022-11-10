

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const ul = document.createElement('ul')
const printHere = document.querySelector('[data-function="printHere"]')
printHere.appendChild(ul)

for (album of albums)
    ul.innerHTML+=`<li>${album}</li>`