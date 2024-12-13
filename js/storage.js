const listaDeProductos = {
    "nombre": "Juan",
    "apellido": "Torres"
}

// Guardar carrito en localStorage
localStorage.setItem("carrito", JSON.stringify(listaDeProductos));

// Obtener carrito de localStorage
let carrito = JSON.parse(localStorage.getItem("carrito"))

console.log(carrito);

// localStorage.setItem("nombre", "Elias");

// const nombre = localStorage.getItem("nombre");
// console.log(nombre);

// localStorage.setItem("apellido", "Orihuela");

// const apellido = localStorage.getItem("apellido");
// console.log(apellido);

// borarr un item especifico
// localStorage.removeItem("apellido");
// console.log(`apellido: ${localStorage.getItem("apellido")}`);

// borrar todos los registros de una vez
// localStorage.clear();
// console.log(`nombre: ${localStorage.getItem("nombre")}`);

// capacidad maxima de 5 a 10 MB en local storage


