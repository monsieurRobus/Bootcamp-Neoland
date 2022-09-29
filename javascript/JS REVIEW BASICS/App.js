// Iteracion #1

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

// Version 1 usando arrays
let categorias = [];

for(peli of movies)    
    for (categoria of peli.categories)        
            if(!categorias.includes(categoria))
                categorias.push(categoria)

console.log(categorias)
        
        
// Version 2 usando SET

let catAux = []
for(peli of movies)
    for (categoria of peli.categories)
        catAux.push(categoria)    

let categorias2 = new Set(catAux);

console.log(categorias2)


// Iteracion #2

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let media = 0;
let sonidos = 0;
for (usuario of users)  
    for (sonido in usuario.favoritesSounds)
        media=usuario.favoritesSounds[sonido].volume;
        sonidos+=1;

media=media/sonidos;
console.log(media)