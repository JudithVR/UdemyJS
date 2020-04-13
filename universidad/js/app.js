// Eliminar de Local Storage
// localStorage.clear();

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

// //textontent e innerText regresan lo mismo
console.log(encabezado);
