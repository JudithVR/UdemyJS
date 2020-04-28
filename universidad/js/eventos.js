//event listener click
//event listener al buscador

document.querySelector('#submit-buscador').addEventListener('click',function(e){
    e.preventDefault(); //evita que se haga la accion por default y que corra el codigo que se coloca en la funcion
    alert('Buscando Cursos...');
});

//otra forma de hacer lo mismo, ahora en vaciar carrito

document.querySelector('#vaciar-carrito').addEventListener('click',ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    alert('Ejecutando funcion externa');

    let elemento;
    elemento = e;
    elemento = e.target;
    elemento = e.target.id;

    console.log(elemento);
}

document.querySelector('#encabezado').addEventListener('click',function(e){
    e.target.innerText = 'Nuevo Encabezado';
})

//event listener 

//variables

let encabezado = document.querySelector('#encabezado');
let enlaces = document.querySelector('.enlace');
let boton = document.querySelector('.vacio'); 

//click
//boton.addEventListener('click',obtenerEvento);

//doble click
boton.addEventListener('dblclick',obtenerEvento);

//mouse enter (al pasar el puntero sobre un elemento)
boton.addEventListener('mouseenter',obtenerEvento);

//mouse leave (al sacar el puntero de un elemento)
boton.addEventListener('mouseleave',obtenerEvento);

//mouse Down
boton.addEventListener('mousedown',obtenerEvento);

//mouse up (al soltar el click)
boton.addEventListener('mouseup',obtenerEvento);



function obtenerEvento(e){
    console.log(`Evento: ${e.type}`); //con e.type se obtiene el tipo de evento 
}

//eventos para los inputs

let busqueda = document.querySelector('#buscador');

//keydown regresa el valor de lo que se ingresa en el input al presionar una tecla
//busqueda.addEventListener('keydown', obtenerEvento2);

//keyup regresa el valor de lo que se ingresa en el input al soltar una tecla
//busqueda.addEventListener('keyup', obtenerEvento2);

//keypress regresa el valor de lo que se ingresa en el input sin considerar si se presiona o se suelta la tecla
busqueda.addEventListener('keypress', obtenerEvento2);

function obtenerEvento2(e){
    document.querySelector('#encabezado').innerText = busqueda.value ;
    console.log(`Evento: ${e.type}`); //con e.type se obtiene el tipo de evento 
    
}

//focus al dar clic sobre el input

busqueda.addEventListener('focus',obtenerEvento3);

//blur al dar clic fuera del input
busqueda.addEventListener('blur',obtenerEvento3);

//cut al cortar el contenido del input
busqueda.addEventListener('cut',obtenerEvento3);

//copy al copiar el contenido del input
busqueda.addEventListener('copy',obtenerEvento3);

//paste alpegar el contenido del input
busqueda.addEventListener('paste',obtenerEvento3);

//al hacer cualquiera de las acciones anteripres en el input
busqueda.addEventListener('input',obtenerEvento3);

function obtenerEvento3(e){
    
    console.log(`Evento: ${e.type}`); //con e.type se obtiene el tipo de evento 
    
}

//event bubbling, burbuja de eventos, se da cuando hay un evento asignando a un elemento que esta dentro de otro. 

let card = document.querySelector('.card');
let infoCurso = document.querySelector('.info-card');
let agregarCarrito = document.querySelector('.agregar-carrito');
/*
card.addEventListener('click',function(){
    console.log('click en card');
});

infoCurso.addEventListener('click',function(){
    console.log('click en Info curso');
});

agregarCarrito.addEventListener('click',function(){
    console.log('click en agregar carrito');
});

*/
//para evitar la propagacion de eventos, se usa stopPropagation

card.addEventListener('click',function(e){
    console.log('click en card');
    e.stopPropagation();
});

infoCurso.addEventListener('click',function(e){
    console.log('click en Info curso');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click',function(e){
    console.log('click en agregar carrito');
    e.stopPropagation();
});

//delegation

document.body.addEventListener('click', eliminarElemento);


function eliminarElemento(e){
    e.preventDefault(); //para prevenir un evento o accion por default
    console.log('click');
    console.log(e.target.classList); //para mostrar la clase
}

//delegation esperar un click en cualquier lugar y verificar que elemento se esta haciendo click y ejecutar codigo 

document.body.addEventListener('click', eliminarElemento2);


function eliminarElemento2(e){
    e.preventDefault(); //para prevenir un evento o accion por default
    //contains() verifica que lo que se le pasa como parametro se encuentre
    if(e.target.classList.contains('borrar-curso')){
        console.log('si!');
        console.log(e.target.parentElement.parentElement.remove());
    }else {
        console.log('no!'); 
    }

    if(e.target.classList.contains('agregar-carrito')) {
        console.log('Curso agregado');
    }
    
}



