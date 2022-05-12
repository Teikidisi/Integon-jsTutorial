//programar signin() que lea email y pw
//validar contra el arreglo harcodeado
//si es correcto ocultar la seccion que pide logon, cambiar por usuario loggeado @email

// const fetch = require("node-fetch");

let btnSignIn = document.getElementById("btnSignIn");
let loginDiv = document.getElementById("loginDiv");
let loginSuccessDiv = document.getElementById("LogInSuccessDiv");
let loginBanner = document.getElementById("loginBanner")

let usuarios;


function demoFetchAPI(e) {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("pwInput").value;
    let url="http://localhost:3005/credenciales"
    
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then((data) => {
        cred = data.credenciales;
        let real = cred.find(element => element.email === email && element.password === password)
        if (real != undefined){
            btnSignIn.innerText="Signing in"
            loginDiv.style.display="none"
            loginBanner.style.display="none"
            loginSuccessDiv.style.color="gray"
            loginSuccessDiv.innerText = "Logging in..."
        }
    })
    .catch((error) => {
        console.log(error)
    })
}


// btnSignIn.addEventListener("click", SignIn);
// let credenciales = [
//     {
//         "email":"rodrigo@gmail.com",
//         "password":"1234a"
//     },
//     {
//         "email":"rodrigo@peralta.com",
//         "password":"asdf"
//     },
//     {
//         "email":"pepalopez@outlook.com",
//         "password":"pepita"
//     }
//     ]



// function SignIn(e){
//     let email = document.getElementById("emailInput").value;
//     let password = document.getElementById("pwInput").value;
//     console.log(email)
//     console.log(password);
//     let real = credenciales.find(element => element.email === email && element.password === password)
//         if (real != undefined){
//             btnSignIn.innerText="Signing in"
//             loginDiv.style.display="none"
//             loginBanner.style.display="none"
//             loginSuccessDiv.style.color="gray"
//             loginSuccessDiv.innerText = "Logging in..."
//         }
// }

