class Snake {
    constructor(board) {
        this.tabSnake = [];
        this.currDirection = "top";
        this.lenght;
        this.first;
        this.width = board.length;
        this.height = board[0].length;
        this.init();
    }
    init() {
        this.first = {
            w: Math.floor(this.width / 2),
            h: Math.floor(this.height / 2)
        };
        this.tabSnake.push(this.first)
        this.length = 4
    }
    changeDirection(code) {
        switch (code) {
            case "KeyW":
                if (this.currDirection !== "bottom")
                    this.currDirection = "top";
                break;
            case "KeyA":
                if (this.currDirection !== "right")
                    this.currDirection = "left";
                break;
            case "KeyS":
                if (this.currDirection !== "top")
                    this.currDirection = "bottom";
                break;
            case "KeyD":
                if (this.currDirection !== "left")
                    this.currDirection = "right";
                break;
            default:
                break;
        }
    }
    step() {
        let newPos = {
            ...this.first
        };
        switch (this.currDirection) {
            case "top":
                newPos.h = newPos.h - 1;
                break;
            case "left":
                newPos.w = newPos.w - 1;
                break;
            case "bottom":
                newPos.h = newPos.h + 1;
                break;
            case "right":
                newPos.w = newPos.w + 1;
                break;
            default:
                break;
        }
        this.first = newPos
        this.tabSnake.unshift(newPos)

    }
    controlLength() {
        this.tabSnake = this.tabSnake.slice(0, this.length)
    }
    checkSnakeCollision() {
        let tabToSearch = [...this.tabSnake]
        tabToSearch.shift()
        let find = tabToSearch.findIndex(cell => cell.w === this.first.w && cell.h === this.first.h)
        return find !== -1
    }
}