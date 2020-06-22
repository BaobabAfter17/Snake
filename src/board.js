const Snake = require("./snake");

class Board {
    constructor() {
        this.snake = new Snake();
    }

    turn(dir) {
        this.snake.turn(dir);
    }

    step() {
        this.snake.move();
    }

    snakePos() {
        return this.snake.segments.map( coord => coord.toLiIndex() );
    }

}

module.exports = Board;
