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
let contador = 0;
for (usuario of users)  
    for (sonido in usuario.favoritesSounds)
        media=usuario.favoritesSounds[sonido].volume;
        contador+=1;

media=media/contador;
console.log(media)

// Iteracion #3
// sonidosFavoritos será un array de objetos con dos propiedades, 
//
//  [ {
//    name: "",
//    contador: ""
//  } ]
//
let contarSonidos = 0;
const users2 = [
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




console.log("Iteracion#3")
// Almaceno en un array los diferentes sonidos favoritos que tenemos e inicializamos el array contador

let sonidosFavoritos=[]
let sonidosFavoritosArray = []
let contadorFavoritosArray = []

for (user of users2)
    for (sonido in user.favoritesSounds)
        if(!sonidosFavoritosArray.includes(sonido))
            {
                sonidosFavoritosArray.push(sonido)
                contadorFavoritosArray.push(0)
            } 

// Vamos contando el numero de veces que aparecen en los usuarios favoritos  
for (user of users2)
    for (sonido in user.favoritesSounds)
        if(sonidosFavoritosArray.includes(sonido))
            contadorFavoritosArray[sonidosFavoritosArray.indexOf(sonido)]+=1;

for (sonFav of sonidosFavoritosArray)
    sonidosFavoritos.push({name:sonFav,cantidad:contadorFavoritosArray[sonidosFavoritosArray.indexOf(sonFav)]})
console.log("Lista de sonidos favoritos:")
console.log(sonidosFavoritos)
    

// Iteración #4
console.log("Iteracion#4")
let arrayEjemplo = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array,text) {
    if(array.includes(text))
        return array.indexOf(text)
    else   
        return "No hay coincidencias"
}

console.log(findArrayIndex(arrayEjemplo,'Salamandra'))

// Iteracion #5
console.log("Iteracion#5")

let carasDado = 21
function rollDice(caras) {
    return Math.floor(Math.random()*caras)+1
}

console.log(`Tiramos un dado de ${carasDado} caras y el resultado es ${rollDice(carasDado)}`)

// Iteracion #6
console.log("Iteracion#6")

function swap(array,index1,index2){
    // Inicio del array: 0
    // Fin del array: longitud-1

    if(index1<0)
        throw "Index1 es menor que 0, revise el valor"

    if(index2>array.length-1)
        throw "Index2 es mayor que la longitud del array, revise el valor"   

    let aux = arrayEjemplo[index1]
    arrayEjemplo[index1]=arrayEjemplo[index2]
    arrayEjemplo[index2]=aux

    return arrayEjemplo
    
}

console.log(swap(arrayEjemplo,1,2))
