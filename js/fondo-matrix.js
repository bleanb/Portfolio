function lines() {
    let sizeW = Math.random() * 12;
    let duration = Math.random() * 3;
    let e = document.createElement('div');
    e.setAttribute('class', 'circle');
    document.querySelector('main').appendChild(e);
    e.style.width = 2 + sizeW + 'px';
    e.style.left = Math.random() * (document.querySelector('main').offsetWidth - sizeW) + 'px';
    e.style.top = 0; // Cambia 'bottom' a 'top'
    e.style.zIndex = 0;
    e.style.animationDuration = 2 + duration + 's';
    setTimeout(function () {
        document.querySelector('main').removeChild(e);
    }, 5000);
}

setInterval(function () {
    lines();
}, 200);