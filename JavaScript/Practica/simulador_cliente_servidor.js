const respuestaServidor = [
    {
        id: 1,
        mensaje: "Datos recibidos correctamente",
        datos:{
            usuario: "Daniel",
            edad: 25
        }
    },
    {
        id: 2,
        mensaje: "Datos id 2",
        datos:{
            usuario: "Juan",
            edad: 22
        }
    },
    {
        id:3,
        mensaje: "Datos id 3",
        datos:{
            usuario: "Sara",
            edad:19
        }
    },
    {
        id:4,
        mensaje: "Datos id 4",
        datos:{
            usuario: "Juliana",
            edad: 24
        }
    }
    ];

document.getElementById("solicitadatos").addEventListener("click", function(){
    const inputId = parseInt(document.getElementById("inputId").value);
      // Buscar la respuesta con el id solicitado
    const respuesta = respuestaServidor.find(obj => obj.id === inputId);

    if(respuesta){
        document.getElementById("respuesta").innerHTML =`
        <strong>${respuesta.mensaje}</strong><br>
        Nombre: ${respuesta.datos.usuario}<br>
        Edad: ${respuesta.datos.edad}
        `;
    }else{
        document.getElementById("respuesta").innerHTML = "No se encontro respuesta con ese id"
    }




});