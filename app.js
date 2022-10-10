

class Auto{
   constructor(imagen, modelo, precio, id, cantidad){
      this.imagen = imagen
      this.modelo = modelo
      this.precio = precio
      this.id = id
      this.cantidad = cantidad
   }
}
const carrito = []


const trend = new Auto("images/trend.jpg", "Gol Trend", 200000,"1", 1)
const sentra = new Auto("images/sentra.jpg", "Nissan Sentra", 300000, "2", 1)
const peugeot = new Auto("images/208.jpg", "208gti", 500000, "3", 1)
const cruze = new Auto("images/cruze.jpg","Chevrolet Cruze", 400000, "4", 1)
const civic = new Auto("images/civic.jpg", "Honda Civic", 600000, "5", 1)
const focus = new Auto("images/focus.jpg", "Ford Focus", 700000, "6", 1)
const corolla = new Auto("images/corolla.jpg", "Toyota Corolla", 800000, "7", 1)
const tiguan = new Auto("images/tiguan.jpg", "Volkswagen Tiguan", 900000, "8", 1)
const suran = new Auto("images/suran.jpg", "Volkswagen Suran", 1000000, "9", 1)
const tresmil = new Auto("images/3008.jpg", "Peugeot 3008", 1100000, "10", 1)

let arrayAutos = [trend, sentra, peugeot, cruze, civic, focus, corolla, tiguan, suran, tresmil ];

let contenedorCard = document.getElementById("contenedor-card")
arrayAutos.forEach(producto => {
   let div = document.createElement("div")
   div.innerHTML = ` <div class="card" >
   <img src="${producto.imagen}" >
   <div class="card-body">
     <h5 class="card-title">${producto.modelo}</h5>
     <p class="card-text">${producto.precio}</p>
     <button class="button" id="button${producto.id}">Agregar al carrito</button>
   </div>
 </div>`
 contenedorCard.appendChild(div)

let button = document.getElementById(`button${producto.id}`);
button.addEventListener('click', () =>{
   agregarAuto(producto.id)
 Toastify({

text: "Agregaste auto al carrito",

duration: 1500,

position: "right"
}).showToast();
}) 
})

function agregarAuto(id){
   const producto = arrayAutos.find(producto => producto.id === id);   
   const productoCantidad = carrito.find(producto => producto.id === id); 
   //Si me encuentra el producto lo cuenta mas de una vez.   
  
   productoCantidad ? productoCantidad.cantidad++ : carrito.push(producto)

   actualizarCarrito()
localStorage.setItem("compras", JSON.stringify(carrito))
}

if(localStorage.getItem("compras")){
   let compra = JSON.parse(localStorage.getItem("compras"))
   for(let i = 0; i < compra.lenght; i ++){ 
      carrito.push(compra[i])
   }
}

const mostrarCarrito = document.getElementById("products-container")

function actualizarCarrito(){ 
   let acumuladorAuto = ""
   carrito.forEach(producto => {
      acumuladorAuto += `<div class="products-cards">
      <h4 class="text-principal">${producto.modelo}</h4>
      <i class="text-principal">Precio: $${producto.precio}</i>
      <i>Cantidad: ${producto.cantidad}</i>
      <button onclick = eliminarProducto(${producto.id})>Eliminar</button>
      </div>
    <hr>`
   })
   mostrarCarrito.innerHTML = acumuladorAuto
   totalCarrito()
}

let modalCarrito = document.getElementById("carrito-conteiner") 


let buttonCarritoOpen = document.getElementById("btn-carrito")

buttonCarritoOpen.addEventListener("click", () => {
   modalCarrito.className = "carrito-conteiner"
})

let buttonCarritoClose = document.getElementById("shop-close")

buttonCarritoClose.addEventListener("click",() => {
   modalCarrito.className = "none"
})


 const eliminarProducto = (id) => {
   const producto = carrito.find(producto => producto.id === id);
  carrito.splice(carrito.indexOf(producto), 1);
  actualizarCarrito()
 }



 
 //Funcion para vaciar por completo el carrito
 let vaciarCarrito = document.getElementById("delete-shop");
 vaciarCarrito.addEventListener("click", () => {
   carrito.splice(0, carrito.length);
   actualizarCarrito();
 });
 
 //Calculo el total del carrito
 const totalCompra = document.getElementById("total");
 
 function totalCarrito() {
   let total = 0;
   carrito.forEach(producto => {
     total += producto.precio * producto.cantidad;
   });
   totalCompra.innerHTML = total;
 }


