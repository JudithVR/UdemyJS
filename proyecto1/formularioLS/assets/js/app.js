//variables

const listaTweets = document.getElementById('lista-tweets');


//event listener

eventListener();
function eventListener(){
    //cuando se envia el formulario

    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //borrar tweets

    listaTweets.addEventListener('click',borrarTweet);

}


//funciones


//añadir tweet del formulario

function agregarTweet(e){
    e.preventDefault();
    console.log('formularioEnviado');

    //leer el valor del textarea
    const tweet = document.getElementById('tweet').value;

    //crear boton de eliminar

    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'x';
    //crear elemento y añadir a la lista

    const li = document.createElement('li');
    li.innerText = tweet;
    //añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    //añade el tweet a la lista
    listaTweets.appendChild(li);  
}

function borrarTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        alert('Tweet eliminado');
    } 

 
}
