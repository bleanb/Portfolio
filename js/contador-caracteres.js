document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('input-form2');
    const contadorCaracteres = document.querySelector('.contador-caracteres');

    textarea.addEventListener('input', function () {
        const caracteresRestantes = textarea.maxLength - textarea.value.length;
        contadorCaracteres.textContent = caracteresRestantes;

        // Puedes personalizar el estilo según tus preferencias
        if (caracteresRestantes <= 0) {
            contadorCaracteres.style.color = 'red';
        } else {
            contadorCaracteres.style.color = ''; // Restablecer el color por defecto
        }
    });
});