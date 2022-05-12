// const fetch = require('node-fetch');

demoFetchAPI = () => {
    let url="http://localhost:3005/autores"

    fetch(url)
    .then(response => {
       return response.json();
    })
    .then((data) => {
        let autores = data.autores;
        console.log(autores)
        autores.forEach(element => {
            console.log(element.nombre)
        });
    })
    .catch((error) => {
        console.log("el servidor no está disponible")
    })
}

demoFetchAPI();