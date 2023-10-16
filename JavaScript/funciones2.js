//Función: sumaTres
var sumaTres = (x) => {
    return x + 3;
}
  
//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    // return nombre;
}

function otraFuncion() {
    return(
        "El nombre retornado por la función 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog('Otto')
    )
}

otraFuncion();

//Precedencia de valores
// var a = 1;
// var b = 2;
// var c = a = b;
// console.log (c);