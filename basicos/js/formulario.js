let arreglo = []

function Save(){
    let name = document.getElementById("name").value;
    let edad = parseInt(document.getElementById("edad").value);
    let ingreso = parseInt(document.getElementById("ingreso").value);

    if(name === ""){
        return alert("El nombre no puede estar vacío.")
    }
    if (isNaN(edad)){
        return alert("Edad debe ser un numero")
    } else if (edad <= 0){
        return alert("Edad debe ser positivo.");
    }
    if (isNaN(ingreso)){
        return alert("Ingreso debe ser un numero")
    }


    let registro = {
        "Name":name,
        "Edad":edad,
        "Ingreso":ingreso
    }
    
    arreglo.push(registro);
    arreglo.forEach(element => {
        console.log(`Se guardó: \nNombre: ${element.Name} \nEdad: ${element.Edad} \nIngreso: ${element.Ingreso}`)
    })

    return alert(`Se guardó: \nNombre: ${registro.Name} \nEdad: ${registro.Edad} \nIngreso: ${registro.Ingreso}`);
}