function generateUI(){
    let divPrincipal = document.getElementById("contenido")
    let boton1 = document.createElement("button")
    let boton2 = document.createElement("button")
    boton1.innerText="Boton 1";
    boton2.innerText="Boton 2";

    divPrincipal.appendChild(boton1);
    divPrincipal.appendChild(boton2);

    boton1.addEventListener("click", e => {
        console.log("Boton 1 clicked");
    });
    boton2.addEventListener("click", clickGeneral);
}

function clickGeneral(){
    alert("Click general")
}