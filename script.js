let listaProductos = [
    {id:1, nombre:"taza", precio:20 + " soles" ,stock:3 , categoria:"cocina", rutaImagen:"taza.jpeg"},
    {id:2, nombre:"gorra", precio:15 + " soles" ,stock:5, categoria:"ropa", rutaImagen:"gorra.jpg"},
    {id:3, nombre:"polo", precio:50 + " soles" ,stock:8, categoria:"ropa", rutaImagen:"polo.png"},
    {id:4, nombre:"polera", precio:80 + " soles" ,stock:1, categoria:"ropa", rutaImagen:"polera.jpeg"} ,
    {id:5, nombre:"lapicero", precio:10 + " soles" ,stock:4, categoria:"utiles", rutaImagen:"lapicero.jpeg"}
]


function crearTarjetasDeProductos(productos){
    let contenedorProductos = document.getElementById("contenedorProductos")

    productos.forEach(producto =>{
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src =./images/${producto.rutaImagen}/>
            <h4>Precio: ${producto.precio}</h4>
            `
            contenedorProductos.appendChild(tarjetaProducto)
    } );
}

crearTarjetasDeProductos(listaProductos)