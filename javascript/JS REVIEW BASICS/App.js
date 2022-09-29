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