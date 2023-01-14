let Listaproductos = [
    {
        id: 1,
        name: "carpa",
        category: "acampada",
        price: 100,
        stock: 10
    },

    {
        id: 2,
        name: "saco de dormir",
        category: "acampada",
        price: 50,
        stock: 20
    },

    {
        id: 3,
        name: "mochila",
        category: "senderismo",
        price: 75,
        stock: 15
    },

    {
        id: 4,
        name: "botas de senderismo",
        category: "senderismo",
        price: 130,
        stock: 5
    },

    {
        id: 5, name: "kayak",
        category: "deportes acuaticos",
        price: 400,
        stock: 2
    },

    {
        id: 6,
        name: "chaleco salvavidas",
        category: "deportes acuaticos",
        price: 25,
        stock: 20
    },

    {
        id: 7,
        name: "bicicleta de montaña",
        category: "ciclismo",
        price: 600,
        stock: 10
    },

    {
        id: 8,
        name: "casco",
        category: "ciclismo",
        price: 50,
        stock: 15
    },

    {
        id: 9,
        name: "arnes de escalada",
        category: "escalada",
        price: 75,
        stock: 8
    },

    {
        id: 10,
        name: "zapatos de escalada",
        category: "escalada",
        price: 150,
        stock: 12
    }
];



// en este primer prompt se le pide al usuario que instruzca el nombre de la categoria que quiere abrir para ver los productos que contiene
// en caso de querer ver toda la lista de los productos debe ingresar la palabra "todos"



let categoriaSeleccionada = prompt("¿Qué categoría de productos de aventura al aire libre te gustaría ver? (acampada, senderismo, deportes acuáticos, ciclismo, escalada) o escribir 'todos' para ver todos los productos.");

let productosSeleccionados;
if(categoriaSeleccionada === 'todos'){
    productosSeleccionados = Listaproductos
}else{
    productosSeleccionados = Listaproductos.filter(producto => producto.category === categoriaSeleccionada);
}

if(productosSeleccionados.length>0){
    let soloNombreProductos = productosSeleccionados.map(producto => `${producto.name} $${producto.price}`);
    alert(`Estos son los productos disponibles en la categoría ${categoriaSeleccionada}: ${soloNombreProductos.join(', ')}`);
}else{
    alert(`La categoría ${categoriaSeleccionada} no existe o no esta disponible en la tienda`)
}


// cuando sale de ese prompt se le va a mostrar un menu en donde se le va a consultar que productos quiere comprar
// estos van a tener asignado un numero cada uno
// para hacer la compra en este caso va a tener que ingresar el numero del producto dejar un espacio y seguido colocar la cantidad que quiere comprar
// ej:    numero de producto + [espacio] + cantidad que quiere => dar a aceptar
// volver a repetir esto para cada producto que quiera comprar
// para salir de este menu deberá ingresar el numero 0
// al final se mostraran los productos seleccionados y el total que suma dicha seleccion


let carrito = [];
let continuar = true;
let total = 0;
let soloNombreProductos = []

const mostrarResumen = () => {
    let mensaje = "Estos son los productos que has seleccionado: \n";
    for (let i = 0; i < carrito.length; i++) {
        const producto = carrito[i];
        mensaje += ` - ${producto.cantidad} x ${producto.name} - $${producto.price * producto.cantidad} \n`;
    }
    mensaje += `Total a pagar: $${total}`;
    alert(mensaje);
}
while(continuar){
    let productos = Listaproductos.map((producto,index)=>`${index+1} - ${producto.name} $${producto.price}`);
    let seleccion = prompt(`Selecciona los productos que deseas comprar ingresando su numero y luego la cantidad separado por un espacio. Oprime aceptar e ingresa el siguiente producto con su respectiva cantidad \nEj:  1 2 (carpa, cantida)\nIngresa 0 para salir \n${productos.join('\n')}`, "", "Compra de productos", "Aceptar");
    if(seleccion === '0'){
    continuar = false;
    }else{
    let [numProducto,cantidad] = seleccion.split(" ");
    cantidad = parseInt(cantidad);
    if(isNaN(cantidad)){
    alert('La cantidad ingresada no es valida');
    continue;
    }
    let producto = Listaproductos[numProducto-1];
    carrito.push({...producto, cantidad});
    total += producto.price * cantidad;
    soloNombreProductos.push(producto);
    }
    }
    if(!continuar){
    mostrarResumen();
    }