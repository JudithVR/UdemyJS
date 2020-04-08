//para obtener el tamaño del navegador

let altura,
    anchura;

    altura = window.outerHeight;
    anchura = window.outerWidth;
    console.log("tamaño del navegador:")

    console.log(altura);
    console.log(anchura);

//para obtener el tamaño de la ventaana sin la interfaz del navegador

let altura2,
anchura2;

console.log("tamaño de la ventana:")
altura2 = window.innerHeight;
anchura2 = window.innerWidth;

console.log(altura2);
console.log(anchura2);

//para la ubicacion

let ubicacion;

ubicacion = window.location;
console.log(ubicacion);

//para redireccionar
// window.location.href="http://google.com";

ubicacion = window.navigator;
console.log(ubicacion);

