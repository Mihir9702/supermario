export default class SpriteSheet {
    constructor(image, width = 16, height = 16) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }
    
    // allows to create character (mario, luigi, koopa, bullet, etc...)
    define(name, x, y, width, height) {
        const buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        // drawImage(img, imgx, imgy, imgw, imgh, x, y, w, h)
        buffer.getContext('2d')
        .drawImage(this.image,
            x,
            y,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height);
            this.tiles.set(name, buffer)
        }
        
    // allows to create tile from background image (sky, ground, pipe, coin, etc...)
    defineTile(name, x, y) {
        this.define(name, x * this.width, y * this.width, this.width, this.height);
    }

    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }

    drawTile(name, context, x, y) {
        this.draw(name, context, x * this.width, y * this.height);
    }
}