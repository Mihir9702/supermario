class Vector {
    constructor(x, y) {
        this.set(x, y)
    }
    
    set(x, y) {
        this.x = x;
        this.y = y;
    }
}



export class Entity {
    constructor() {
        this.pos = new Vector(0,0);
        this.vel = new Vector(0,0);
    }

    
}