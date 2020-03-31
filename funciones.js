//declaracion de funciones

function saludar (){
    console.log('Hola Yuyu');
}
//llamada a la funcion
saludar();

//funcion con parametros de entrada

//declaracion de la funcion con paso de parametro
function saludar2 (nombre){
    console.log(`Hola ${nombre}`);
}

 //llamada a la funcion pasandole el parametro que ingreso el usuario

saludar2(prompt('Ingresa tu nombre', ));

//en caso de que no se pase parametro para la funcion se puede declarar uno por default

function saludar3 (nombre = 'Visitante'){
    console.log( `hola ${nombre}`);
}

saludar3();

//function expression

const suma = function(a = 3,b = 4){
    return a + b;
}

console.log(suma (1,2));
console.log(suma(1));

//funciones IIFE, son funciones que se ejecutan inmediatamente, no se mandan llamar, en los parentesis finales se pueden pasar parametros

(function(){
    console.log('Creando un IIFE');
})();


//funcion IIFE con parametro, usando literal
(function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');


//metodos de propiedad
//cuando una funcion se pone dentro de un objeto, se le comoce como metodo

const musica = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion id ${id}`);
    },
    pausar: function(){
        console.log('Pause la musica');
    }
}

musica.reproducir(30);
musica.pausar();

//los metodos tambien pueden agregarse/crearse por fuera del objeto

musica.borrar = function(id){
    console.log(`Se borro la cancion con id ${id}`);
}

musica.borrar(10);

//manejando errores con try catch

//funcion que no existe
try{
    algo();
}catch (error){
    console.log(error);
}

//no se detendra la ejecucion de lo siguiente 
function obtenerClientes(){
    console.log('Descargando...');
//Despues de un tiempo se ejecuta lo siguiente, el tiempo se determina como parametro de la funcion setTimeout
    setTimeout(function(){
        console.log('Completado');
    }, 3000);
}