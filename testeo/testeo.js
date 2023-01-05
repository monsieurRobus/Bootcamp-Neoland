const officers = [
    {id: 1, name: "Carlos Dïaz"},
    {id: 2, name: "Leo Díaz"},
    {id: 3, name: "Nico Díaz"},
    {id:4, name:"Miriam Alfaro"}
]

const seleccionaNombres = officers.map( (persona) => ({
    identificador: persona.id,
    nombre: persona.name
})

)
console.log(seleccionaNombres)


// Objecty destructuring

const alumno = {
    name: "Fulano",
    age: 34,
    location: "Guadalajara",
    hobbies: {
        sport: "not now",
        videgoames: "yes"
    }
}

const {name,villamalea} = alumno;
console.log(villamalea)