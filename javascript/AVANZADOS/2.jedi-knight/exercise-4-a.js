const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

const findArrayIndex = (array, text) => {

    const palabra = array.filter(word => word.toLowerCase() === text.toLowerCase())
    
    return(palabra.length<1) ? undefined : array.indexOf(palabra[0]) ;
    
    



}

console.log(findArrayIndex(mainCharacters,"Anakin"))
console.log(findArrayIndex(mainCharacters,"Goku"))
console.log(findArrayIndex(mainCharacters,"Obi-wan"))
console.log(findArrayIndex(mainCharacters,"Alberto"))
console.log(findArrayIndex(mainCharacters,"Pedro"))
console.log(findArrayIndex(mainCharacters,"Antonio"))
console.log(findArrayIndex(mainCharacters,"Rey"))