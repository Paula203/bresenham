const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const escala = 20; // Tamaño de cada celda en píxeles

/**
 * Dibuja un punto en el canvas 
 * @param {number} x - Coordenada x del punto
 * @param {number} y - Coordenada y del punto
 */
function dibujarPunto(x, y) {
    ctx.fillRect(x * escala, canvas.height - y * escala, escala, escala);
}