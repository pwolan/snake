//start Values
const width = 10;
const height = 10;
const Board = new BoardClass(width, height)
let S = new Snake(Board)
let start = false

render(width, height);

Board.appleGenerate(S)
Board.reload(S)

let interval = setInterval(() => {
    if (!start) return
    S.step()
    if (Board.checkApple(S)) {
        S.length++
        Board.appleGenerate(S)
    }
    if (Board.checkBorder(S) || S.checkSnakeCollision()) {
        clearInterval(interval)
        Board.lose(S)
    } else {
        S.controlLength()
        Board.reload(S)
    }
}, 200);

document.addEventListener("keydown", e => {
    start = true
    S.changeDirection(e.code)
});

document.getElementById('reload').addEventListener('click', () => {
    document.location.reload(true)
})