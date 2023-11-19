const BotonIdioma = document.getElementById('boton-desplazable-flags');
const TextToChange = document.querySelectorAll("[data-section]");
const letra1 = document.getElementById('letra1');
const letra2 = document.getElementById('letra2');
const letra3 = document.getElementById('letra3');
const inputContacto = document.getElementById('inputContacto');
const textArea = document.getElementById('input-form2');
const inputNewsletter = document.getElementById('inputNewsletter');

const ChangeLenguaje = async (language) => {
    try {
        const requestJson = await fetch(`./lenguajes/${language}.json`);
        const texts = await requestJson.json();
        

        for (const element of TextToChange) {
            const section = element.dataset.section;
            const value = element.dataset.value;

            // Check if the section exists in the JSON data
            if (texts[language][section]) {
                // Check if the value exists in the nested section of the JSON data
                if (texts[language][section][value]) {
                    element.innerHTML = texts[language][section][value];
                } else {
                    console.error(`Translation not found for section: ${section}, value: ${value}`);
                }
            } else {
                console.error(`Translation not found for section: ${section}`);
            }
        }
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
};



BotonIdioma.onclick = function () {
    BotonIdioma.classList.toggle('active');

    if (BotonIdioma.classList.contains('active')) {
        ChangeLenguaje('en');
        letra1.innerHTML= "I";
        letra2.innerHTML= "'";
        letra3.innerHTML= "m";
        inputContacto.placeholder = 'Youremail@gmail.com';
        textArea.placeholder = 'write your message...';
        inputNewsletter.placeholder = 'Youremail@gmail.com';

    } else {
        // Call the ChangeLenguaje function with the 'es' language
        ChangeLenguaje('es');
        letra1.innerHTML= "S";
        letra2.innerHTML= "o";
        letra3.innerHTML= "y";
        inputContacto.placeholder = 'Tumail@gmail.com';
        textArea.placeholder = 'Escribe tu mensaje...';
        inputNewsletter.placeholder = 'Tumail@gmail.com';
    }
};




