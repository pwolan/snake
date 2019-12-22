class BoardClass {
    constructor(w, h) {
        this.width = w
        this.height = h
        this.apple
    }
    reload(S) {
        let oldCells = document.querySelectorAll('.cell')
        oldCells.forEach(cell => {
            cell.classList.remove('snake')
            cell.style.backgroundImage = ''
        })

        S.tabSnake.forEach(element => {
            const cell = document.getElementById(`${element.h}|${element.w}`)
            cell.classList.add('snake')
            cell.style.transform = ''
        });

        const head = document.getElementById(`${S.first.h}|${S.first.w}`)

        switch (S.currDirection) {
            case "top":
                head.style.backgroundImage = 'url(img/head-top.png)'
                break;
            case "left":
                head.style.backgroundImage = 'url(img/head-left.png)'
                break;
            case "bottom":
                head.style.backgroundImage = 'url(img/head-bottom.png)'
                break;
            case "right":
                head.style.backgroundImage = 'url(img/head-right.png)'
                break;
        }
        let dirChanges = []
        if (S.tabSnake.length >= 2) {
            for (let i = 0; i < S.tabSnake.length - 1; i++) {
                let toPush;
                if (S.tabSnake[i].w - S.tabSnake[i + 1].w === 1) {
                    toPush = "right"
                }
                if (S.tabSnake[i].w - S.tabSnake[i + 1].w === -1) {
                    toPush = "left"
                }
                if (S.tabSnake[i].h - S.tabSnake[i + 1].h === 1) {
                    toPush = "bottom"
                }
                if (S.tabSnake[i].h - S.tabSnake[i + 1].h === -1) {
                    toPush = "top"
                }
                dirChanges.push(toPush)
            }
        }
        for (let i = 1; i < S.tabSnake.length; i++) {
            const cell = document.getElementById(`${S.tabSnake[i].h}|${S.tabSnake[i].w}`)
            cell.style.backgroundImage = 'url(img/body.png)'
            switch (dirChanges[i - 1]) {
                case "top":
                    if (dirChanges[i] === "left") {
                        cell.style.backgroundImage = 'url(img/body-corner3.png)'
                    }
                    if (dirChanges[i] === "right") {
                        cell.style.backgroundImage = 'url(img/body-corner4.png)'
                    }
                    break;
                case "left":
                    if (dirChanges[i] === "top") {
                        cell.style.backgroundImage = 'url(img/body-corner2.png)'
                    } else if (dirChanges[i] === "bottom") {
                        cell.style.backgroundImage = 'url(img/body-corner4.png)'
                    } else {
                        cell.style.transform = 'rotate(270deg)'
                    }
                    break;
                case "bottom":
                    if (dirChanges[i] === "left") {
                        cell.style.backgroundImage = 'url(img/body-corner1.png)'
                    } else if (dirChanges[i] === "right") {
                        cell.style.backgroundImage = 'url(img/body-corner2.png)'
                    } else {
                        cell.style.transform = 'rotate(180deg)'
                    }
                    break;
                case "right":
                    if (dirChanges[i] === "top") {
                        cell.style.backgroundImage = 'url(img/body-corner1.png)'
                    } else if (dirChanges[i] === "bottom") {
                        cell.style.backgroundImage = 'url(img/body-corner3.png)'
                    } else {
                        cell.style.transform = 'rotate(90deg)'
                    }
                    break;
            }

        }
        if (S.tabSnake.length > 1) {
            const tail = document.getElementById(`${S.tabSnake[S.length-1].h}|${S.tabSnake[S.length-1].w}`)
            tail.style.backgroundImage = 'url(img/tail-bottom.png)'
        }



    }
    appleGenerate(S) {
        if (this.apple) {
            const oldApple = document.getElementById(`${this.apple.h}|${this.apple.w}`)
            oldApple.classList.remove('apple')
        }

        let w
        let h
        do {
            w = Math.floor(Math.random() * S.width)
            h = Math.floor(Math.random() * S.height)
        } while (S.tabSnake.findIndex(cell => cell.w == w && cell.h == h) !== -1)
        const appleCell = document.getElementById(`${h}|${w}`)
        appleCell.classList.add('apple')
        appleCell.style.transform = ''
        this.apple = {
            w,
            h
        }
    }
    checkApple(S) {
        return (S.first.w === this.apple.w && S.first.h === this.apple.h)
    }
    checkBorder(S) {
        const element = document.getElementById(`${S.first.h}|${S.first.w}`)
        return !element
    }
    lose(S) {
        let lose = document.createElement('h2')
        lose.textContent = `Twój wynik to: ${S.length}`
        lose.classList.add('lose')
        document.body.appendChild(lose)
    }
}