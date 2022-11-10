const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];



// USANDO FOROF
let sellCount =0;

for (product of products)
    sellCount+=product.sellCount

console.log(sellCount)

// USANDO MAP.REDUCE ( primero descuartizo  ಠ╭╮ಠ y después sumo)
let sellCount2 = products.map(producto => producto.sellCount).reduce((suma,precio) => suma+=precio)

console.log(sellCount2)
