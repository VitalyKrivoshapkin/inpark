const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-=+*/#$@%&';
const fontSize = 10;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1; // Initialize drop positions
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Slightly transparent black
    ctx.fillRect(0, 0, canvas.width, canvas.height); // "Fade" previous text

    ctx.fillStyle = '#0f0'; // Green text
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Reset drop to the top
        }
        drops[i]++;
    }
}

setInterval(draw, 33); // Roughly 30 frames per second