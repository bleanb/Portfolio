const boton = document.getElementById('boton-luces-proyecto');
        const body = document.getElementById('proyectos');
        const audio = document.getElementById('audio-boton-luces');

        boton.onclick = function () {
            body.classList.toggle('on');
            audio.play();
        };