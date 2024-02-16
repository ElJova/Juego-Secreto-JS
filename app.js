let númeroSecreto = 0;
let intentos = 0;
let listaNúmerosSorteados = [];
let númeroMáximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificaIntento() {
    let númeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

        if (númeroDeUsuario === númeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //el usuario no acertó
        if (númeroDeUsuario > númeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else { 
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNúmeroSecreto () {
   let númeroGenerado = Math.floor(Math.random()*númeroMáximo)+1; 

    console.log(númeroGenerado);
    console.log(listaNúmerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNúmerosSorteados.length == númeroMáximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    } else {
        
    }
   //Si el número generado está incluido en la lista
    if (listaNúmerosSorteados.includes(númeroGenerado)) {
        return generarNúmeroSecreto();
   } else {

        listaNúmerosSorteados.push(númeroGenerado)
   }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${númeroMáximo}`);
    númeroSecreto = generarNúmeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disable','true');

}

condicionesIniciales();