


/*-------------------------------------------------------------------*/

const botonEnviar = document.getElementById('botonEnviar');
const formulario = document.getElementById('form-contacto');

botonEnviar.addEventListener('click', function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del botón (enviar el formulario)

    botonEnviar.classList.add('clicked');

    if (validarCamposRequeridos()) {
        // Campos requeridos completos, proceder con la petición Ajax
        botonEnviar.classList.add('clicked');
        // Crear un objeto FormData con los datos del formulario
        const formData = new FormData(formulario);

        // Realizar la petición Ajax
        fetch(formulario.action, {
            method: formulario.method,
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                // Manejar la respuesta del servidor
                if (data.ok) {
                    botonEnviar.classList.remove('clicked');
                    // El formulario se envió con éxito
                    Swal.fire({
                        icon: 'success',
                        title: 'Formulario enviado!!!!',
                        text: 'Gracias por tu mensaje.',
                        background: `#007575`,
                        backdrop: `rgba(0,0,123,0.4)`,
                        allowOutsideClick: false,
                        buttonsStyling: false,
                        confirmButtonText: 'Aceptar',
                        customClass: {
                            popup: 'popup',
                            title: 'titulo-alert',
                            content: 'contenido-alert',
                            confirmButton: 'boton-alert',
                        },
                    });
                    formulario.reset();
                } else {
                    botonEnviar.classList.remove('clicked');
                    Swal.fire({
                        icon: 'error',
                        title: 'error enviando el formulario',
                        text: 'intentar mas tarde :(',
                        background: `#007575`,
                        backdrop: `rgba(0,0,123,0.4)`,
                        allowOutsideClick: false,
                        buttonsStyling: false,
                        confirmButtonText: 'Aceptar',
                        customClass: {
                            popup: 'popup',
                            title: 'titulo-alert',
                            content: 'contenido-alert',
                            confirmButton: 'boton-alert',
                        },
                    });
                    formulario.reset();
                }
            })
            .catch(error => {
                // Manejar errores de red u otros problemas
                botonEnviar.classList.remove('clicked');
                console.error('Error en la petición Ajax:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error inesperado',
                    text: 'Hubo un problema al enviar el formulario. Por favor, intenta de nuevo más tarde.',
                    background: `#007575`,
                    backdrop: `rgba(0,0,123,0.4)`,
                    iconColor: 'red',
                    allowOutsideClick: false,
                    buttonsStyling: false,
                    confirmButtonText: 'Aceptar',
                    customClass: {
                        popup: 'popup',
                        title: 'titulo-alert',
                        content: 'contenido-alert',
                        confirmButton: 'boton-alert',
                    },
                });
            });
    } else {
        console.log("Agrego la clase clicked");
        botonEnviar.classList.add("clicked");
        retraso(
            function () {
                console.log("Antes del retraso");
            },
            function () {
                console.log("Quito la clase clicked después de 1 segundo");
                botonEnviar.classList.remove("clicked");
            }
        );
        // Campos requeridos no completos, mostrar mensaje de advertencia
        Swal.fire({
            icon: "warning",
            title: "Complete el formulario!",
            background: `#007575`,
            backdrop: `rgba(0,0,123,0.4)`,
            iconColor: 'red',
            allowOutsideClick: false,
            buttonsStyling: false,
            confirmButtonText: 'Aceptar',
            customClass: {
                popup: 'popup',
                title: 'titulo-alert',
                content: 'contenido-alert',
                confirmButton: 'boton-alert',
            },
        });
    }

});

function validarCamposRequeridos() {
    const camposRequeridos = formulario.querySelectorAll('[required]');
    return Array.from(camposRequeridos).every(function (campo) {
        return campo.value.trim() !== '';
    });
}

function retraso(callbackBefore, callbackAfter) {
    if (callbackBefore) {
        callbackBefore();
    }

    setTimeout(function () {
        if (callbackAfter) {
            callbackAfter();
        }
    }, 1000); // 1000 milisegundos = 1 segundo
}

