const cubes = document.querySelectorAll('.text');
let rotation = 0;

function rotateCubes() {
    rotation += 90;

    cubes.forEach((cube, index) => {
        cube.style.transitionDelay = index * 0.2 + 's';
        cube.style.transform = `rotateX(${rotation}deg)`;
    });

    setTimeout(rotateCubes, 4500); // 4.5 segundos de duración de la animación
}

rotateCubes();