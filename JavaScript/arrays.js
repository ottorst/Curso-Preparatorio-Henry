// Métodos de inserción
// 1 El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
// 2 El método pop() elimina y devuelve el último elemento de un arreglo.
// 3 El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
// 4 El método shift() elimina y devuelve el primer elemento de un arreglo.
// Métodos varios
// 1 El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.
// 2 El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
// 3 El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
// 4 El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
// Métodos de recorrido
// 1 El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
// 2 El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);
// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);
// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);
// JOIN
palabraSeparada.pop();
palabraSeparada.push('y');
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);
// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:
  
    objetoUsuario.amigos.push(nuevoAmigo);
    return objetoUsuario;
  }
  
  function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como True.
    // Retornar el arreglo.
    // Tu código:
  
    objetoMuchosUsuarios.map((usuario) => (usuario.esPremium = true));
    return objetoMuchosUsuarios;
  }
  
  function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
  
    var sumaLikes = objetoUsuario.posts.reduce(
      (totalLikes, post) => totalLikes + post.likes,
      0
    );
    return sumaLikes;
  }
  
  function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
    // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
    // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
    // Luego debes restar del precio total del producto ese valor de descuento.
    // Retornar el precio final.
    // Ejemplo:
    // Precio ---> 10
    // PorcentajeDeDescuento ---> 0.2
    // Precio final ---> 8
    // Tu código:
  
    objetoProducto.calcularPrecioDescuento = function () {
      var descuento = this.precio * this.porcentajeDeDescuento;
      return this.precio - descuento;
    };
    return objetoProducto;
  }