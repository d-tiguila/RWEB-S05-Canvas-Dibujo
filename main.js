const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Go-Diego-go 🐆
// x - 511
// y  - 340

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 7;
ctx.moveTo(562, 396);
ctx.lineTo(562, 455);
ctx.stroke();

function dibujarCirculo(y) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.ellipse(562, y, 13, 13, 0, 0, Math.PI*2);
    ctx.stroke();
}

dibujarCirculo(470);
dibujarCirculo(470+50);
dibujarCirculo(470+(50*2));
dibujarCirculo(470+(50*3));

function dibujarLineas(y) {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 7;
    ctx.moveTo(562, y);
    ctx.lineTo(562, y+50-21);
    ctx.stroke();
}

dibujarLineas(480);
dibujarLineas(480+50);
dibujarLineas(480+(50*2));

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 7;
ctx.moveTo(562, 480+(50*3));
ctx.lineTo(562, 480+(50*3)+50);
ctx.stroke();




function dibujarRombos(y) {
ctx.save();
ctx.translate(630 + 45 / 2, y + 45 / 2);
ctx.rotate(Math.PI/4);    
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 6;
ctx.rect(-45 / 2, -45 / 2, 40, 40);
ctx.stroke();
ctx.restore();
}

dibujarRombos(396);
dibujarRombos(396+(35*1));
dibujarRombos(396+(35*2));
dibujarRombos(396+(35*3));

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.ellipse(562, 370, 6, 6, 0, 0, Math.PI*2);
ctx.fill();





