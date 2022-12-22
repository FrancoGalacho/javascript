class producto {
    alimentos (nombre , precio ){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}


const alimentos = [
    {nombre: "aceitunas", precio: "234"},
    {nombre: "harina", precio: "140"},
    {nombre: "cerveza", precio: "160"},
    {nombre: "gaseosa", precio: "320"},
    {nombre: "galletitas", precio: "150"},
];


let carrito = []

let seleccion = prompt ("Hola, desea comprar algun producto?")

while (seleccion != "si" && seleccion != "no") {
    alert ("por favor ingresa si o no")
    seleccion = prompt ("hola desea comprar algo si o no")
}

if (seleccion == "si") {
    alert ("estos son nuestros productos")
    let nuestrosAlimentos = alimentos.map ((alimentos) => alimentos.nombre + " " + alimentos.precio + "$" + " " );
    alert (nuestrosAlimentos.join ())
} else if (seleccion == "no") {
    alert ("gracias por ingresar, vuelva pronto")
}

while (seleccion != "no") {
    let producto = prompt ("agrega los productos a tu carrito")
    let precio = 0
    
    if (producto == "aceitunas" || producto == "harina" || producto == "cerveza" || producto == "gaseosa" || producto == "galletitas") {
        switch (producto) {
            case "aceitunas":
                precio = 234;
            break;
            case "harina":
                precio = 140;
            break;
            case "cerveza":
                precio = 160;
            break;
            case "gaseosa":
                precio = 320;
            break;
            case "galletitas":
                precio = 150;
            break;
        default:
            break;
        }
    

    let unidades = parseInt (prompt ("que cantidad de productos quiere comprar?"))

    carrito.push ({producto, unidades,precio})
    } else {
        alert (" no tenemos ese producto en stock ")
    }
    seleccion = prompt ("desea seguir comprando?")

    while (seleccion == "no") {
        alert ("gracias por su compra!!")
        carrito.forEach((carritoFinal) =>{
            alert (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.precio}` )
        })
        break;
    }

}

const total = carrito.reduce ((acc, el)=> acc + el.precio * el.unidades, 0)

console.log(`el total a pagar de su compra es: ${total} `);
alert (`el total a pagar de su compra es: ${total} `)


function cargarProductos (arr, producto) {
    arr.push (producto)
}

cargarProductos ( producto, new alimentos ("empanadas" , 146))


