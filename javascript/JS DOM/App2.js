// Iteracion 2
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divP = document.createElement("div");
let p = document.createElement("p");
divP.appendChild(p);
document.body.appendChild(divP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let div6p = document.createElement("div");
    for (let i = 0; i < 6; i++) {
    div6p.appendChild(document.createElement("p"));
}
document.body.appendChild(div6p);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let divp2 = document.createElement("div");
let p2 = document.createElement("p");
let texto = document.createTextNode("Soy dinámico!"); // Duda, que es mejor, createTextNode o innerHTML?
p2.appendChild(texto);
divp2.appendChild(p2);
document.body.appendChild(divp2);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector(".fn-insert-here");
let texto2 = document.createTextNode("Wubba Lubba dub dub");
h2.appendChild(texto2);

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let ul = document.createElement("ul");
let li;
for (elemento of apps) {
    li = document.createElement("li");
    li.innerHTML = elemento;
    ul.appendChild(li);
}
document.body.appendChild(ul);
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let nodosBorrar = document.querySelectorAll(".fn-remove-me");
for (nodo of nodosBorrar) 
    nodo.remove();

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let nuevaP = document.createElement("p");
nuevaP.innerHTML = "Voy en medio!";
let insertar = document.querySelector("div.fn-insert-here"); // ¿entre que dos div?

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let nuevaP2;
let insertarAqui = document.querySelectorAll("div.fn-insert-here");
for (divInsert of insertarAqui){    
    nuevaP2 = document.createElement("p");
    nuevaP2.innerHTML = "Voy dentro!";
    console.log(divInsert)
    divInsert.appendChild(nuevaP2);
}
