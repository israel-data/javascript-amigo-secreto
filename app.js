/* 
Autor: -工丂尺闩㠪㇄ ᗪ闩ㄒ闩-
Creado: Agosto 2025.
Versión: 1.0.0
Descripción: Juego sortear amigo secreto.
Descargado de: https://github.com/israel-data
ⓘ*/ 
//ⓘ Crear variables para el entorno.
let nombreAmigo;
let lista;
let listaArreglo= [];
let nombreSorteado;

//ⓘ Función para verificar si el input esta vacío y agregar nombre amigo.
function verificarNombre(nombreAmigo){
    //ⓘ Condicional para verificar si el input esta vacío.
    if (nombreAmigo != ''){
         //ⓘ Crear un objeto de lista <li> en la lista <ul> de HTML.
        let li = document.createElement('li');
        //ⓘ Agregar nombre del amigo.
        li.textContent= nombreAmigo;
        //ⓘ Mostrar el nombre del amigo agregado en la lista en el HTML.
        document.getElementById('listaAmigos').appendChild(li);
        //ⓘ Llamar a la función de limpiar input.
        limpiarCaja();
    }else{
        //ⓘ Mostrar alerta de caja vacia.  
        alert('Por favor escriba un nombre.')
    }
    return;  
}

//ⓘ Función para limpiar el input. 
function limpiarCaja(){
    //ⓘ Método para limpiar la lista HTML. 
    document.querySelector('#amigo').value='';
    return;
}

//ⓘ Función para iniciar el DOM.  
function condicionesIniciales(){
     //ⓘ Llamar a la función agregar amigo.
    agregarAmigo();
     //ⓘ Llamar a la función limpiar el input.
    limpiarCaja();
    return;
}

//ⓘ Función para agregar amigos.  
function agregarAmigo(){
    //ⓘ Obtener el valor del input.
    nombreAmigo = document.getElementById('amigo').value;
    //ⓘ Llamar a la función de verificación si el input tiene o no valor.
    verificarNombre(nombreAmigo);
    //ⓘ Llamar a la función de habilitar el sorteo del amigo.
    habilitarboton();
    return (nombreAmigo);
}

//ⓘ Función para sortear el amigo secreto.  
function sortearAmigo(){
    //ⓘ Seleccionar todos los elementos de la lista en HTML. 
    lista = document.querySelectorAll('#listaAmigos li');
    //ⓘ Pasar todos los elementos a un array (lista, arreglo).
    lista.forEach(item=> {listaArreglo.push(item.textContent)});
    //ⓘ Random para obtener índice de la lista para sortear al amigo secreto.
    nombreSorteado = Math.floor(Math.random()* listaArreglo.length);
    //ⓘ Llamar a la función para limpiar la lista HTML.
    limpiarlista();
    //ⓘ Crear un objeto de lista en la lista <ul> de HTML.
    let li = document.createElement('li');
    //ⓘ Obtener el numero sorteado y pasarle el valor del arreglo para mostrarlo.
    li.textContent= listaArreglo[nombreSorteado];
    //ⓘ Mostrar el nombre del amigo sorteado.
    document.getElementById('resultado').appendChild(li);
    document.getElementById('agregar').setAttribute('disabled', 'true');
    document.getElementById('sortear-boton').setAttribute('disabled', 'true');
    return;
}

//ⓘ Función limpiar lista de agregar amigos.  
function limpiarlista(){
    //ⓘ Obtener el ID de la lista HTML a limpiar.  
    let limpiarlista = document.getElementById('listaAmigos');
    //ⓘ Método limpiar lista seleccionada.  
    limpiarlista.innerHTML= "";
    return;
}

//ⓘ Función para habilitar el boton de sortear amigo.
function habilitarboton(){
    document.getElementById('sortear-boton').removeAttribute('disabled', 'true');
    return;
}
//ⓘ Llamar funcion principal para iniciar el programa.  
condicionesIniciales();

//ⓘ ̨̣͕͉̫̜ͅÏ̗̮̪S̖̜͚͉̜̽͌R̞̟͌̊̾̋Ä̤́̂̚E̺̭̹͖͆̈͋̈́̈́͑̋͑͑ͅL̀ D̽Ä̤̝̦́̂̚ȚͬÄ̤́̂̚ 