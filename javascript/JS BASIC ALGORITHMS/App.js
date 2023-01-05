// ITERACION #1 VARIABLES

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5, y = 10;
z = h+y;

// Iteración #2

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

// 1.2
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`)


// 1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

// 1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice+=globalBasePrice;
car2.finalPrice+=globalBasePrice;


// Iteración 3
// 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
console.log(10*5);
// 1.2 Divide 10 por 2 y muestra el resultado en un console.
console.log(10/2);
// 1.3 Muestra mediante un console el resto de dividir 15 por 9.
console.log(10%5);
// 1.4 Usa el correcto operador de asignación que resultará en o = 15, 
// teniendo dos variables p = 10 y j = 5.
let p = 10;
let j = 5;
let o = p + j;

// 1.5 Usa el correcto operador de asignación que resultará en i = 50,
// teniendo dos variables c = 10 y m = 5.
let c = 10;
let m = 5;
let i = c * j;

// Iteración 4
// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

avengers[0]="IRONMAN";
console.log(avengers.length);


// Iteración 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1 === 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1!=number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3!=number1) {
    console.log("number3 es distinto number1");
}

if (number3*5===number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3*5 === number1 && number1*2 === number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 === number1 || number1/5 === number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


// Iteración 6

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for(let i=0;i<=9;i++)
    console.log(i);

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.


for(let i=0;i<=9;i++)
    if(i%2===0) 
        console.log(i);


// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
// y cambia el mensaje en la décima vuelta a 'Dormido!'.

for(let i=0;i<=9;i++)
    console.log("Intentando dormir 🐑");
console.log("Dormido!");


