let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){

let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;

}

function verificarIntento() {

    let numeroDeUsuario = parseInt (document.getElementById("valorUsuario") .value);
     
    if (numeroDeUsuario === numeroSecreto){

        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'un intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

        
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){

            asignarTextoElemento("p", "El numero secreto es menor");
            
        } else{

            asignarTextoElemento("p", "El numero secreto es mayor");
        }
            intentos++;
            limpiarcaja();
     }

    return;
}

function limpiarcaja() {

   document.querySelector("#valorUsuario").value ="";
   
}



 function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles")
    } else {

    }
    //si el numero generado esat incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }


 }

function condicionesInciales(){

    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reinciarJuego() {

    //necesitamso limpiar caja
    limpiarcaja();
    //indicar mensaje de incio que indique numero
    //indicar numero aletorio
    //inicializar el numero de intentos
    condicionesInciales();
    //deshabilitar boton de nuuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", true);


       
} 

condicionesInciales();