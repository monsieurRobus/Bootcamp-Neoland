const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const ul = document.createElement('ul');

for ( album of albums)
    ul.innerHTML+=`<li>${album}</li>`

document.body.appendChild(ul)