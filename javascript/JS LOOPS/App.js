// Iteracion #1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i=0;i<products.length;i++) {
    if (products[i].includes("Camiseta"))
        console.log(products[i])
}

// Iteracion #~2

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

// Son tres señales, por lo que realizo una tabla de verdad para
// sacar la función de la tabla de verdad y la expresión de miniterminos:
// 
// A B C | F
// 0 0 0   0
// 0 0 1   0
// 0 1 0   0
// 0 1 1   1
// 1 0 0   0
// 1 0 1   1
// 1 1 0   1
// 1 1 1   1
// 
// La función simple sería F = a'bc + ab'c + abc' + abc, 
// simplificando sería: F = bc + ac + ab

alumns.forEach(alumno => {
    if (alumno.T2 && alumno.T3 || alumno.T1 && alumno.T3 || alumno.T1 && alumno.T2)
        alumno.isApproved=true;
    else 
        alumno.isApproved=false;
})
    // Aplicamos la logica calculada más arriba
    
    
console.log(alumns)