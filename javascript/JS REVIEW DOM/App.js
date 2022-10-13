// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];



const ul = document.createElement("ul")
    for (country of countries)
        ul.innerHTML+=`<li>${country}<button class="elimina-elemento">Borrar</button></li>`
document.body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let elementoABorrar = document.querySelector('.fn-remove-me')
elementoABorrar.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul2 = document.createElement("ul")
    for (car of cars)
        ul2.innerHTML+=`<li>${car}</li>
        `
const divPrintHere = document.querySelector("[data-function='printHere']")
divPrintHere.appendChild(ul2)

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const listaPaises = document.createElement("li")
listaPaises.id="listaPaises"
for (country of countries2)
    listaPaises.innerHTML+=`<div><h4>${country.title}</h4><img src="${country.imgUrl}"><button class="elimina-elemento">X</button></div>`

document.body.appendChild(listaPaises)

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const eliminaUltimo = (e) => {
    let listaElementos= [...document.querySelector("#listaPaises").childNodes]
    if (listaElementos.length>0)
        listaElementos[listaElementos.length-1].remove()
}

const buttonElimina = document.createElement('button')
buttonElimina.innerHTML+="Elimina botón"
buttonElimina.addEventListener("click",eliminaUltimo)
document.body.appendChild(buttonElimina)



// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

const eliminaElemento = (e) => {
    e.target.parentElement.remove()
}

let listaBotones = document.querySelectorAll('.elimina-elemento')
for (boton of listaBotones)
    boton.addEventListener("click",eliminaElemento)


