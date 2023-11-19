let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let animating = false; // Variable para rastrear si la animación está en progreso

function animateRight(element, targetValue, duration) {
    const initialValue = parseInt(getComputedStyle(element).right);
    const startTime = performance.now();

    function update(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentValue = initialValue + (targetValue - initialValue) * progress;
        element.style.right = currentValue + 'px';

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            animating = false;
        }
    }

    requestAnimationFrame(update);
}

toggle.onclick = function () {
    if (!animating) {
        animating = true;
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            animateRight(menu, -100, 1800);
        } else {
            menu.classList.add('active');
            animateRight(menu, 10, 500);
        }
    }
};
