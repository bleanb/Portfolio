const botonPower = document.getElementById('boton-power');
const contenedorProyectos = document.getElementById('contenedor-proyectos');
const videoProyecto = document.getElementById('video-proyectos');
const botonLeft = document.getElementById('boton-left');
const botonRight = document.getElementById('boton-right');
const botonPlayPause = document.getElementById('boton-play-pause');
const botonIr = document.getElementById('boton-ir'); // Nuevo botón de ir

const videos = [
    { video: "./assets/video/Video1.mp4", web: "https://facebook.com.ar" },
    { video: "./assets/video/Video2.mp4", web: "https://twitter.com.ar" },
    { video: "./assets/video/Video3.mp4", web: "https://instagram.com.ar" }
    // Agrega más URL de videos y páginas web según sea necesario
];

let currentIndex = 0;
let isOn = false;
let ejecucion = 0;
let animacionEnCurso = false; // Bandera para indicar si hay una animación en curso
let flag = false;

botonPlayPause.onclick = function () {
    if (isOn) {
        if (videoProyecto.paused) {
            videoProyecto.play();
            botonPlayPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
            botonPlayPause.title = "Pausa";
        } else {
            videoProyecto.pause();
            botonPlayPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
            botonPlayPause.title = "Play";
        }
    }
    retraso3(
        function () {
            botonPlayPause.style.boxShadow = '0 0 0 #000';
        },
        function () {
            botonPlayPause.style.boxShadow = '2px 2px 2px #000';
        }
    );
};

botonPower.onclick = function () {
    isOn = !isOn; // Alternar entre encendido y apagado
    contenedorProyectos.classList.toggle('clicked');
    if (isOn) {
        botonPower.title = "Apagar";
        flag = true;
        fadeIn(videoProyecto, 1000);
        videoProyecto.style.zIndex = '9';
        updateVideo();
        flag = false;
    } else {
        botonPower.title = "Prender";
        fadeOut(videoProyecto, 1000);
        videoProyecto.pause();
        videoProyecto.style.zIndex = '-10';
        videoProyecto.currentTime = 0;
        localStorage.setItem('currentIndex', currentIndex); // Guardar el índice actual en el almacenamiento local
        setTimeout(function () {
            botonPlayPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
        }, 1000);
    }
    retraso3(
        function () {
            botonPower.style.boxShadow = '0 0 0 #000';
        },
        function () {
            botonPower.style.boxShadow = '2px 2px 2px #000';
        }
    );
};

botonLeft.onclick = function () {
    if (isOn && !animacionEnCurso) { // Verifica si no hay una animación en curso}
        animacionEnCurso = true; // Establece la animación en curso
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        updateVideo();
        setTimeout(function () {
            animacionEnCurso = false; // Restablece la animación cuando termina el fadeIn
        }, 1500); // Duración del fadeIn
        setTimeout(function () {
            botonPlayPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
        }, 1000);
        retraso3(
            function () {
                botonLeft.style.boxShadow = '0 0 0 #000';
            },
            function () {
                botonLeft.style.boxShadow = '2px 2px 2px #000';
            }
        );
    }
    retraso3(
        function () {
            botonLeft.style.boxShadow = '0 0 0 #000';
        },
        function () {
            botonLeft.style.boxShadow = '2px 2px 2px #000';
        }
    );
};

botonRight.onclick = function () {
    if (isOn && !animacionEnCurso) { // Verifica si no hay una animación en curso
        animacionEnCurso = true; // Establece la animación en curso
        currentIndex = (currentIndex + 1) % videos.length;
        updateVideo();
        setTimeout(function () {
            animacionEnCurso = false; // Restablece la animación cuando termina el fadeIn
        }, 1500); // Duración del fadeIn
        setTimeout(function () {
            botonPlayPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
        }, 1000);
        retraso3(
            function () {
                botonRight.style.boxShadow = '0 0 0 #000';
            },
            function () {
                botonRight.style.boxShadow = '2px 2px 2px #000';
            }
        );
    }
    retraso3(
        function () {
            botonRight.style.boxShadow = '0 0 0 #000';
        },
        function () {
            botonRight.style.boxShadow = '2px 2px 2px #000';
        }
    );
};

// Función para manejar el botón de ir
botonIr.onclick = function () {
    if (isOn) {
        const selectedVideo = videos[currentIndex];
        window.location.href = selectedVideo.web;
        retraso3(
            function () {
                botonIr.style.boxShadow = '0 0 0 #000';
            },
            function () {
                botonIr.style.boxShadow = '2px 2px 2px #000';
            }
        );
    }
    retraso3(
        function () {
            botonIr.style.boxShadow = '0 0 0 #000';
        },
        function () {
            botonIr.style.boxShadow = '2px 2px 2px #000';
        }
    );
};

function updateVideo() {
    if (ejecucion == 0) {
        currentIndex = 0;
        const selectedVideo = videos[currentIndex];
        videoProyecto.src = selectedVideo.video;
        // Eliminamos la línea que actualiza currentIndex aquí
        ejecucion = 1;
        setTimeout(function () {
            videoProyecto.play(); // Restablece la animación cuando termina el fadeIn
            botonPlayPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
        }, 1500);
    }
    else {
        if (flag == true) {
            const selectedVideo = videos[currentIndex];
            videoProyecto.src = selectedVideo.video;
            setTimeout(function () {
                videoProyecto.play(); // Restablece la animación cuando termina el fadeIn
                botonPlayPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
            }, 1500);
        }
        else {
            const selectedVideo = videos[currentIndex];
            fadeOut(videoProyecto, 1000);
            setTimeout(function () {
                videoProyecto.src = selectedVideo.video;
                videoProyecto.style.opacity = 0;
                fadeIn(videoProyecto, 1000);
                setTimeout(function () {
                    videoProyecto.play(); // Restablece la animación cuando termina el fadeIn
                    botonPlayPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
                }, 1500);
                // Eliminamos la línea que actualiza currentIndex aquí
            }, 1000);
        }
    }
}

function retraso3(callbackBefore, callbackAfter) {
    if (callbackBefore) {
        callbackBefore();
    }
    setTimeout(function () {
        if (callbackAfter) {
            callbackAfter();
        }
    }, 100); // 100 milisegundos
}

function fadeIn(elemento, duracion) {
    var opacidad = 0;
    var intervalo = 50; // Intervalo de tiempo en milisegundos
    var paso = intervalo / duracion;

    var fadeInterval = setInterval(function () {
        if (opacidad < 1) {
            opacidad += paso;
            elemento.style.opacity = opacidad;
        } else {
            clearInterval(fadeInterval);
        }
    }, intervalo);
}

function fadeOut(elemento, duracion) {
    var opacidad = 1;
    var intervalo = 50; // Intervalo de tiempo en milisegundos
    var paso = intervalo / duracion;

    var fadeInterval = setInterval(function () {
        if (opacidad > 0) {
            opacidad -= paso;
            elemento.style.opacity = opacidad;
        } else {
            clearInterval(fadeInterval);
        }
    }, intervalo);
}

// Configurar controles de video
videoProyecto.controls = true;

// Al cargar la página, verificar si hay un índice guardado en el almacenamiento local y usarlo para establecer el índice actual
window.onload = function () {
    const savedIndex = localStorage.getItem('currentIndex');
    if (savedIndex !== null) {
        currentIndex = parseInt(savedIndex);
    }
};
