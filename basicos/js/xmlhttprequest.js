global.XMLHttpRequest = require('xhr2'); // instalacion global para usar con node.js

function AccesoAPI(){
    const url = "https://swapi.dev/api/planets/6";
    let xhttp = new XMLHttpRequest(); //crear instancia de cliente
    xhttp.open('GET', url); //abrir el request de tipo GET
    xhttp.setRequestHeader('Accept', 'application/json'); //mandar el header diciendo que vamos a enviar, una aplicacion formato json
    xhttp.onreadystatechange = function() { //cuando este listo el evento se ejecuta la funcion
        if (this.readyState == 3){
            console.log("loading...")
        }
        if (this.readyState == 4 && this.status == 200) { //si ya terminó el estado(4) y todo salio bien (200) se ejecuta
            const data = JSON.parse(this.response); 
            console.log(JSON.stringify(data));
            console.log(data.name)
        }
        if (this.readyState == 4 && this.status == 404) { 
            console.log("ese planeta no existe")
        }
    }
    xhttp.send(); // enviar el llamado al API
}

AccesoAPI();
//browser incluye xmlhttprequest por default, por eso se corre en el browser. en node debes instalar un npm