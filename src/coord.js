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

//test

// // let c1 = new Coord();
// let c2 = new Coord([2,3]);
// let c3 = c2.copy();
// c2.pos[0] = 100;
// console.log(c3.pos);