// De acuerdo con una condición, ejecutar un grupo o otro de sentencias (If-Then-Else)

//if-else

let edad = prompt('Ingresa tu edad: ');

if(edad > 18){
    console.log('Si puedes entrar al sitio');
}else{
    console.log('No puedes acceder al sitio');
}

//comprobar que un valor existe

let puntaje = 1000;
if(puntaje){
    console.log(`El puntaje fue de ${puntaje}`);
}else{
    console.log('No hay puntaje');
}

let puntaje2;

if(typeof puntaje2 != 'undefined'){
    console.log(`El puntaje fue de ${puntaje}`);
}else{
    console.log('No hay puntaje');

}

//

let efectivo = 500;
let totalCarrito = 300;

if (efectivo > totalCarrito){
    console.log('Pago Correcto');
}else{
    console.log('Fondos insuficientes');
}

// else if y operador and &&

let hora = 19;

if(hora > 0 && hora <= 12){
    console.log('Buenos dias!');
}else if (hora >= 12 && hora <= 18){
    console.log('Buenas Tardes!');
}else if (hora > 18 && hora <= 24) {
    console.log('Buenas Noches!');
}else{
    console.log('Hora no valida');
}


// en que condicion se queda? La primera que se cumpla

let puntaje3 = 100;

if( puntaje3 < 150){
    console.log('Puntaje < 150');
} else if ( puntaje3 < 200){
    console.log('Puntaje < 200');
}


// operador || OR 

let efectivo2 = 300,
    credito2 = 700,
    disponible = efectivo2 + credito2,
    totalCarrito2 = 500;

if (efectivo2 > totalCarrito2 || totalCarrito < credito2 || totalCarrito2 < disponible){
    console.log('Pago Correcto');
}else {
    console.log('Fondos insuficientes');
}

//ternario o if en una sola linea

const logueado = true;
console.log (logueado === true ? 'Si se logueo' : 'no se logueo');


// De acuerdo con el valor de una variable, ejecutar un grupo u otro de sentencias (Switch-Case)
// Ejecutar un grupo de sentencias solo cuando se cumpla una condición (Do-While)
// Ejecutar un grupo de sentencias hasta que se cumpla una condición (Do-Until)
// Ejecutar un grupo de sentencias un número determinado de veces (For-Next)