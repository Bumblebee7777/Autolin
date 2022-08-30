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

let auto = prompt("Seleccione su auto:  \n 1- Gol TREND $200000 \n 2- Nissan Sentra $300000 \n 3- Peugeot 208gti $500000  \n 4-Chevrolet CRUZE $400000 \n 5-Ingrese 'Terminar compra' para salir")

function seleccionarAuto() {

 while(auto != "Terminar compra"){
     switch(auto){
         case "1": 
             alert("Usted a seleccionado Gol TREND")
           
             break;
          case"2":  
             alert("Usted a seleccionado Nissan SENTRA")
             break;
          case "3":
             alert("Usted a seleccionado Peugeot 208")
         
             break;
          case "4":
             alert("seleccionado Chevrolet CRUZE")
             break;
             default:
               
             alert("Opcion incorrecta")
             
             break;
         }
 auto = prompt("Seleccione su auto:  \n 1- Gol TREND $200000 \n 2- Nissan Sentra $300000 \n 3- Peugeot 208gti $500000  \n 4-Chevrolet CRUZE $400000 \n 5-Ingrese 'Terminar compra' para salir")

 if (auto === "Terminar compra") {
    alert("Gracias vuelva pronto")
 
 }
     }
}

seleccionarAuto();


    