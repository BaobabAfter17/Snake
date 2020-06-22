const Snake = require("./snake");
const Apple = require("./apple");

class Board {
    constructor() {
        this.snake = new Snake();
        this.apple = new Apple();
    }

    turn(dir) {
        this.snake.turn(dir);
    }

    step() {
        this.snake.move();
        this.snakeEatApple();
    }

    snakePos() {
        return this.snake.segments.map( coord => coord.toLiIndex() );
    }

    applePos() {
        return this.apple.coord.toLiIndex();
    }

    lose() {
        return this.snake.hitWall() || this.snake.hitSelf();
    }

    snakeHitApple() {
        return this.snake.segments[0].equals(this.apple.coord);
    }

    snakeEatApple() {
        if (this.snakeHitApple()) {

            // setup growth in next step
            this.snake.toGrow();

            // replace with new apple
            const $apple = $(".apple");
            $apple.removeClass("apple");
            this.apple = new Apple();
        }
    }

    score() {
        return this.snake.score;
    }

}

module.exports = Board;
