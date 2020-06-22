const Coord = require("./coord");

class Snake {
    constructor() {
        this.direction = "N";
        let startCoord = new Coord([5,5]);
        this.segments = [startCoord]; // should initially have one coord
    }
    
    move() {
        let newSeg = this.segments[0].copy();
        switch (this.direction) {
            case "N":
                newSeg.plus([0, -1]);
                break;
            case "E":
                newSeg.plus([1, 0]);
                break;
            case "S":
                newSeg.plus([0, 1]);
                break;
            case "W":
                newSeg.plus([-1, 0]);
                break;
        }
        this.segments.pop();
        this.segments.unshift(newSeg);

    }
}

module.exports = Snake;

// test
// const snake = new Snake();
// snake.move();
// snake.move();
// console.log(snake.segments);
