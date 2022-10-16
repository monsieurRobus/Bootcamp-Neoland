// #ITERACION 1
// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.

// 1.1 Ejecuta esta función sin pasar ningún parametro
// 1.2 Ejecuta esta función pasando un solo parametro
// 1.3 Ejecuta esta función pasando dos parametros


const funcionFlecha = (a=10,b=5) => a+b
console.log(funcionFlecha())
console.log(funcionFlecha(3))
console.log(funcionFlecha(3,2))


// #ITERACION 2
// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title,gender,year} = game

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1,fruit2,fruit3] = fruits;
console.log(`${fruit1} ${fruit2} ${fruit3}`)

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.



const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name,race} = animalFunction()
console.log(`${name} y su raza es ${race}`)


// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.

const car = {name1: 'Mazda 6', itv1: [2015, 2011, 2020] }

const {name1,itv1} = car

// Para arreglar el orden de los años, ordenamos los mismos en el array

itv1.sort()

// Y ahora deconstruimos el array
const [anio1,anio2,anio3] = itv1


console.log(`${anio1} ${anio2} ${anio3}`)


// #ITERACION 3

// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const copiaList = [...pointsList]

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiaToy = {...toy}

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const pointLists = [...pointsList1,...pointsList2]

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toyFinal = {...toy1,toyUpdate};

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copiaColors= [...colors]
copiaColors.splice(1,1)


// ITERACION #4

// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users1.map(usuario=>usuario.name)


// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names2 = users2.map(usuario => {

    if(usuario.name.toLowerCase()[0]==='a')
        usuario.name="Anacleto"

    return usuario

})

console.log(names2)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitas = cities.map(ciudad => {

    return ciudad =  (ciudad.isVisited) ? (ciudad.name+=' (Visitado)') :  ciudad.name;

})

console.log(visitas)


// ITERACION #5 

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayoresDeEdad = ages.filter(edad => edad>18)
console.log(mayoresDeEdad)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const edadesPar = ages2.filter(edad => (edad % 2 == 0))
console.log(edadesPar)


// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lol = streamers.filter(streamer => (streamer.gameMorePlayed==='League of Legends'))
console.log(lol);


// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamurs = streamers2.filter(streamer => streamer.name.includes('u'))
console.log(streamurs)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.

const streamerLegend = streamers2   .filter(streamer =>  streamer.gameMorePlayed.includes('Legends'))
                                    .map(streamer => 
                                        { 
                                            if(streamer.age > 35) 
                                                streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()

                                            return streamer

                                        })

console.log(streamerLegend)

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

// MIRAR ARCHIVO ITERACION5.6.js Y EL INDEX.HTML


// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
//              <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//              <meta http-equiv="X-UA-Compatible" content="ie=edge">
//              <title>Document</title>
// </head>
// <body>
//   <input type="text" data-function="toFilterStreamers"/>
//   <button data-function="toShowFilterStreamers">Filter</button>
// </body>
// </html>


// ITERACIÓN #6

// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

console.log(numbers.find(number => number === 100))

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

console.log(movies.find(pelicula => pelicula.date === 2010))


// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
// lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
const cucushumushu = aliens.find(alien => alien.name==="Cucushumushu")
const cucushumushuMutation = mutations.find(mutacion => mutacion.name ="Porompompero")
const cucushumushuComplete = {...cucushumushu, mutation:cucushumushuMutation}

console.log(cucushumushuComplete)