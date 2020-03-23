// se obtiene el elemento con id igual al parametro y se modifica el atributo con innerHTml
document.getElementById('app').innerHTML = 'hola mundo';

//prompt lanza una ventana en la cual se muestra la pregunta y un espacio para colocar la respueta, la cual se almacenará en la variable correspondiente
let nombre = prompt('Cual es tu nombre?');
let edad = prompt('cual es tu edad?');

//con las comillas ` ` se puede colocar el texto concatenado con el contenido de las variables antes declaradas
document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad}`; 

console.log('con .log: '+ [1,2,3]);

console.log('con .table: ');
//.table muestra los datos ordenados en una tabla
console.table( [1,2,3]);

//lanza con formato difereten, rojo y un icono x
console.error('Algo salió mal');

//lanza un formato diferente, amarillo y un icono !
console.warn('esto es una advertencia');

//para saber cuanto tiempo tarda en ejecutarse cierta parte del codigo

console.time('hola');
console.warn('error');
console.warn('error');
console.warn('error');
console.warn('error');
console.warn('error');
console.timeEnd('hola');


// cambiar un numero a string

const numero1 = "50",
    numero2 = 10,
    numero3 = 'tres';

console.log(numero1+numero2);
//lo anterior concatena las constantes, ya que las detecta de diferente tipo de dato

//para evitar lo anterior se convierte a numero usando Number

console.log (Number(numero3)+numero2);


 