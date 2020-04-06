//Existe un objeto llamado Date

//regresa el dia actual
const diaHoy = new Date ();
console.log(diaHoy);
//para una fecha en especifico, se le pasa como parametro la fecha con estructura: mes, dia y año

let navidad2017 = new Date('12-25-2017');
console.log(navidad2017);

//para obtener uno de los elementos proporcionados por el objeto Date

let valor;

//obtener el mes
valor = diaHoy.getMonth();
console.log(valor);

//obtener el dia del mes

valor = diaHoy.getDate();
console.log(valor);

//obtiene el dia de la semana siendo domingo el dia 0 
valor = diaHoy.getDay();
console.log(valor);

//obtener el año
valor = diaHoy.getFullYear();
console.log(valor);

//obtener los minutos de la hora actual

valor = diaHoy.getMinutes();
console.log(valor);

//obtener la hora en formato de 24 hr
valor = diaHoy.getHours();
console.log(valor);

//obetener los milisegundos desde 1970

valor = diaHoy.getTime();
console.log(valor);

//pra modificar un valor se pueden usar las funciones anteriores pero con set

valor = diaHoy.setFullYear(2019);
valor = diaHoy.getFullYear();
console.log(valor);