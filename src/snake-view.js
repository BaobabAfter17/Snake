const Board = require("./board");

class SnakeView {
    constructor($el) {
        this.$el = $el;
        this.board = new Board();
        this.setUpGrid();
        this.bindEvents();
        this.startInteval();
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
            case 32: // space
                this.stopInteval();
                break;
            case 83: // S
                this.startInteval();
                break;
        }
    }

    stopInteval() {
        if (this.intVar) {
            clearInterval(this.intVar);
        }
    }

    startInteval() {
        this.intVar = setInterval(() => {
            this.step();
        }, 200);
    }

    step() {
        this.board.step();
        this.render();
        if (this.board.lose()) {
            alert("You lose");
            clearInterval(this.intVar);
            $("body").off("keydown");
        }
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

        //show snake
        $allLis.removeClass("snake-seg");
        this.board.snakePos().forEach( idx => {
            let li = $allLis[idx];
            let $li = $(li);
            $li.addClass("snake-seg");
        })

        // show apple
        const appleIdx = this.board.applePos();
        $($allLis[appleIdx]).addClass("apple");

        //show score
        $(".score").text(this.board.score());
    }
}

module.exports = SnakeView;