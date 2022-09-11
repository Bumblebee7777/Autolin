alert("Bienvenidos a AUTOLIN")



function registroUsuario() {
    
   return prompt("Ingrese su nuevo usuario")
}

registroUsuario();

function registroContraseña() {

   return prompt("Ingrese su nuevo contraseña")
};

registroContraseña();

let usuarioNuevo = registroUsuario()
let contraseñaNueva = registroContraseña()

alert("Se registro correctamente");

function loguear() {
   let usuarioRegistrado = prompt("INGRESE SU NOMBRE DE USUARIO")
   let contraseñaRegistrada = prompt("INGRESE SU CONTRASEÑA")

   while(usuarioRegistrado != usuarioNuevo && contraseñaRegistrada != contraseñaNueva){
      alert("DATOS INCORRECTOS")
      loguear()
   }
};

loguear();

alert("Ha iniciado sesion correctamente, puedo seguir a elegir su auto")

class Auto{
   constructor(modelo, precio){
      this.modelo = modelo
      this.precio = precio
   }
}
const trend = new Auto("Gol Trend", 200000)
const sentra = new Auto("Nissan Sentra", 300000)
const peugeot = new Auto("208gti", 500000)
const cruze = new Auto("Chevrolet Cruze", 400000)

const carrito = []

let auto = prompt("Seleccione su auto:  \n 1- Gol TREND $200000 \n 2- Nissan Sentra $300000 \n 3- Peugeot 208gti $500000  \n 4-Chevrolet CRUZE $400000 \n 5-Ingrese 'Terminar compra' para salir")

function seleccionarAuto() {

 while(auto != "Terminar compra"){
     switch(auto){
         case "1": 
             alert("Usted a seleccionado Gol TREND")
           carrito.push(trend)
             break;
          case"2":  
             alert("Usted a seleccionado Nissan SENTRA")
             carrito.push(sentra)
             break;
          case "3":
             alert("Usted a seleccionado Peugeot 208")
             carrito.push(peugeot)
         
             break;
          case "4":
             alert("seleccionado Chevrolet CRUZE")
             carrito.push(cruze)
             default:
               
             alert("Opcion incorrecta")
             
             break;
         }
 auto = prompt("Seleccione su auto:  \n 1- Gol TREND $200000 \n 2- Nissan Sentra $300000 \n 3- Peugeot 208gti $500000  \n 4-Chevrolet CRUZE $400000 \n 5-Ingrese 'Terminar compra' para salir")

 
     }
}

seleccionarAuto();


alert("Gracias por su compra, presione F12 para ver su carrito")

carrito.forEach(producto => console.log(producto))

let precioTotal = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
console.log("El precio total es de $" + precioTotal)  