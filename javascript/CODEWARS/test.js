function duplicateEncode(word){
    word = word.toLowerCase()
    let repetidas = {}  // Creo un objeto que tendrá los diferentes caracteres y el numero de repeticiones
    let resultado = '';
    for (let character in word)    // Recorremos cada uno de los caracteres de la palabra
        if(word[character] in repetidas)    // si encontramos el caracter en el objeto de caracteres repetidos, aumentamos su contador 
            repetidas[word[character]]+=1;
        else                                // si no existe en el objeto de caracteres repetidos, lo inicializamos
            repetidas[word[character]]=1;

    for (let character of word)     // Lo volvemos a recorrer, pero esta vez comparandolo con el objeto. 
        if (repetidas[character]>1)
            resultado+=')'            
        else   
            resultado+='('


        return resultado;
}



console.log(duplicateEncode('hLla'))