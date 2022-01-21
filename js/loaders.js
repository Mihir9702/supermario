import SpriteSheet from './sprites.js';

// Take Image and load it
export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        })
        image.src = url;
    })
}


// Take Level and load it (don't really need but for future scaleability)
export function loadLevel(name) {
    return fetch(`../levels/${name}.json`)
    .then(res => res.json())
}


// Load background from Image and create tiles
export function loadBackground() {
    return loadImage("/images/bg.png")
    .then(image => {
        // console.log("Image loaded", image);
        const sprites = new SpriteSheet(image);
        sprites.defineTile('ground', 0, 0);
        sprites.defineTile('sky', 3, 23);
        return sprites;
    });
}


// take characters spritesheet and load idle mario (need to change for mushrooms/collision)
export function loadMario() {
    return loadImage("/images/characters.gif")
    .then(image => {
        // console.log("Mario loaded", image);
        const sprites = new SpriteSheet(image);
        sprites.define('idle', 276, 44, 16, 16);
        return sprites;
    });
}


// from loaded image draw background tile at x1, y1 to x2, y2 (level.json)
export function drawBackground(background, context, sprites) {
    for (let x = background.ranges[0]; x < background.ranges[1]; x++) {
        for (let y = background.ranges[2]; y < background.ranges[3]; y++) {
            sprites.drawTile(background.tile, context, x, y);
        }
    }
}