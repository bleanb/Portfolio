const botonPower = document.getElementById('boton-power');
const contenedorProyectos = document.getElementById('contenedor-proyectos');
const videoProyecto = document.getElementById('video-proyectos');
const videoProyecto2 = document.getElementById('video-proyectos2');
const botonLeft = document.getElementById('boton-left');
const botonRight = document.getElementById('boton-right');

botonPower.onclick = function () {
    contenedorProyectos.classList.toggle('clicked');
    if(contenedorProyectos.classList.contains('clicked')){
        fadeIn(videoProyecto,1000);
        videoProyecto.style.zIndex = '9';
        retraso3(
            function () {},
            function () {
                videoProyecto.play();
            }
        );
    }
    else{
        if(videoProyecto.style.opacity == 1){
            fadeOut(videoProyecto,1000);
            videoProyecto.pause();
            videoProyecto.style.zIndex = '-10';
            videoProyecto.currentTime = 0;
        }
        if(videoProyecto2.style.opacity == 1){
            fadeOut(videoProyecto2,1000);
            videoProyecto2.pause();
            videoProyecto2.style.zIndex = '-10';
            videoProyecto2.currentTime = 0;
        }
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

    if(contenedorProyectos.classList.contains('clicked')){
        fadeOut(videoProyecto,1000);
        videoProyecto.pause();
        retraso2(
            function () {
                
            },
            function () {
                fadeIn(videoProyecto2,1000);
                videoProyecto2.play();
                videoProyecto2.style.zIndex = '9';
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
    if(contenedorProyectos.classList.contains('clicked')){
        fadeOut(videoProyecto2,1000);
        videoProyecto2.pause();
        videoProyecto2.style.zIndex = '-100';
        retraso2(
            function () {},
            function () {
                fadeIn(videoProyecto,1000);
                videoProyecto.play();
                videoProyecto.style.zIndex = '9';
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



function retraso3(callbackBefore, callbackAfter) {
    if (callbackBefore) {
        callbackBefore();
    }
    setTimeout(function () {
        if (callbackAfter) {
            callbackAfter();
        }
    }, 100); // 1000 milisegundos = 1 segundo
}