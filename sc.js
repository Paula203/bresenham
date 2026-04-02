const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const escala = 20; // Tamaño de cada celda en píxeles

/**
 * Dibuja un punto en el canvas 
 * @param {number} x 
 * @param {number} y 
 */
function dibujarPunto(x, y) {
    ctx.fillRect(x * escala, canvas.height - y * escala, escala, escala);
}

function dibujarEjes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);

    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);

    ctx.stroke();

    for (let i=0; i<20; i++) {
        ctx.fillText(i, i * escala, canvas.height - 5);
        ctx.fillText(i, 5, canvas.height - i * escala);
    }
}