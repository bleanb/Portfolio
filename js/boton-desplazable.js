const botonDesplazable = document.getElementById('boton-desplazable');
const clock = document.getElementById('reloj');
const audioBoton = document.getElementById('audio-boto-slide');
const audioClock = document.getElementById('audio-clock');
const OnOffAudioBoton = document.getElementById('contenedor-icono-volumen');
const AudioOn = document.getElementById('volumen-on');
const AudioOff = document.getElementById('volumen-off');


        botonDesplazable.onclick = function () {
            botonDesplazable.classList.toggle('active');
            audioBoton.play();
            OnOffAudioBoton.style.display = 'flex';
            fadeIn(AudioOn, 1000);
            OnOffAudioBoton.onclick = function () {
                OnOffAudioBoton.classList.toggle('active');
                if(OnOffAudioBoton.classList.contains('active')){
                    AudioOn.style.opacity = '0';
                    AudioOff.style.opacity = '1';
                    audioClock.pause();
                }else{
                    AudioOn.style.opacity = '1';
                    AudioOff.style.opacity = '0'
                    audioClock.loop = true;
                    audioClock.play();
                }
            };
            retraso2(
                    function () {
                        
                    },
                    function () {
                        if (botonDesplazable.classList.contains('active')) {
                // El botón está activado
                fadeIn(clock, 1000);
                clock.style.zIndex = '1';
                audioClock.loop = true;
                audioClock.play();
            } else {
                // El botón está desactivado
                retraso(
                    function () {
                        fadeOut(clock, 1000); //Antes del retraso
                        fadeOut(AudioOn, 1000);
                        fadeOut(AudioOff, 1000);
                        audioClock.pause();
                    },
                    function () {
                        clock.style.zIndex = '-1'; //Despues del retraso
                    }
                );
            }
                    }
                );
        };

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

        function retraso2(callbackBefore, callbackAfter) {
            if (callbackBefore) {
                callbackBefore();
            }

            setTimeout(function () {
                if (callbackAfter) {
                    callbackAfter();
                }
            }, 500); // 1000 milisegundos = 1 segundo
        }