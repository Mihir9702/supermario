import { Entity }  from './entity.js';
import { loadMario } from './loaders.js';



// Create Mario from tilesheet
export function createMario() {
    return loadMario()
    .then(sprites => {
        const gravity = 0.5;

        // set x & y
        const mario = new Entity();

        mario.pos.set(64, 552);
        mario.vel.set(5, -10);

        // Jump Logic
        mario.update = function updateMario() {

            // document.addEventListener("keydown", key => {
            //     console.log(key);
            //     if (key.code === "Space" && this.pos.y >= 552) {
            //     }
            // })

            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
            this.vel.y += gravity;



        }
        mario.draw = function drawMario(context) {
            sprites.draw('idle', context, this.pos.x, this.pos.y);
        }

        return mario;
    });
}


    