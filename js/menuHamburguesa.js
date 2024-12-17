// scrollbar posicionamiento
let lastScrollTop = 0;
const menu = document.querySelector("#menu");

window.addEventListener("scroll", () => {
    // averiguo la posicion actual de deslazamiento vertical en pixeles
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if(currentScroll > lastScrollTop) {
        // si el usuario se desplaza hacia abajo
        menu.classList.add("hide");
    } else {
        menu.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    // Evita valores negativos y actualizo lastScrollTop
})

// menu hamburguesa
const menuhamburguesa = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => menuhamburguesa.classList.add("visible") );
cerrar.addEventListener("click", () => menuhamburguesa.classList.remove("visible"));


/*

console.log(productos);

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


const {id, title, price, category, description, image} = productos[2];
const producto = {
    id: id,
    title: title,
    price: price,
    category: category,
    description: description,
    image: image
};
// console.log(producto);


carrito.push(producto);
// console.log(carrito);

localStorage.setItem('carrito', JSON.stringify(carrito));

*/