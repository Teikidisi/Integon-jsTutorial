let arregloRegistro = [];
let mensaje = "Hola mundo";
let dato = 5;
let encendido = false;
let otracadena = "";
let ejemplo1, ejemplo2, ejemplo3;
ejemplo1 = [10, 'cadena', false];
ejemplo2 = [20, 'cadena2', false];
ejemplo3 = [30, 'cadena3', false];
arregloRegistro.push(ejemplo1);
arregloRegistro.push(ejemplo2);
arregloRegistro.push(ejemplo3);
function imprimirRegistros(arreglo) {
    for (let registro of arreglo) {
        console.log(registro);
    }
}
imprimirRegistros(arregloRegistro);
for (let registro of arregloRegistro) {
    console.log(registro);
}
console.log(mensaje);
//# sourceMappingURL=helloworld.js.map