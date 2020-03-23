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