// =========================================
// PUTRIXLAND
// Una experiencia a través de Chocho
// =========================================

// Canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Ajustar tamaño
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

// =========================================
// ESTRELLAS
// =========================================

const stars = [];

for (let i = 0; i < 180; i++) {

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        r: Math.random() * 2 + 0.5,

        speed: Math.random() * 0.4 + 0.1

    });

}

// =========================================
// DIBUJAR
// =========================================

function drawBackground(){

    // Fondo

    ctx.fillStyle = "#050014";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Estrellas

    ctx.fillStyle = "white";

    for(const s of stars){

        ctx.beginPath();

        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

        ctx.fill();

        s.y += s.speed;

        if(s.y > canvas.height){

            s.y = 0;
            s.x = Math.random()*canvas.width;

        }

    }

}

// =========================================
// LOOP
// =========================================

function animate(){

    drawBackground();

    requestAnimationFrame(animate);

}

animate();

// =========================================
// BOTÓN JUGAR
// =========================================

const playButton = document.getElementById("playButton");
const loadingScreen = document.getElementById("loadingScreen");
const characterScreen = document.getElementById("characterScreen");

if (playButton) {

    playButton.addEventListener("click", () => {

        if (loadingScreen && characterScreen) {

            loadingScreen.style.display = "none";
            characterScreen.style.display = "flex";
            
            alert("El selector debería aparecer ahora");
        } else {

            alert("⚠️ No se encontró la pantalla del selector.");

        }

    });

}
