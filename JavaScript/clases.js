// FUNCIÓN CONSTRUCTORA
// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     this.informacion = function() {
//         console.log("Este es un " + this.marca + " de color " + this.color);
//     }
//  }
//  let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
//  console.log(miPrimerAuto);
//  console.log(miPrimerAuto.marca);
//  miPrimerAuto.informacion();
 
//  EXPRESIÓN DE CLASE
// class AutoExpresion {
//     constructor(puertas, color, marca, año, ruedas) {
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas;
//     }

//     informacion() {
//         console.log("Este es un " + this.marca + " de color " + this.color + " mamei");
//     }
// }
// let miSegundoAuto = new AutoExpresion(4, 'Blanco', 'Fiat', 2015, 4);
// console.log(miSegundoAuto.informacion());
// console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca);

class Football {
    constructor(jugador) {
        this.jugador = jugador;
    }
    obtenerNombre() {
        console.log(this.jugador)
    }
}

var argentina = new Football('Messi');
var brasil = new Football('Pelé');

argentina.obtenerNombre();
brasil.obtenerNombre();

// ===
// Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos.
// El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia. 

Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
           if (this[ i ] > 3) {
                  arregloModificado.push(false);
           } else {
                  arregloModificado.push(this[ i ]);
           }
    }
    return arregloModificado;
 };
  
 var arreglo = [1, 2, 3, 4, 5];
 var nuevoArreglo = arreglo.mayorQueTres();
 console.log(nuevoArreglo);

 class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};
 
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);