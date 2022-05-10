let numeros = [8,9,12,45];
numeros.push(84); //add to last


for (index=0; index < numeros.length; index++){
    console.log(numeros[index]);
}

numeros.forEach(function(numero){
    console.log(numero);
});
console.log("Using ES6");
numeros.forEach((numero) => {console.log(numero)});

let personas = []
personas.push({
    "nombre:":"Juan",
    "apellido":"Perez"
});
personas.push({
    "nombre:":"John",
    "apellido":"Doe"
});
personas.push({
    "nombre:":"Miguel",
    "apellido":"Suarez",
    "edad":34
});
personas.forEach(element => {
    console.log(element); 
});