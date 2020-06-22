/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Coord = __webpack_require__(/*! ./coord */ \"./src/coord.js\");\n\nclass Apple{\n    constructor() {\n        this.coord = new Coord();\n        this.coord.setRandomPos();\n    }\n}\n\nmodule.exports = Apple;\n\n//# sourceURL=webpack:///./src/apple.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst Apple = __webpack_require__(/*! ./apple */ \"./src/apple.js\");\n\nclass Board {\n    constructor() {\n        this.snake = new Snake();\n        this.apple = new Apple();\n    }\n\n    turn(dir) {\n        this.snake.turn(dir);\n    }\n\n    step() {\n        this.snake.move();\n        this.snakeEatApple();\n    }\n\n    snakePos() {\n        return this.snake.segments.map( coord => coord.toLiIndex() );\n    }\n\n    applePos() {\n        return this.apple.coord.toLiIndex();\n    }\n\n    lose() {\n        return this.snake.hitWall() || this.snake.hitSelf();\n    }\n\n    snakeHitApple() {\n        return this.snake.segments[0].equals(this.apple.coord);\n    }\n\n    snakeEatApple() {\n        if (this.snakeHitApple()) {\n\n            // setup growth in next step\n            this.snake.toGrow();\n\n            // replace with new apple\n            const $apple = $(\".apple\");\n            $apple.removeClass(\"apple\");\n            this.apple = new Apple();\n        }\n    }\n\n    score() {\n        return this.snake.score;\n    }\n\n}\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/coord.js":
/*!**********************!*\
  !*** ./src/coord.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Coord {\n    constructor(pos) {\n        this.pos = pos || [0, 0];\n        this.bound = 15;\n    }\n\n    plus(pos) {\n        this.pos[0] += pos[0];\n        this.pos[1] += pos[1];\n    }\n\n    equals(otherCoord) {\n        return this.pos[0] === otherCoord.pos[0] && this.pos[1] === otherCoord.pos[1];\n    }\n\n    copy() {\n        return new Coord(this.pos.slice());\n    }\n\n    toLiIndex() {\n        return this.pos[0] + this.pos[1] * 15;\n    }\n\n    isOutOfBounds() {\n        const bound = this.bound;\n        return this.pos[0] < 0 ||\n            this.pos[0] >= bound ||\n            this.pos[1] < 0 ||\n            this.pos[1] >= bound;\n    }\n\n    setRandomPos() {\n        let x = Math.floor( Math.random() * this.bound );\n        let y = Math.floor(Math.random() * this.bound);\n        this.pos = [x, y];\n    }\n}\n\nmodule.exports = Coord;\n\n//# sourceURL=webpack:///./src/coord.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SnakeView = __webpack_require__(/*! ./snake-view */ \"./src/snake-view.js\");\n\n$(() => {\n\n    const $snake = $(\".snake\");\n    const view = new SnakeView($snake);\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snake-view.js":
/*!***************************!*\
  !*** ./src/snake-view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\nclass SnakeView {\n    constructor($el) {\n        this.$el = $el;\n        this.board = new Board();\n        this.setUpGrid();\n        this.bindEvents();\n        this.startInteval();\n    }\n\n    bindEvents() {\n        $(\"body\").on(\"keydown\", event => this.handleKeyEvent(event) );\n    }\n\n    handleKeyEvent(event) {\n        switch (event.keyCode) {\n            case 37: // left\n                this.board.turn(\"W\");\n                break;\n            case 38: // up\n                this.board.turn(\"N\");\n                break;\n            case 39: // right\n                this.board.turn(\"E\");\n                break;\n            case 40: // down\n                this.board.turn(\"S\");\n                break;\n            case 32: // space\n                this.stopInteval();\n                break;\n            case 83: // S\n                this.startInteval();\n                break;\n        }\n    }\n\n    stopInteval() {\n        if (this.intVar) {\n            clearInterval(this.intVar);\n        }\n    }\n\n    startInteval() {\n        this.intVar = setInterval(() => {\n            this.step();\n        }, 200);\n    }\n\n    step() {\n        this.board.step();\n        this.render();\n        if (this.board.lose()) {\n            alert(\"You lose\");\n            clearInterval(this.intVar);\n            $(\"body\").off(\"keydown\");\n        }\n    }\n\n    setUpGrid() {\n        let $ul = $(\"<ul>\");\n        for (let i = 0; i < 15; i++) {\n            for (let j = 0; j < 15; j++) {\n                let $li = $(\"<li>\");\n                $li.data(\"pos\", [i, j]);\n                $ul.append($li);\n            }\n        }\n        this.$el.append($ul);\n    }\n\n    render() {\n        const $allLis = $(\"li\");\n\n        //show snake\n        $allLis.removeClass(\"snake-seg\");\n        this.board.snakePos().forEach( idx => {\n            let li = $allLis[idx];\n            let $li = $(li);\n            $li.addClass(\"snake-seg\");\n        })\n\n        // show apple\n        const appleIdx = this.board.applePos();\n        $($allLis[appleIdx]).addClass(\"apple\");\n\n        //show score\n        $(\".score\").text(this.board.score());\n    }\n}\n\nmodule.exports = SnakeView;\n\n//# sourceURL=webpack:///./src/snake-view.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Coord = __webpack_require__(/*! ./coord */ \"./src/coord.js\");\n\nclass Snake {\n    constructor() {\n        this.direction = \"N\";\n        let startCoord = new Coord([7, 7]);\n        this.segments = [startCoord]; // should initially have one coord\n        this.grow = false;\n        this.score = 0;\n    }\n    \n    move() {\n        const newSeg = this.frontCoord();\n        let lastSeg = this.segments.pop();\n        if (this.grow) {\n            this.segments.push(lastSeg);\n            this.score += 10;\n            this.grow = false;\n        }\n        this.segments.unshift(newSeg);\n    }\n\n    toGrow() {\n        this.grow = true;\n    }\n\n    frontCoord() {\n        let newSeg = this.segments[0].copy();\n        switch (this.direction) {\n            case \"N\":\n                newSeg.plus([0, -1]);\n                break;\n            case \"E\":\n                newSeg.plus([1, 0]);\n                break;\n            case \"S\":\n                newSeg.plus([0, 1]);\n                break;\n            case \"W\":\n                newSeg.plus([-1, 0]);\n                break;\n        }\n        return newSeg;\n    }\n\n    turn(direction) {\n        switch (this.direction) {\n            case \"N\":\n                if (direction !== 'S') {\n                    this.direction = direction;\n                }\n                break;\n            case \"E\":\n                if (direction !== 'W') {\n                    this.direction = direction;\n                }\n                break;\n            case \"S\":\n                if (direction !== 'N') {\n                    this.direction = direction;\n                }\n                break;\n            case \"W\":\n                if (direction !== 'E') {\n                    this.direction = direction;\n                }\n                break;\n        }\n    }\n\n    hitWall() {\n        return this.segments[0].isOutOfBounds();\n    }\n\n    hitSelf() {\n        let result = false;\n        let body = this.segments.slice(1);\n        body.forEach( seg => {\n            if (seg.equals(this.segments[0])) {\n                result = true;\n            }\n        });\n        return result;\n    }\n\n}\n\nmodule.exports = Snake;\n\n\n\n\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ });