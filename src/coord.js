class Coord {
    constructor(pos) {
        this.pos = pos || [0, 0];
        this.bound = 15;
    }

    plus(pos) {
        this.pos[0] += pos[0];
        this.pos[1] += pos[1];
    }

    equals(otherCoord) {
        return this.pos[0] === otherCoord.pos[0] && this.pos[1] === otherCoord.pos[1];
    }

    copy() {
        return new Coord(this.pos.slice());
    }

    toLiIndex() {
        return this.pos[0] + this.pos[1] * 15;
    }

    isOutOfBounds() {
        const bound = this.bound;
        return this.pos[0] < 0 ||
            this.pos[0] >= bound ||
            this.pos[1] < 0 ||
            this.pos[1] >= bound;
    }

    setRandomPos() {
        let x = Math.floor( Math.random() * this.bound );
        let y = Math.floor(Math.random() * this.bound);
        this.pos = [x, y];
    }
}

module.exports = Coord;