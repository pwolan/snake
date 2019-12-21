//start Values
const width = 10;
const height = 10;
const Board = new BoardClass(width, height)
let S = new Snake(Board.table)

console.log(S);
console.log(Board);
render(width, height);

Board.appleGenerate(S)

document.addEventListener("keydown", e => {
    S.changeDirection(e.code)
});

Board.reload(S)
let interval = setInterval(() => {
    S.step()
    if (Board.checkApple(S)) {
        S.length++
        Board.appleGenerate(S)
    }
    if (Board.checkBorder(S) || S.checkSnakeCollision()) {
        clearInterval(interval)
        alert('Przegrana. Spróbuj jeszcze raz!')
    } else {
        S.controlLength()
        Board.reload(S)
    }
}, 300);

document.getElementById('reload').addEventListener('click', () => {
    document.location.reload(true)
})