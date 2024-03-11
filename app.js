let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];//Lista que guarda los numeros salientes
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log(numeroSecreto)
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto) {
        //console.log('Acertaste el número!');
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos== 1) ? 'vez' : 'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarC();//llamando función

    }
    return;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.')
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function limpiarC(){
    document.querySelector('#valorUsuario').value=''; //Por un ID
    //valorCaja.value='';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos=1;
}



function reiniciarJuego(){
    //Limpiar la caja
    limpiarC();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juegos
    document.querySelector('#reiniciar').setAttribute('disabled','true')

}

condicionesIniciales();