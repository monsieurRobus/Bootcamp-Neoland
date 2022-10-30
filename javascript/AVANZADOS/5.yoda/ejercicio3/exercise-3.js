const listaPedidos = document.querySelector('#lista-pedidos')
const urlPedidos = `http://localhost:3000/orders`
const urlProductos = `http://localhost:3000/products`

const getPedidos = async (url) => {
    await fetch(url)
        .then(res => res.json())
        .then(data => pintaPedidos(data) )
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

const pintaPedidos = (pedidos) => {
    
    for(pedido of pedidos){
        let contenidoProducto =''
        listaPedidos.innerHTML+=`<article id="pedido${pedido.id}"><div><h2>Pedido nº ${pedido.id}</h2><h3>${pedido.date}</h3></div><div class="contenido-pedido">`
        
        for(producto of pedido.products){       
            listaPedidos.innerHTML+=`<div><h4>Producto:${getProducto(urlProductos+'/'+producto.productId).name}</h4></div>`
        }
        listaPedidos.innerHTML+=`</div></article>`
    }
}

getPedidos(urlPedidos)
