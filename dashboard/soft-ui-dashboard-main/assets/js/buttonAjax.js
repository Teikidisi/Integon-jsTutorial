

 AddAutor = () =>{
    nombre = document.getElementById("nombreInp").value;
    correo = document.getElementById("correoInp").value
    foto = document.getElementById("fotoInp").value
    puesto = document.getElementById("puestoInp").value
    area = document.getElementById("areaInp").value
    fechaIngreso = document.getElementById("fechaInp").value
    estado = document.getElementById("estadoInp").value
    if (nombre =="" || correo =="" || foto =="" || puesto =="" || area =="" || fechaIngreso =="" || estado ==""){
        alert("Empty fields")
        return;
    }

    $.ajax({
        method: "POST",
        url:"http://localhost:3005/autores",
        dataType: 'json',
        contentType: "application/json",
        data:JSON.stringify({
                nombre: nombre,
                correo:  correo,
                foto:  foto,
                puesto:  puesto,
                area: area,
                fechaIngreso:  fechaIngreso,
                estado:  estado
        }),
        success: function(data){
            console.log(data);
            console.log("Success");
            loadData();
        },
        error: function(err){
            console.log(err);
        }
    })
    LoadData();
}
