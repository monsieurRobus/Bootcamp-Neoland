// MEDIA
const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];

let numProductos = products.length

const media = products.map(producto => producto.sellCount).reduce((suma,precio)=>suma+=precio)/numProductos

