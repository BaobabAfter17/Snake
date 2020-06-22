const Snake = require("./snake");

class Board {
    constructor() {
        this.snake = new Snake();
    }

    turn(dir) {
        this.snake.turn(dir);
    }
}

module.exports = Board;