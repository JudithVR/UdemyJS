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


//traversing del padre al hijo

const navegacion = document.querySelector('#principal');

//childNodes muestra los nodos hijos, considerando como nodos los espacios que hay entre las etiquetas
console.log(navegacion.childNodes); 

//muestra los nodos hijos, sin considerar los espacios entre etiquetas
console.log(navegacion.children);

//muestra el nombre del nodo
console.log(navegacion.children[1].nodeName);

//regresa un entero, muestra el tipo de nodo, 
// 1. Elemento HTml
//2. Atributo
//3. Texto
//8. comentarios
//9.documentos
//10. doctype
console.log(navegacion.children[1].nodeType);

//se puede modificar los atributos de un nodo hijo:

navegacion.children[1].textContent = 'Nuevo enlace';
navegacion.children[1].style.backgroundColor = 'blue';
navegacion.children[1].style.color = 'white';


const barra = document.querySelector('.barra');
console.log(barra.children[0].children[0].children);

//para mostrar el ultimo hijo, considerando como nodos los espacios entre las etiquetas

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].lastChild);

//sin considerar los espacios como nodos

console.log(cursos[0].lastElementChild);
//para mostrar el primer nodo hijo
console.log(cursos[0].firstElementChild);

//para contanar el numero de nodos hijos
console.log(cursos[0].childElementCount);

//traversing del hijo al padre

const enlac = document.querySelectorAll('.enlace');
console.log(enlac);
console.log('nodo hijo:');
console.log(enlac[0]);
console.log('nodo padre:');
console.log(enlac[0].parentElement);
console.log('nodo padre-padre:');
console.log(enlac[0].parentElement.parentElement);

//se puede combinar parent y children

console.log(cursos);

console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'hola desde traversing');

//previoussibling regresa el elemento anterior a un nodo, que este en el mismo nivel, es decir un nodo hermano

//regresa el nodo anterior considerando los espacios entre las etiquetas
console.log(enlaces[4]);
console.log(enlaces[4].previousSibling);

//regresa el nodo anterior sin considerar los espacios entre las etiquetas
console.log(enlaces[4].previousElementSibling);

//nextsibling regresa el elemento siguiuente a un nodo, que este en el mismo nivel, es decir un nodo hermano

//regresa el nodo siguiente, considerando los espacios entre etiquetas
console.log(enlaces[0]);
console.log(enlaces[0].nextSibling);

//regresa el nodo siguiente, sin considerar los espacios entre etiquetas

console.log(enlaces[0].nextElementSibling);


//creacion de elementos

//se crea un nuevo enlace
const nuevoEnlace = document.createElement('a'); 

//agregando clase al enlace
nuevoEnlace.className = 'enlace';

//añadiendo id
nuevoEnlace.id = 'nuevo-id';

//atributo href
nuevoEnlace.setAttribute('href','#');

//añadir texto
nuevoEnlace.textContent = 'Enlace nuevo';

//otra forma de añadir texto 
nuevoEnlace.appendChild(document.createTextNode('  con createTextNOde'));

//para agregar el enlace al html
document.querySelector('#secundaria').appendChild(nuevoEnlace);

console.log(nuevoEnlace);

console.log(document.querySelector('#secundaria'));

