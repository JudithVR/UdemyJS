//variables

const listaTweets = document.getElementById('lista-tweets');


//event listener

eventListener();
function eventListener(){
    //cuando se envia el formulario

    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //borrar tweets

    listaTweets.addEventListener('click',borrarTweet);

    //contenido cargado, una vez que carga la pagina muestra lo que hay en local storage
    document.addEventListener('DOMContentLoaded',
    localStorageListo);

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

   //añadiendo a local storage
    agregarTweetLocalStorage(tweet);
}

//elimina el tweet del DOM
function borrarTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();

        //llamada a funcion para borrar del localstorage
        borrarTweetLocalStorage(e.target.parentElement.innerText);
        
    } 
}

//agregar tweet a local storage

function agregarTweetLocalStorage(tweet){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    //añadir el nuevo tweet al arreglo
    tweets.push(tweet);

    //convertir de string a arreglo para local storage (ya que reescribe lo que hay)
    localStorage.setItem('tweets',JSON.stringify(tweets));

}

//comprobar que haya elementos en el localstorage, retorna un arreglo

function obtenerTweetsLocalStorage(){
    let tweets;

    //revisando los valores del local storage
    if(localStorage.getItem('tweets')===null){
        //si en local storage esta vacio se crea un arreglo vacio
        tweets = [];
    }else {
        //en caso contrario almacena llo actual con json
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//mostrar datos de localstorage en la lista

function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
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
    })
}

//eliminar tweet del localstorage

function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;

    //para obtener el contenido del tweet sin la x de eliminar
    tweetBorrar = tweet.substring(0,tweet.length-1);

    tweets = obtenerTweetsLocalStorage();

    //toma como parametros el twwet y el indice en el que se encuentra
    tweets.forEach(function(tweet,index){
        if(tweetBorrar == tweet){
            //para borrar el tweet se recibe el indice en el que se encuentra y cuantos elementos se deben  borrar, en este caso solo uno
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets',JSON.stringify(tweets));
}