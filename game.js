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
// =========================================
// PERSONAJES
// =========================================

const characters = [

    {
        name: "XUXI",
        image: "assets/sprites/Selector_xuxi.PNG"
    },

    {
        name: "CHOCHO",
        image: "assets/sprites/Selector_chocho.jpg"
    },

    {
        name: "CARLITOS",
        image: "assets/sprites/Selector_carlitos.PNG"
    },

    {
        name: "KIYIXXX",
        image: "assets/sprites/Selector_kiyixxx.jpg"
    },

    {
        name: "MAMASITA",
        image: "assets/sprites/Selector_mamasita.PNG"
    },

    {
        name: "REVELUVIOSA",
        image: "assets/sprites/Selector_reveluviosa.PNG"
    },

    {
        name: "SRTA MARICONXXX",
        image: "assets/sprites/Selector_srta_mariconxxx.PNG"
    },

    {
        name: "XOXO",
        image: "assets/sprites/Selector_xoxo.PNG"
    }

];

let currentCharacter = 0;

const selectorImage = document.getElementById("selectorImage");
const characterName = document.getElementById("characterName");

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

function updateCharacter(){

    selectorImage.src = characters[currentCharacter].image;

    characterName.textContent = characters[currentCharacter].name;

}

// =========================================
// FLECHA DERECHA
// =========================================

rightButton.addEventListener("click", () => {

    currentCharacter++;

    if (currentCharacter >= characters.length) {

        currentCharacter = 0;

    }

    updateCharacter();

});

// =========================================
// FLECHA IZQUIERDA
// =========================================

leftButton.addEventListener("click", () => {

    currentCharacter--;

    if (currentCharacter < 0) {

        currentCharacter = characters.length - 1;

    }

    updateCharacter();

});

if (playButton) {

    playButton.addEventListener("click", () => {

        if (loadingScreen && characterScreen) {

            loadingScreen.style.display = "none";
            characterScreen.style.display = "flex";
            
        } else {

            alert("⚠️ No se encontró la pantalla del selector.");

        }

    });

}
