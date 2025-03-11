const changeSpeedBtn = document.getElementById('changeSpeedBtn');
const triangulo = document.querySelector('.triangulo');

// Función para cambiar la velocidad de la animación
let currentSpeed = 4;

function changeSpeed() {
    // Definir las nuevas velocidades
    const speeds = [1, 2, 3, 4, 5]; // Velocidades posibles
    currentSpeed = speeds[Math.floor(Math.random() * speeds.length)]; // Selección aleatoria de velocidad

    // Cambiar la duración de la animación de zigzag y de color
    triangulo.style.animationDuration = `${currentSpeed}s`;
}

// Evento al hacer clic en el botón
changeSpeedBtn.addEventListener('click', changeSpeed);
