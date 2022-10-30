let diario = []
const urlDiario = 'http://localhost:3000/diary'
let contenidoDiario = document.querySelector('#contenido-diario')
console.log(contenidoDiario)


const escribeDiario = (d) => {

    
    diario=d.sort((a,b) =>ordenaPorFecha(a.date,b.date)) // Ordenamos la fecha
    console.log(diario)
    for (pagina of diario)    
        contenidoDiario.innerHTML+=`<div class="entrada"><div><h3>${pagina.title}</h3><button class="borrar">❌</button></div><h5>${pagina.date}</h5><p>${pagina.description}</p></div>`
    
    let botonesBorrar = document.querySelectorAll('.borrar')

    for (boton of botonesBorrar)
        boton.addEventListener('click',borrarEntrada)
    
}

const borrarEntrada = (e) => {


    e.target.parentElement.parentElement.remove() // Borramos al padre del padre, es decir, el contenedor de la entrada del diario
    

}

const getDiario = async (url) => 
{
    await fetch(url)
        .then(res => res.json())
        .then(data => escribeDiario(data))
        .catch("Acho, estas seguro que aquí hay algo? ")
}

const ordenaPorFecha = (a,b) => {

    // Hay que convertir cada fecha en un 'número entero' para que podamos compararlos entre sí

    const aux1 = parseInt                    //  El resultado de todo lo que haremos a continuación, hay que convertirlo 
    (a.split('-')               //  Separamos la fecha usando split
    .reduce((a,b)=>a+=b))       //  Puesto que split nos genera un array, lo unimos usando reduce
    
    const aux2 = parseInt(b.split('-').reduce((a,b)=>a+=b)) // Lo mismo pero en el auxiliar 2

    return aux1 - aux2

}

getDiario(urlDiario)

