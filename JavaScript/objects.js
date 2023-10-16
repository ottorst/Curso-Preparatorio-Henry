// 1 El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.
// 2 El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.


// var deportes = {
//     conBalon: ['Futbol', 'Basketball', 'Golf'],
//     sinBalon: ['Boxeo', 'Surf', 'Trekking'],
//  };


var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

console.log(persona);
persona.nombre = 'Martin';
persona.edad = 32;
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.estudios.esProgramador);

var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);
delete autos.marcas;
console.log(autos);

// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);
// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);
//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);
//BORRAR
delete autos.marcas;
console.log(autos);
// FUNCIONES
var misFunciones = {
    saludar: function() {
        console.log('Hola!');
    }
}

misFunciones.saludar();

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// NO TOMAN EL VALOR DE LA PROPIEDAD SINO LITERAL
var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas['propDos'] = ['Hamburguesas', 'Papas fritas'];
}
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas); // vemos que los nombres de las propiedades son PropUno y Dos, y queríamos saludables y noSaludables

var diferenciaDeNotacionesParametrosVariables = function(propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesas', 'Papas fritas'];
}
diferenciaDeNotacionesParametrosVariables('saludable', 'noSaludable');
console.log(comidas); // ahora las propiedades si tienen los nombres que se pasaron, asignados por bracket notation

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log('tienePropiedad: '+tienePropiedad);
// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log('todasLasPropiedades: '+todasLasPropiedades);

var mundo = {continentes: 7, paises: 195, oceanos: 5};
for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}

//THIS
var mascota = {
   animal: 'Perro',
   raza: 'Ovejero Alemán',
   amistoso: true,
   dueño: 'María López',
   info: () => {
      console.log('Mi perro es un  ' + this.raza);
   },
};
mascota.info;

var mascota2 = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function() {
       console.log('Mi perro es un  ' + this.raza);
    },
 };
 mascota2.info