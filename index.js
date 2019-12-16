//start Values
const width = 10
const height = 10
const boardTable = []
for (let i = 0; i < width; i++) {
    boardTable[i] = []
    for (let j = 0; j < height; j++) {
        boardTable[i][j] = 0
    }
}

render(width, height)

let snakeStart = {
    w: Math.floor(Math.random() * width),
    h: Math.floor(Math.random() * height)
}
boardTable[snakeStart.w][snakeStart.h] = 1

let start = document.getElementById(`${snakeStart.w}|${snakeStart.h}`)

start.classList.add('snake')

// console.table(boardTable);

