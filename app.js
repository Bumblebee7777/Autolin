let productos = "./json/producto.json";

let contenedorCard = document.getElementById("contenedor-card");

let carrito = []

fetch(productos)
  .then(response => response.json())
  .then(datos => {
    datos.forEach(producto => {
      let div = document.createElement("div");
      div.innerHTML = ` <div class="card" >
   <img src="${producto.imagen}" >
   <div class="card-body">
     <h5 class="card-title">${producto.modelo}</h5>
     <p class="card-text"> $ ${producto.precio}</p>
     <button class="button" id="button${producto.id}">Agregar al carrito</button>
   </div>
 </div>`;
      contenedorCard.appendChild(div);

      let button = document.getElementById(`button${producto.id}`);
      button.addEventListener("click", () => {
        agregarAuto(producto.id);
        Toastify({
          text: "Agregaste auto al carrito",

          duration: 1000,

          position: "right",
          style: {
            background: "linear-gradient(to right, #93291E, #ED213A)",
          },
        }).showToast();
      });
      function agregarAuto(id) {
        const producto = datos.find(producto => producto.id === id);
        const productoCantidad = carrito.find(producto => producto.id === id);
        //Si me encuentra el producto lo cuenta mas de una vez.

        productoCantidad ? productoCantidad.cantidad++ : carrito.push(producto);

        actualizarCarrito();
        localStorage.setItem("compras", JSON.stringify(carrito));
      }
    });
  });

if (localStorage.getItem("compras")) {
  let compra = JSON.parse(localStorage.getItem("compras"));
  for (let i = 0; i < compra.lenght; i++) {
    carrito.push(compra[i]);
  }
}

const mostrarCarrito = document.getElementById("products-container");

function actualizarCarrito() {
  let acumuladorAuto = "";
  carrito.forEach((producto) => {
    acumuladorAuto += `<div class="products-cards">
      <h4 class="text-principal">${producto.modelo}</h4>
      <i class="text-principal">Precio: $${producto.precio}</i>
      <i>Cantidad: ${producto.cantidad}</i>
      <button onclick = eliminarProducto(${producto.id})>Eliminar</button>
      </div>
    <hr>`;
  });
  mostrarCarrito.innerHTML = acumuladorAuto;
  totalCarrito();
}

let modalCarrito = document.getElementById("carrito-conteiner");

let buttonCarritoOpen = document.getElementById("btn-carrito");

buttonCarritoOpen.addEventListener("click", () => {
  modalCarrito.className = "carrito-conteiner";
});

let buttonCarritoClose = document.getElementById("shop-close");

buttonCarritoClose.addEventListener("click", () => {
  modalCarrito.className = "none";
});

const eliminarProducto = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  carrito.splice(carrito.indexOf(producto), 1);
  actualizarCarrito();
};

let pagar = document.getElementById("irAlPago");

let formPagar = document.getElementById("ultimo-paso")

pagar.addEventListener("click", () => {
  modalCarrito.className = "none";
  formPagar.className = "pagos"
})

let cancelar = document.getElementById("close")

cancelar.addEventListener("click", () => {
formPagar.className = "none"
})






let finalizarCompra = document.getElementById("build");

finalizarCompra.addEventListener("click", () => {
  Swal.fire({
    title: "Compra realizada con exito, vuelva pronto!",
    icon: "success",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#ff4e50",
  });
  carrito.splice(0, carrito.length);
  modalCarrito.className = "none";
  actualizarCarrito();
});

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
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  totalCompra.innerHTML = total;
}

let 