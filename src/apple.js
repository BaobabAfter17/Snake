const Coord = require("./coord");

class Apple{
    constructor() {
        this.coord = new Coord();
        this.coord.setRandomPos();
    }
}

module.exports = Apple;