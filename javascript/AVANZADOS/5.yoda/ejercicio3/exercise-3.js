const listaPedidos = document.querySelector('#lista-pedidos')
const urlPedidos = `http://localhost:3000/orders`
const urlProductos = `http://localhost:3000/products`

const getPedidos = async (url) => {
    await fetch(url)
        .then(res => res.json())
        .then(data => 
            {
                
                pintaPedidos(data)
            } )
        .catch('Estás mas perdido que un pulpo en un garaje.')
}

const getProducto = async (url) => {
    let producto;
        await fetch(url)
            .then(res => res.json())
            .then(res => producto = res)
            .catch('Este producto no existe.')
        
    return producto

}

// Función ORDENA POR FECHA del ejercicio2, con el cambio de fecha
const ordenaPorFecha = (a,b) => { 

    // Hay que convertir cada fecha en un 'número entero' para que podamos compararlos entre sí

    const aux1 = parseInt                    //  El resultado de todo lo que haremos a continuación, hay que convertirlo 
    (a.split('-')               //  Separamos la fecha usando split
    .reduce((a,b)=>a+=b))       //  Puesto que split nos genera un array, lo unimos usando reduce
    
    const aux2 = parseInt(b.split('-').reduce((a,b)=>a+=b)) // Lo mismo pero en el auxiliar 2

    return aux2 - aux1

}

const pintaPedidos = async (pedidos) => {
    let product;
    
    pedidos.sort((a,b)=>ordenaPorFecha(a.date,b.date)) // Ordenamos por fecha los 

    for(pedido of pedidos){
        listaPedidos.innerHTML+=`<article class="pedido" id="pedido${pedido.id}" >
                                    <div class="datos">
                                        <h2>Pedido nº ${pedido.id}</h2>
                                        <h3>${pedido.date}</h3>
                                    </div>
                                    <div id="contenido-pedido${pedido.id}" class="contenido-pedido"><ul>`
        

        
        for(producto of pedido.products){ 
            contenidoPedido = document.querySelector(`#contenido-pedido${pedido.id}`)
            product = await getProducto(urlProductos+'/'+producto.productId) // hacemos la consulta a la api de productos
            contenidoPedido.innerHTML+=`<li class="producto">Producto:${product.name} - Cantidad: ${producto.quantity}</li>`
        }
        listaPedidos.innerHTML+=`</ul></div></article>`
    }
}

getPedidos(urlPedidos)
