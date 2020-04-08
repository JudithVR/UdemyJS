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
const metodoPago = prompt('Ingrese su metodo de pago');

switch (metodoPago) {
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    default:
        console.log('metodo de pago no soportado');
        break;
}


//caso dos

const fecha = new Date();

console.log(fecha.getMonth());

let mes;
switch (new Date().getMonth()) {
    case 0:
        mes = 'Enero'
        break;
    case 1:
        mes = 'Febrero'
        break;
    case 2:
        mes = 'Marzo'
        break;
    case 3:
        mes = 'Abril'
        break;
    case 4:
        mes = 'Mayo'
        break;
    case 5:
        mes = 'Junio'
        break;
    case 6:
        mes = 'Julio'
        break;
    case 7:
        mes = 'Agosto'
        break;
    case 8:
        mes = 'Septiembre'
        break;
    case 9:
        mes = 'Octubre'
        break;
    case 10:
        mes = 'Noviembre'
        break;
    case 11:
        mes = 'Diciembre'
        break;

    default:
        break;
}

console.log(`Este mes es ${mes}`);

// Ejecutar un grupo de sentencias un número determinado de veces (For-Next)

for(let i = 0; i <= 10 ; i++){
    if(i == 5){
        console.log('Voy en el numero 5');
        continue; //evita que se imprima dos veces el 5, si se coloca un break termina la ejecucion del for
    }
    console.log(`Numeros: ${i}`);
}


for (let i = 0; i < 10; i++) {
    if(i % 2 == 0){
        console.log(`El numero ${i} es Par`);
    }else{
        console.log(`El numero ${i} es Impar`);
    }
    
}

const arregloRopa = ['camisa', 'boleto', 'guitarra', 'disco'];

for(let i = 0; i < arregloRopa.length; i++){
    console.log(`tu producto ${arregloRopa[i]} fue agregado`);
}

// Ejecutar un grupo de sentencias solo cuando se cumpla una condición (While)

let i = 0;

while(i < 10){
    console.log(`numero: ${i}`);
    i++;
}

const musica = ['cancion1', 'cancion2', 'cancion3'];
i = 0;

while(i < musica.length){
    console.log(`Reproduciendo la cancion ${musica[i]}`);
    i++;
}



// Ejecutar un grupo de sentencias por lo menos una vez 

i = 100;
do{
     console.log(`Numero: ${i}`);
     i++;
}while(i < 10);


// Recorrer un arreglo con forEach

const pendientes = ['tarea', 'comer', 'proyecto', 'aprender js'];

//for
for (let i = 0; i < pendientes.length; i++) {
    console.log(pendientes[i]);    
}

//forEach
console.log('con forEach');
pendientes.forEach(function(pendiente){
    console.log(`${pendiente}`);
});

//map para recorrer un arreglo de objetos

const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Guitarra'},
    {id: 4, producto: 'Disco'}
];

const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
});

console.log(nombreProducto);

//recorrer objeto con for

const automovil = {
    modelo: 'camaro',
    motor: 6.2,
    anio: 1969,
    marca: 'chevrolet'
}

for (let auto in automovil){
    console.log(`${auto}: ${automovil[auto]}`); 
}