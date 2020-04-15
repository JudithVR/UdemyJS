// Eliminar de Local Storage
// localStorage.clear();

//tranajndo con el Dom

let elemento;

elemento = document; //manda todo el contenido del html

elemento=document.all; //manda todo el contenido del html pero en un formato diferente

elemento=document.all[10]; //para traer un elemento del arreglo

//para que regrese una parte en especifico
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms; //para acceder a los formularios
elemento = document.forms[0].id; //para acceder al id de un formulariio
elemento = document.forms[0].className; //para acceder a la clase 
elemento = document.forms[0].classList;

elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;


//para hacer un arreglo con las imagenes, para que no sea una coleccion
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);
console.log("impresion del arreglo");
console.log(imagenesArr);

console.log("impresion con forEach");
imagenesArr.forEach(function(imagen){
    console.log(imagen)
})

//getElementById

elemento = document.getElementById("hero");


elemento = document.getElementById("header").className;

console.log(elemento);

let encabezado;

encabezado = document.getElementById("encabezado").textContent;

encabezado = document.getElementById("encabezado").innerText;

//modificaciones al estilo de un elemento del dom
encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

//modificando el texto

encabezado.textContent = 'Los mejores cursos';

// //textontent e innerText regresan lo mismo
console.log(encabezado);


//query selector

let encabeza =document.querySelector('#encabezado');

//se utiliza # para indicdar que es un id
//un . para indicar que es una clase

encabeza = document.querySelector('h2');

//se pueden aplicar las mismas propiedades que con getElementById


console.log(encabeza);

//para seleccionar todos los elementos con una misma clase o etiqueta

let elementos = document.querySelectorAll('.enlace');
console.log(elementos);


//creando selector con dos propiedades
let enlace;

// como parametro que manda la primera propiedad que indica que es un id y el segundo una etiqueta, indicando que se quiere el primer hijo
enlace = document.querySelector('#principal a:first-child');

//para un elemento del medio, etre () se  indica cual se quiere
enlace = document.querySelector('#principal a:nth-child(3)');

//para el ultimo elemento

enlace = document.querySelector('#principal a:last-child');


console.log(enlace);

//seleccionando multiples elementos

const enlaces = document.getElementsByClassName('enlace'); //regresa una coleccion con los enlaces

//usando querySelector con getElemenet

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');



console.log(listaEnlaces);

let links = document.querySelectorAll('#principal a:nth-child(odd)'); //obtiene los enlaces impares

//para aplicar ccs a un conjunto de elementos
links.forEach(function(impares){
    impares.style.backgroundColor = 'red';
    impares.style.color ='white';

});

console.log(links);


//traversing