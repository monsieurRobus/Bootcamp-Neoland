// En base al siguiente javascript, modifícalo para crea una función para que podamos enviarle como parametro el precio y la función nos calcule y retorne el precio con iva + los gastos de envio (4.95). De esta forma estaremos optimizando el codigo y reutilizandolo.

const precioFinal = (precioInicial) => {

    return precioInicial * 1.21 + 4.95


}

console.log(precioFinal(10))