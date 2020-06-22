class Coord {
    constructor(pos) {
        this.pos = pos || [0, 0];
    }

    plus(pos) {
        this.pos[0] += pos[0];
        this.pos[1] += pos[1];
    }

    copy() {
        return new Coord(this.pos.slice());
    }
}

module.exports = Coord;
