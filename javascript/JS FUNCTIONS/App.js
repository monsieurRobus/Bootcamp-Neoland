// Iteracion 1

function sum(numberOne, numberTwo) {
    if (numberOne>numberTwo)
        return numberOne
    else 
        return numberTwo
}

// Iteration 2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(a) {

    let palabraMasLarga='';

    for (let i=0;i<a.length;i++)
        if (a[i].length > palabraMasLarga.length)
            palabraMasLarga = a[i];
        
    return palabraMasLarga

}

// Iteration 3

//const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(a) {

    let suma = 0;

    for (let i=0;i<a.length;i++)
        suma+=a[i];

    return suma;
}

// Iterar 4

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(a) {

    let suma = 0;

    for (let i=0; i<a.length; i++)
        suma+=a[i];
    
    return suma/a.length;
}

// Iterar 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(a) {
    let suma = 0;

    for (let i=0;i<a.length;i++)
        if(typeof(a[i])==="number")
            suma+=a[i]
        else
            suma+=a[i].length
    
    return suma;

}


// Iterar 6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
    'pizza'
];


// Propongo dos soluciones:
//  Solución 1 // Usando un tipo SET

function removeDuplicates_1(a) {
    let arraySet = new Set(a);

    return Array.from(arraySet)

}

// Solución 2 // Comparador de strings

function removeDuplicates_2(a){
    let comparador = '';

    for (let i=0;i<a.length;i++) {
        comparador = a[i];
        for (let j= i+1;j<a.length;j++)
            if(comparador===a[j])
            {                
                console.log(a[j])
                a.splice(j,1);
            }
        }

    return a;
}


// Iterar 7

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(a,b) {
    for (let i=0;i<a.length;i++)
        {
            console.log(a[i]);
        if( b === a[i] )
            return [true,i];
        }       
        return false;
}

// Iteración 8

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(a) {
}