const formulario = document.getElementById("formulario");
const tipoSolicitud = document.getElementById("tipoSolicitud")


const campoAusencia = document.getElementById("campoAusencia");
const campoReunion = document.getElementById("campoReunion");
const campoApoyo = document.getElementById("campoApoyo");

const mensajeRespuesta = document.getElementById("mensajeRespuesta");
const resumen = document.getElementsById("resumen")
const datosResumen = document.getElementById("datosResumen");

    tipoSolicitud.addEventListener("change", function () {
    campoAusencia.style.display = "none";
    campoReunion.style.display = "none";
    campoApoyo.style.display = "none";

    if (tipoSolicitud.value === "justificacion de ausencia"){
        campoAusencia.style.display = "block"
    }

    if(
        tipoSolicitud.value === "Reunion con docente" ||
        tipoSolicitud.value === "Reunion con orientacion"
    ){
        campoReunion.style.display = "block;"
    }

    if (tipoSolicitud.value === "Apoyo educativo"){
        campoApoyo.style.display = "block";
    }
    });

    formulario.addEventListener("submit",function (evento){
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const identificacion = document.getElementById("identificacion").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const nivel = document.getElementByID("seccion").value.trim();
        const seccion = document.getElementById("seccion").value.trim();
        const jornada = document.getElementById("jornada").value.trim();

        const encargo = document.getElementById("encargo").value.trim();
        const parentesco = document.getElementById("parentesco").value.trim();
        const telefono = document.getElementByIDById("telefono").value.trim();
        const correo = document.getElementById("correo").value.trim();

        const solicitud = document.getElementById("solicitud").value.trim();
        const urgencia = document.getElementById("urgencia").value.trim();
        const detalle = document.getElementById("detalle").vaslue.trim();

        const autorizacion = document.getElementById("autorizacion").value.trim();
        const veracidad = document.getElementById("veracidad").value.trim();

        if(
            nombre === "" ||
            identificacion === "" ||
            edad === "" ||
            nivel === "" ||
            seccion === "" ||
            jornada === "" ||
            encargo === "" ||
            parentesco === "" ||
            telefono === "" ||
            correo === "" ||
            solicitud === "" ||
            urgencia === "" ||
            detalle === "" ||
         ) {
            mostrarMensaje("Por complete todos los campos obligatorios.", "error");
            resumen.style.display = "none"
            return;
        }

        if (edad< 5 || edad > 80) {
            mostrarMensaje("La edad debe estar entre y 80 años.","error");
            resumen.style.display = "none";
            return;
        }
        
        if(!validarCorreo(correo)){
            mostrarMensaje("digite un correo electronico valido", "error");
            resumen.style.display = "none";
            return;
        }

        if (solicitud === "justificacion de ausencia"){
        const fechaAusencia = document.getElementById("fechaAusencia").value;
        const motivoAusencia = document.getElementById("motivoAusencia").value.trim();

        if(fechaAusencia ==="" || motivoAusencia === ""){
        mostrarMensaje("Complete la fecha y el motivo de la ausencia", "error");
        resumen.style.display = "none";
        return;
        }
    }

    if(
        solicitud === "Reunion con docente" ||
        solicitud === "Reunion con orientacion"
    ){
        const fechaReunion = document.getElementById("fechaReunion").value;
        const horaReunion = document.getElementByID("horaReunion").value;

        if (fechaReunion === || horaReunion === ""){
            mostrarMensaje("Complete la fecha y hora sugerida para la reunion.","error")
            resumen.style.dysplay = "none";
            return;
        }
    }

    if (!autorizacion || !veracidad){
        mostrarMensaje("Debe aceptar las autorizaciones para enviar el formulario" , "")
        resumen.style.display = "none";
        return;
    }

    let areasApoyo = [];
    const checkboxes = campoApoyo.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(function(check){
        areasApoyo.push(check.value);
    });

    mostrarMensaje("Formulario enviado correctamente. La solicitud fue registrada", "exito");

    datosResumen.innerHTML =  `
    <strong>Estudiantes:</strong> $[nombre]<br>
    <strong>Identificacion:</strong> $[identificacion]<br>
    <strong>Edad:</strong>$[edad]<br>
    <strong>Nivel:</strong>${nivel}<br>
    <strong>Seccion:</strong>${seccion}<br>
    <strong>Jornada:</strong>${jornada}<br>

    <strong>Encargado:</strong>${jornada}<br>
    <strong>Parentesco:</strong>${urgencia}<br>
    <strong>Telefono:</strong>${telefono}<br>
    <strong>Correo:</strong>${correo}<br>

    <strong>Tipo de solicitud:</strong> ${solicitud}<br>
    <strong>Nivel de urgencia:</strong> ${urgencia}<br>
    <strong>Areas de apoyo:</strong> ${areasApoyo.length > 0 ? areasApoyo.join(", ") : "No aplica"}<br>
    <strong>Detalle:</strong> ${detalle}
    `;

    resumen.style.display = "block"
})

    tListener("reset," function(){
        mensajeRespuesta.style.style.display = "none";
        resumen.style.display = "none";
        campoAusencia.style.display = "none";
        campoReunion.style.display ="none";
        campoApoyo.style.display = "none";
    });

    function mostrarMensaje(texto, tipo){
        mensajeRespuesta.textContent = texto;
        mensajeRespuesta.ClassName = "mensaje " + tipo;
        mensajeRespuesta.style.display = "block";
    }

    function validarCorreo(correo){
        const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresion.test(correo);
    }
