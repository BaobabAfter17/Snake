const Coord = require("./coord");

class Snake {
    constructor() {
        this.direction = "N";
        let startCoord = new Coord([7, 7]);
        this.segments = [startCoord]; // should initially have one coord
        this.grow = false;
        this.score = 0;
    }
    
    move() {
        const newSeg = this.frontCoord();
        let lastSeg = this.segments.pop();
        if (this.grow) {
            this.segments.push(lastSeg);
            this.score += 10;
            this.grow = false;
        }
        this.segments.unshift(newSeg);
    }

    toGrow() {
        this.grow = true;
    }

    frontCoord() {
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
        return newSeg;
    }

    turn(direction) {
        switch (this.direction) {
            case "N":
                if (direction !== 'S') {
                    this.direction = direction;
                }
                break;
            case "E":
                if (direction !== 'W') {
                    this.direction = direction;
                }
                break;
            case "S":
                if (direction !== 'N') {
                    this.direction = direction;
                }
                break;
            case "W":
                if (direction !== 'E') {
                    this.direction = direction;
                }
                break;
        }
    }

    hitWall() {
        return this.segments[0].isOutOfBounds();
    }

    hitSelf() {
        let result = false;
        let body = this.segments.slice(1);
        body.forEach( seg => {
            if (seg.equals(this.segments[0])) {
                result = true;
            }
        });
        return result;
    }

}

module.exports = Snake;



