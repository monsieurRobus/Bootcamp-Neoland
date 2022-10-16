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