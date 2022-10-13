// GAME WARS 1
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



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