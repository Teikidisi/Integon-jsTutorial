// let table = document.getElementById("tableUsers");
// let tableBody = document.getElementById("tableUsersBody");
// tableBody.innerHTML=""; //borrar todo una vez y el boton sigue insertando datos

function AddRow(){
    let arregloAutores = [new Author("John Michael","john@creative-tim.com","../assets/img/team-2.jpg","Manager","Organization","23/04/18","Online",)
                          ,new Author("Alexa Liras","alexa@creative-tim.com","../assets/img/team-3.jpg","Programator","Developer","Offline","11/01/19")]
    // let newBody = document.createElement("tbody");
    // tableBody.parentNode.replaceChild(newBody,tableBody); //borrar todo una vez, necesita refresh

    arregloAutores.forEach(autor => {
        let newRow = table.insertRow(-1);
        let newAuthor = newRow.insertCell(0);
        newAuthor.innerHTML = `<div class="d-flex px-2 py-1">
        <div>
        <img src="${autor.foto}" class="avatar avatar-sm me-3" alt="user1" />
        </div>
        <div class="d-flex flex-column justify-content-center">
        <h6 class="mb-0 text-sm">${autor.nombre}</h6>
        <p class="text-xs text-secondary mb-0">${autor.correo}m</p>
        </div>
        </div>`
    
        let newFunction = newRow.insertCell(1);
        newFunction.innerHTML = `
            <p class="text-xs font-weight-bold mb-0">${autor.puesto}</p>
            <p class="text-xs text-secondary mb-0">${autor.area}</p>`
        
        let newStatus = newRow.insertCell(2);
        if(autor.estado == "Online"){
            newStatus.innerHTML = ` <div class="align-middle text-center text-sm"><span class="badge badge-sm bg-gradient-success">Online</span></div>`
        } else{
            newStatus.innerHTML = `<div class="align-middle text-center text-sm"><span class="badge badge-sm bg-gradient-secondary">Offline</span></div>`
        }
        
        let newEmployed = newRow.insertCell(3);
        newEmployed.innerHTML = `<div class="align-middle text-center"><span class="text-secondary text-xs font-weight-bold">${autor.fechaIngreso}</span></div>`
        
        let newEdit = newRow.insertCell(4);
        newEdit.innerHTML = `
            <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                Edit
            </a>`
    })
    
}
