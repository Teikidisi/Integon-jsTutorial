var variable = "Rodrigo Peralta Reyes";
console.log(variable+" "+ typeof variable);

variable = 100;
console.log(variable+" "+ typeof variable);

variable = true;
console.log(variable+" "+ typeof variable);

variable = {
    "nombre": "Rodrigo",
    "ciudad":"Tijuana",
    "profesion": "Programador"
}
console.log(variable)
console.log(typeof variable)


variable = function(a,b) {
    if (a>b)
        console.log("El numero mayor es "+a);
    else
        console.log(`El numero mayor es ${b}`);
}
variable(8,20);
console.log(typeof variable);

variable = new Date()
console.log(variable+" "+ typeof variable);

let dato1 = 100
let dato2 = 200
let dato3 = 50;

if (dato2 > dato1 & dato2 > dato3)
    console.log("Se cumple la condicion");
