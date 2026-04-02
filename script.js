const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const escala = 20; // Tamaño de cada celda en píxeles

/**
 * Dibuja un punto en el canvas 
 * @param {number} x 
 * @param {number} y 
 */
function plot(x, y) {
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

function limpiartabla() {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = `
        <tr>
            <th> Paso </th>
            <th> X </th>
            <th> Y </th>
            <th> err </th>
            <th> e2 </th>
        </tr>
    `;
}

function agregarFila(paso, x, y, err,e2) {
    const tabla = document.getElementById("tabla");
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = paso;
    fila.insertCell(1).textContent = x;
    fila.insertCell(2).textContent = y;
    fila.insertCell(3).textContent = err;
    fila.insertCell(4).textContent = e2;
}

function bresenham(x0, y0, x1, y1) {

    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;
    let paso = 0;

    while (true) {
        plot(x0, y0);
        agregarFila(paso, x0, y0, err, err * 2);
        if (x0 === x1 && y0 === y1) break;


        let e2 = err * 2;
        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
        paso++;
    }
}

function dibujar(){
    let x0 = parseInt(document.getElementById("x0").value);
    let y0 = parseInt(document.getElementById("y0").value );
    let x1 = parseInt(document.getElementById("x1").value);
    let y1 = parseInt(document.getElementById("y1").value);
    limpiartabla();
    dibujarEjes();
    bresenham(x0, y0, x1, y1);
}
dibujarEjes();
