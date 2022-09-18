// alert("Bienvenidos a AUTOLIN")



// function registroUsuario() {
    
//    return prompt("Ingrese su nuevo usuario")
// }

// registroUsuario();

// function registroContraseña() {

//    return prompt("Ingrese su nuevo contraseña")
// };

// registroContraseña();

// let usuarioNuevo = registroUsuario()
// let contraseñaNueva = registroContraseña()

// alert("Se registro correctamente");

// function loguear() {
//    let usuarioRegistrado = prompt("INGRESE SU NOMBRE DE USUARIO")
//    let contraseñaRegistrada = prompt("INGRESE SU CONTRASEÑA")

//    while(usuarioRegistrado != usuarioNuevo && contraseñaRegistrada != contraseñaNueva){
//       alert("DATOS INCORRECTOS")
//       loguear()
//    }
// };

// loguear();

// alert("Ha iniciado sesion correctamente, puedo seguir a elegir su auto")

class Auto{
   constructor(imagen, modelo, precio){
      this.imagen = imagen
      this.modelo = modelo
      this.precio = precio
   }
}
const trend = new Auto("images/trend.jpg", "Gol Trend", 200000)
const sentra = new Auto("images/sentra.jpg", "Nissan Sentra", 300000)
const peugeot = new Auto("images/208.jpg", "208gti", 500000)
const cruze = new Auto("images/cruze.jpg","Chevrolet Cruze", 400000)

let arrayAutos = [trend, sentra, peugeot,cruze];

let contenedorCard = document.getElementById("contenedor-card")
arrayAutos.forEach(producto => {
   let div = document.createElement("div")
   div.innerHTML = ` <div class="card" style="width: 18rem;">
   <img src="${producto.imagen}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${producto.modelo}</h5>
     <p class="card-text">${producto.precio}</p>
     <a href="#" class="btn btn-primary" id="btn-compra">Agregar al carrito</a>
   </div>
 </div>`
 contenedorCard.appendChild(div)
}) 



const carrito = []

let btnCompra = document.getElementById("btn-compra")

btnCompra.addEventListener("click", () => {
   
})



// let auto = prompt("Seleccione su auto:  \n 1- Gol TREND $200000 \n 2- Nissan Sentra $300000 \n 3- Peugeot 208gti $500000  \n 4-Chevrolet CRUZE $400000 \n 5-Ingrese 'Terminar compra' para salir")

// function seleccionarAuto() {

//  while(auto != "Terminar compra"){
//      switch(auto){
//          case "1": 
//              alert("Usted a seleccionado Gol TREND")
//            carrito.push(trend)
//              break;
//           case"2":  
//              alert("Usted a seleccionado Nissan SENTRA")
//              carrito.push(sentra)
//              break;
//           case "3":
//              alert("Usted a seleccionado Peugeot 208")
//              carrito.push(peugeot)
         
//              break;
//           case "4":
//              alert("seleccionado Chevrolet CRUZE")
//              carrito.push(cruze)
//              default:
               
//              alert("Opcion incorrecta")
             
//              break;
//          }
//  auto = prompt("Seleccione su auto:  \n 1- Gol TREND $200000 \n 2- Nissan Sentra $300000 \n 3- Peugeot 208gti $500000  \n 4-Chevrolet CRUZE $400000 \n 5-Ingrese 'Terminar compra' para salir")

 
//      }
// }

// seleccionarAuto();


// alert("Gracias por su compra, presione F12 para ver su carrito")

// carrito.forEach(producto => console.log(producto))

// let precioTotal = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
// console.log("El precio total es de $" + precioTotal)  