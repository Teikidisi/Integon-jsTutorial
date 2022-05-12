class Empleado {
    private nombre:string;
    private telefono:string;

    constructor(name:string, telefono:string){
        this.nombre = name;
        this.telefono = telefono;
    }

    getNombre(){
        return this.nombre
    }
    getTelefono(){
        return this.telefono
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setTelefono(telefono:string){
        this.telefono=telefono;
    }
}

class Manager extends Empleado {
    private noEmpleadosACargo:number;

    constructor(nombre:string, telefono:string, numeroEmpleados:number){
        super(nombre,telefono);
        this.noEmpleadosACargo = numeroEmpleados
    }

    getNoEmpleadosACargo(){
        return this.noEmpleadosACargo;
    }
    setNoEmpleadosACargo(numero:number){
        this.noEmpleadosACargo = numero;
    }
}

let empleado1 = new Empleado("Juan Perez","1234567890")
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());
let manager1 = new Manager("Wilson Garcia", "1345689123",3);