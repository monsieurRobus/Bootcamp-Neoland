const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

const menoresEdad = users.filter(user => user.years < 18)

console.log('Usuarios menores de edad: ',menoresEdad)

const mayoresEdad = users.filter(user => user.years >=18)

console.log(`Usuarios mayores de edad: ${mayoresEdad}`)