// global.XMLHttpRequest = require('xhr2'); // instalacion global para usar con node.js

let listado = document.getElementById("listado");
function AccesoAPI(){
    const url = "http://localhost:3005/alumnos";
    let xhttp = new XMLHttpRequest(); //crear instancia de cliente
    xhttp.open('GET', url); //abrir el request de tipo GET
    xhttp.setRequestHeader('Accept', 'application/json'); //mandar el header diciendo que vamos a enviar, una aplicacion formato json
    xhttp.onreadystatechange = function() { //cuando este listo el evento se ejecuta la funcion
        if (this.readyState == 3){
            console.log("loading...")
        }
        if (this.readyState == 4 && this.status == 200) { //si ya terminó el estado(4) y todo salio bien (200) se ejecuta
            const data = JSON.parse(this.response); 
            let datastring = data;
            console.log(JSON.stringify(datastring));
            
            data.alumnos.forEach(alumno => {
                let listItem = document.createElement("li")
                listItem.innerHTML= `<span><strong>Nombre:</strong> ${alumno.name} ${alumno.apellido} <span style="position:absolute; left: 300px;"><strong>Ciudad:</strong> ${alumno.ciudad}</span></span>`
                listado.appendChild(listItem);
            })
        }
        if (this.readyState == 4 && this.status == 404) { 
            console.log("No se pudo recibir la lista")
            const template = createElement("div")
            template.innerHTML="<p>No se pudo recibir la información</p>"
            document.body.appendChild(template)
        }
    }
    xhttp.send(); // enviar el llamado al API
}

AccesoAPI();