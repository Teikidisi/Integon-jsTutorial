class Empleado {
    constructor(name, telefono) {
        this.nombre = name;
        this.telefono = telefono;
    }
    getNombre() {
        return this.nombre;
    }
    getTelefono() {
        return this.telefono;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
class Manager extends Empleado {
    constructor(nombre, telefono, numeroEmpleados) {
        super(nombre, telefono);
        this.noEmpleadosACargo = numeroEmpleados;
    }
    getNoEmpleadosACargo() {
        return this.noEmpleadosACargo;
    }
    setNoEmpleadosACargo(numero) {
        this.noEmpleadosACargo = numero;
    }
}
let empleado1 = new Empleado("Juan Perez", "1234567890");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());
let manager1 = new Manager("Wilson Garcia", "1345689123", 3);
//# sourceMappingURL=oop.js.map