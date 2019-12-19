class BoardClass {
    constructor(w, h) {
        this.width = w
        this.height = h
        this.table = []
        this.apple
        this.init()
    }
    init() {
        for (let i = 0; i < width; i++) {
            this.table[i] = [];
            for (let j = 0; j < height; j++) {
                this.table[i][j] = 0;
            }
        }
    }
    reload(S) {
        let oldCells = document.querySelectorAll('.cell')
        oldCells.forEach(cell => {
            cell.classList.remove('snake')
        })

        S.tabSnake.forEach(element => {
            const cell = document.getElementById(`${element.h}|${element.w}`)
            cell.classList.add('snake')
        });

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
        this.apple = {
            w,
            h
        }
    }
    checkApple(S) {
        return (S.first.w === this.apple.w && S.first.h === this.apple.h)
    }
}