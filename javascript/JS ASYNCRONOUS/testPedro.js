var officers = [
    { id: 20, name: "Captain Piett" },
    { id: 24, name: "General Veers" },
    { id: 56, name: "Admiral Ozzel" },
    { id: 88, name: "Commander Jerjerrod" },
];



const officersId = officers.map(officers => officers.id) // Descuartizamos el objeto :O

const officers20 = officers.filter(officer => officer.id == 20) // Solo cogemos el que cumpla una condición uwu

console.log(officers20)



