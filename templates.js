const producto1 = 'Pizza',
      precio1 = 38,
      producto2 = 'Hamburguesa',
      precio2 = 40;


      let html;

      //forma vieja de crear templates
      html = '<ul>' +
             '<li>Orden: ' + producto1 + '</li>'+
             '<li>Precio ' + precio1 + '</li>' +
             '<li>Orden: ' + producto2 + '</li>'+
             '<li>Precio ' + precio2 + '</li>' +
             '<li>Total: ' + (precio1 + precio2) + '</li>' +
             '</ul>';
    console.log(html);
    document.getElementById('app').innerHTML = html; //para madar al DOm

    //forma template literals

    let html2 = `
          <ul>
            <li>Orden: ${producto1} </li>
            <li>Precio: ${precio1} </li>
            <li>Orden: ${producto2} </li>
            <li>Precio: ${precio2} </li>
            <li>Total: ${total(precio1,precio2)} </li>
          </ul>
    `;

    function total (precio1,precio2){
        return precio1 + precio2;
    }
    document.getElementById('app').innerHTML = html2;


    //arreglos

    let numeros = [1,2,3,4,2,3];
    console.log(numeros);

    let meses = new Array('Enero','Febrero','Marzo');
    //PAra saber si la  variable es un arreglo o  no:
    console.log(Array.isArray(meses));

    //para imprimir el contenido del arreglo
    for(var i =0; i < meses.length; i++){
      console.log(meses[i]);
    }
    
    //para ingresar un elemento en el arreglo en la posicion deseada

    meses[3]= 'Abril';

    //para agregar un elemento al arreglo al final

    meses.push('Mayo');
    console.log("se agrego un elemento al final del arreglo");

    for(var i =0; i < meses.length; i++){
      console.log(meses[i]);
    }

    //para agregar un elemento al iinicio del arreglo
    console.log("se agrego un elemento al inicio del arreglo");
    meses.unshift('Mes 0');

    for(var i =0; i < meses.length; i++){
      console.log(meses[i]);
    }
    //para buscar un elemento dentro del arreglo
    console.log("se busca un elemento del arreglo");

    console.log(meses.indexOf('Abril'));

    //para eliminar elementos de un arreglo
    //el ultimo elemento:
    meses.pop();
    console.log("se elimino el ultimo elemento");
    for(var i =0; i < meses.length; i++){
      console.log(meses[i]);
    }

    //el primer elemento:
    meses.shift();
    console.log("se elimino el primer elemento");
    for(var i =0; i < meses.length; i++){
      console.log(meses[i]);
    }

    //eliminar un rango de elementos; primer parametro indica el indice a partir del cual se eliminaran los elementos, el segundo parametro indica el numero de elementos a eliminar

    meses.splice(2,1);

    console.log("se elimino el elemento con indice 2");
    for(var i =0; i < meses.length; i++){
      console.log(meses[i]);
    }

    //invertir el orden de los elementos del arreglo

    meses.reverse();
    console.log("se invirtio el orden de los elementos");
    for(var i =0; i < meses.length; i++){
      console.log(meses[i]);
    }

    //unir dos arreglos

    let arreglo1 = meses.concat(numeros);
    console.log("uniendo dos arreglos en uno");
    console.log(arreglo1);

    //ordenar alfabeticamente un arreglo

    let frutas = ['platano','manzana','fresa','arandano'];
    console.log(frutas);
    frutas.sort();
    console.log("Ordenando alfabeticamente un arreglo");
    console.log(frutas);

    //odenando numeros: js ordena los numeros comparando posicion a posicion, es decir colocara 1,10,100, 15...

    let num = [1,234,52,67,100,10,24,5,22,15];
    console.log(num);
    console.log("ordenando numeros");
    num.sort();
    console.log(num);

    //para que los ordene correctamente se usa una funcion
    let num2 = [1,234,52,67,100,10,24,5,22,15];
    console.log(num2);
    console.log("ordenando numeros correctamente");
    num2.sort(function(x,y){
      return x-y;
    });
    console.log(num2);