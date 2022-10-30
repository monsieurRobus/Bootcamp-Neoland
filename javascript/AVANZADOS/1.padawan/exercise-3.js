const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
];


let pelisPequenias = []
let pelisMedianas = []
let pelisGrandes = []

for (movie of movies)
    (movie.durationInMinutes > 200) ? pelisGrandes.push(movie) : (movie.durationInMinutes>100) ? pelisMedianas.push(movie) : pelisPequenias(movie)
    
console.log(pelisGrandes,pelisMedianas,pelisPequenias)

