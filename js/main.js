import { drawBackground, loadLevel, loadBackground } from './loaders.js';
import { createMario } from './mario.js';

const canvas = document.getElementById('mario');
const context = canvas.getContext('2d');



// Promise.all([array of Promise chains])
Promise.all([
    loadBackground(),
    loadLevel('1-1'),
    createMario(),
]) // Then draw tile from tileset in canvas
.then(([sprites, level, mario]) => {



    function update() {
        // Clear Fade
        context.clearRect(0,0, canvas.width, canvas.height);

        // Draw Background
        level.backgrounds.forEach(bg => drawBackground(bg, context, sprites));

        // Draw Mario
        mario.update();
        mario.draw(context);

        requestAnimationFrame(update);
    }
    update();

})

