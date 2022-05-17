

 AddAutor = () =>{
    // const nombre = document.getElementById("nombreInp").value;
    const $nombre = $("#nombreInp").val();
    // const correo = document.getElementById("correoInp").value
    const $correo = $("#correoInp").val();
    // const foto = document.getElementById("fotoInp").value
    const $foto = $("#fotoInp").val();
    // const puesto = document.getElementById("puestoInp").value
    const $puesto = $("#puestoInp").val();
    // const area = document.getElementById("areaInp").value
    const $area = $("#areaInp").val();
    // const fechaIngreso = document.getElementById("fechaInp").value
    const $fechaIngreso = $("#fechaInp").val();
    // const estado = document.getElementById("estadoInp").value
    const $estado = $("#estadoInp").val();

    $('#nombreInp').blur(function(e){
        if (!$(this).val()){
            // alert("Empty name!")
            $('#addbtn').prop('disabled', true)
        } else{
            $('#addbtn').prop('disabled', false)
        }
    });
    $('#correoInp').blur(function(e){
        if (!$(this).val()){
            // alert("Empty name!")
            $('#addbtn').prop('disabled', true)
        }else{
            $('#addbtn').prop('disabled', false)
        }
    });
    $('#fotoInp').blur(function(e){
        if (!$(this).val()){
            // alert("Empty name!")
            $('#addbtn').prop('disabled', true)
        }else{
            $('#addbtn').prop('disabled', false)
        }
    });
    $('#puestoInp').blur(function(e){
        if (!$(this).val()){
            // alert("Empty name!")
            $('#addbtn').prop('disabled', true)
        }else{
            $('#addbtn').prop('disabled', false)
        }
    });
    $('#areaInp').blur(function(e){
        if (!$(this).val()){
            // alert("Empty name!")
            $('#addbtn').prop('disabled', true)
        }else{
            $('#addbtn').prop('disabled', false)
        }
    });
    $('#fechaInp').blur(function(e){
        if (!$(this).val()){
            // alert("Empty name!")
            $('#addbtn').prop('disabled', true)
        }else{
            $('#addbtn').prop('disabled', false)
        }
    });
    $('#estadoInp').blur(function(e){
        if (!$(this).val()){
            // alert("Empty name!")
            $('#addbtn').prop('disabled', true)
        }else{
            $('#addbtn').prop('disabled', false)
        }
    });


    if ( $("#nombreInp").val()||  $("#correoInp").val() || $("#fotoInp").val() || $("#puestoInp").val() || $("#areaInp").val() || $("#fechaInp").val() || $("#estadoInp").val()){
        $('#addbtn').prop('disabled', false)

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
                alert(err);
            }
        })
    } 


    LoadData();
}

$(() => {
    $('#btnAjax').click((e) => {
        $('#modalDiv').slideDown('slow');
    })

    $('#cancelAdd').click((e) => {
        $('#modalDiv').slideUp('slow');
    })
})

$(document).on("mouseenter", '.dbRow',function(e){
        $(e.target).parent().css('backgroundColor', '#6f42c147');
    }
)
$(document).on("mouseleave", '.dbRow',function(e){
    $(e.target).parent().css('backgroundColor', 'white');
    }   
)
