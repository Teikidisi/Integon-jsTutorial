
function AddRow(){
    let table = document.getElementById("tableUsers");
    let tableBody = document.getElementById("tableUsersBody");

    let newRow = table.insertRow(-1);
    let newAuthor = newRow.insertCell(0);
    newAuthor.innerHTML = `<div class="d-flex px-2 py-1">
    <div>
    <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1" />
    </div>
    <div class="d-flex flex-column justify-content-center">
    <h6 class="mb-0 text-sm">Rodrigo Peralta</h6>
    <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
    </div>
    </div>`

    let newFunction = newRow.insertCell(1);
    newFunction.innerHTML = `
        <p class="text-xs font-weight-bold mb-0">CEO</p>
        <p class="text-xs text-secondary mb-0">Organization</p>`

    let newStatus = newRow.insertCell(2);
    newStatus.innerHTML = ` <div class="align-middle text-center text-sm"><span class="badge badge-sm bg-gradient-success">Online</span></div>`
    
    let newEmployed = newRow.insertCell(3);
    newEmployed.innerHTML = `<div class="align-middle text-center"><span class="text-secondary text-xs font-weight-bold">10/01/22</span></div>`
    
    let newEdit = newRow.insertCell(4);
    newEdit.innerHTML = `
        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            Edit
        </a>`


    tableBody.innerHTML+= `<tr>
    <td>
    <div class="d-flex px-2 py-1">
        <div>
        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1" />
        </div>
        <div class="d-flex flex-column justify-content-center">
        <h6 class="mb-0 text-sm">Rodrigo Peralta</h6>
        <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
        </div>
    </div>
    </td>
    <td>
    <p class="text-xs font-weight-bold mb-0">CEO</p>
    <p class="text-xs text-secondary mb-0">Organization</p>
    </td>
    <td class="align-middle text-center text-sm">
    <span class="badge badge-sm bg-gradient-success">Online</span>
    </td>
    <td class="align-middle text-center">
    <span class="text-secondary text-xs font-weight-bold">10/01/22</span>
    </td>
    <td class="align-middle">
    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
    </a>
    </td>
</tr>`;

}

