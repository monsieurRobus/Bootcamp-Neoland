const iterations = 10;
const numbers = [];

for (let i = 0; i < iterations; i++) {
  const number = 1 + Math.floor(Math.random() * 6);
  numbers.push(number);
  if (number === 6) {
    console.log("ERROR");
    break;
  }
}

console.log(numbers);


// Control de errores

try {

        console.log('Inicio de ejecuciones try');  // (1) <--
    
        lalala; // error, variable no está definida!
    
        console.log('Fin de try (nunca alcanzado)');  // (2)
    
    } catch (err) {
    
        console.log(`¡Un error ha ocurrido!`); // (3) <--
}

console.log('hola')

let json = '{ "name":"Carlos","age": 30 }'; // dato incompleto

try {

    let user = JSON.parse(json); // <-- sin errores

    if(!user.name) 
        throw new SyntaxError("Dato incompleto!")

    console.log( user.name ); // sin nombre!

} catch (err) {
    console.log( "Error en el JSON: " + err.message );
}
finally {
    console.log("Ea, pues nada uwu")
}