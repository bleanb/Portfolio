const boton = document.getElementById('boton-luces-proyecto');
const body = document.getElementById('proyectos');
const audio = document.getElementById('audio-boton-luces');
const tv = document.getElementById('contenedor-proyectos');
const controlRemoto = document.getElementById('control-remoto');


boton.onclick = function () {
    body.classList.toggle('on');
    audio.play();

    if (body.classList.contains('on')) {
        fadeIn(tv, 1000);
        fadeIn(controlRemoto, 1000);
        controlRemoto.style.display = 'flex';
        tv.style.display = 'flex';
        controlRemoto.style.zIndex = '9';
        tv.style.zIndex = '9';
        tv.style.animation = 'agrandar 1s linear forwards';
    } else {
        fadeOut(tv, 1000);
        fadeOut(controlRemoto, 1000);
        controlRemoto.style.display = 'none';
        tv.style.display = 'none';
        controlRemoto.style.zIndex = '-100';
        tv.style.zIndex = '-100';
        tv.style.animation = 'achicar 1s linear forwards';
        if(contenedorProyectos.classList.contains('clicked')){
            contenedorProyectos.classList.remove('clicked');
            videoProyecto.pause();
            videoProyecto2.pause();
            videoProyecto.currentTime = 0;
            videoProyecto2.currentTime = 0;
            fadeOut(videoProyecto, 1000);
            fadeOut(videoProyecto2, 1000);
        }
    }
};
