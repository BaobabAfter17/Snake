const Board = require("./board");

class SnakeView {
    constructor($el) {
        this.$el = $el;
        this.board = new Board();
        this.bindEvents();
        // setInterval(this.step, 500);

    }

    bindEvents() {
        $("body").on("keydown", event => this.handleKeyEvent(event) );
    }

    handleKeyEvent(event) {
        switch (event.keyCode) {
            case 37: // left
                this.board.turn("W");
                break;
            case 38: // up
                this.board.turn("N");
                break;
            case 39: // right
                this.board.turn("E");
                break;
            case 40: // down
                this.board.turn("S");
                break;
        }
    }
}

module.exports = SnakeView;