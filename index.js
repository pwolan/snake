//start Values
const width = 10;
const height = 10;
let boardTable = [];
for (let i = 0; i < width; i++) {
    boardTable[i] = [];
    for (let j = 0; j < height; j++) {
        boardTable[i][j] = 0;
    }
}

let snakeStart = {
    w: Math.floor(Math.random() * width),
    h: Math.floor(Math.random() * height)
};
boardTable[snakeStart.h][snakeStart.w] = 1;

let S = new Snake(boardTable)
console.log(S);
render(width, height);


console.table(boardTable);
console.log(boardTable);


document.addEventListener("keydown", e => {
    S.changeDirection(e.code)
});

let currPos = snakeStart;

setInterval(() => {
    S.step()
    console.log(S.tabSnake);
    reload(S)
}, 1000);