const Board = require("./board");

class SnakeView {
    constructor($el) {
        this.$el = $el;
        this.board = new Board();
        this.setUpGrid();
        this.bindEvents();
        setInterval( () => {
            this.step();
        }, 500);
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

    step() {
        this.board.step();
        this.render();
    }

    setUpGrid() {
        let $ul = $("<ul>");
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                let $li = $("<li>");
                $li.data("pos", [i, j]);
                $ul.append($li);
            }
        }
        this.$el.append($ul);
    }

    render() {
        const $allLis = $("li");
        $allLis.removeClass("snake-seg");
        this.board.snakePos().forEach( idx => {
            let li = $allLis[idx];
            let $li = $(li);
            $li.addClass("snake-seg");
        })
    }
}

module.exports = SnakeView;