//creacion de objetos

let persona = {
    nombre: 'Judith',
    apellido: 'Velasco',
    profesion: 'Ingeniera',
    email: 'yuyu@hotmail.com',
    edad: 29,
    frutas: ['fresa','uva']
}


//para mostrar todo el objeto
console.log(persona);

//para mostrar solo un atributo del objeto

console.log(persona.frutas);

//se puede declarar un objeto dentro de otro objeto, y tambien funciones

let persona2 = {
    nombre: 'Hector',
    apellido: 'Velasco',
    edad: 10,
    caricaturas: ['ben 10', 'mickye mouse','el chavo del 8'],
    hogar: {
        ciudad: 'Mexico',
        pais: 'Mexico',
        calle: 'Contoy',
        numero: 27
        },
    nacimiento: function(){
        // getFullYear() devuelve el año actual
        //para acceder al atributo del mismo objeto se utiliza this
        return new Date().getFullYear() - this.edad

    }
    
}

console.log(persona2);

console.log(persona2.hogar.pais);

//otra forma de acceder a las propiedades de un objeto

console.log(persona2['nombre']);
console.log(persona2['hogar']['numero']);

console.log(persona2.nacimiento());