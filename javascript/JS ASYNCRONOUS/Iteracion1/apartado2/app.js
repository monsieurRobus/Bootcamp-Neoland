// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';

const botonConsulta = document.querySelector('#consulta-api')

const consultaApi = () => {

    fetch('https://api.agify.io?name=michael')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))


}

botonConsulta.addEventListener("click",consultaApi)



