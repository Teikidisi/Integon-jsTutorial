class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo
    }

    consultaDetalles(){
        return(`El nombre del animal es ${this.nombre} y su tipo es ${this.tipo}`)
    }
}


class Mamifero extends Animal{
    constructor(nombre,tipo,especial){
        this.especial = especial;
        super(nombre,tipo);
    }

    consultaDetalles(){
        return(`El nombre del animal es ${this.nombre} y su tipo es ${this.tipo}, el especial es ${this.especial}`)
    }
}

class Oviparo extends Animal{

}

    //se instancia la clase animal y se crea un objecto de este tipo
let animal1 = Animal("hipopotamo","mamifero")
let animal2 = Animal("pelicano","ave")

function imprimeAnimal(animal){
    try{
        console.log(animal.consultaDetalles())
    } catch(ex){
        console.log("se recibio un objeto que no es animal")
        console.log(ex.message);
    }
}



imprimeAnimal(animal1);
imprimeAnimal(animal2);