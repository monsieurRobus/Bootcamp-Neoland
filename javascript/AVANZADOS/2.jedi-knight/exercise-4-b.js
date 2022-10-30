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

const removeItem = (array,text) => {

    const index = findArrayIndex(array,text)
    if(typeof(index)!=='undefined')
        array.splice(index,1)
    else   
        console.log(`El valor ${text} no se encuentra en el array, devolviendo original.`)
    
    return array

}

console.log(removeItem(mainCharacters,"Rey"))
console.log(removeItem(mainCharacters,"Rey"))
console.log(removeItem(mainCharacters,"Chewbacca"))