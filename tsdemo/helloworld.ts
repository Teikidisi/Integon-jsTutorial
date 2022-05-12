type Registro = [number,string,boolean]

let arregloRegistro: Array<Registro> = [];
let mensaje:string = "Hola mundo";
let dato:number = 5;
let encendido:boolean = false;
let otracadena: string = "";

let ejemplo1, ejemplo2, ejemplo3:Registro;
ejemplo1 = [10,'cadena',false]
ejemplo2 = [20,'cadena2',false]
ejemplo3 = [30,'cadena3',false]

arregloRegistro.push(ejemplo1);
arregloRegistro.push(ejemplo2);
arregloRegistro.push(ejemplo3);


function imprimirRegistros(arreglo:Array<Registro>):void{
    for (let registro of arreglo){
        console.log(registro);
    }
}

imprimirRegistros(arregloRegistro);

for( let registro of arregloRegistro){
    console.log(registro);
}

console.log(mensaje);
// let encabezado = document.createElement("h1");
// encabezado.textContent = mensaje;
// document.body.appendChild(encabezado);