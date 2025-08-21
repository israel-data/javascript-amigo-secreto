/* 
Autor: -工丂尺闩㠪㇄ ᗪ闩ㄒ闩-
Creado: Agosto 2025.
Versión: 1.0.0
Nombre: Adivinar número secreto.
Descargado de: https://github.com/israel-data
ⓘ*/ 
//ⓘ Generar el numero a adivinar "número secreto" en una función y asiganarle a la variable local.
let nombreAmigo;
//let lista = document.getElementById('listaAmigos')
//lista.appendChild(li);

function verificarNombre(nombreAmigo){
    if (nombreAmigo != ''){
        let li = document.createElement('li');
        li.textContent= nombreAmigo;
        document.getElementById('listaAmigos').appendChild(li);
        limpiarCaja();
        
        
    }else{
        //ⓘ Mostrar alerta de caja vacia.  
        alert('Por favor escriba un nombre.')
    }
    return;  
}

function limpiarCaja(){
    document.querySelector('#amigo').value='';
    return;
}


function condicionesIniciales(){
    agregarAmigo();
    limpiarCaja();
    return;
}

function agregarAmigo(){
    nombreAmigo = document.getElementById('amigo').value;
    verificarNombre(nombreAmigo);
    return (nombreAmigo);
}


condicionesIniciales();