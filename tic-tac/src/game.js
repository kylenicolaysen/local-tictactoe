import { getGridEl, showWinBoard, fillTurnEl } from './views'

const winners = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

let pOne = {
    boxes: [],
    wins: 0
}
let pTwo = {
    boxes: [],
    wins: 0
}
let turn = true
let gameOver = false

const playTurn = (box) => {
    let status
    if (gameOver || pOne.boxes.includes(box) || pTwo.boxes.includes(box)) {
        console.log(pOne.boxes)
        return
    }
    const gridEl = getGridEl(box)
    if (turn) {
        gridEl.classList.add('p-one')
        gridEl.textContent = 'X'
        pOne.boxes.push(box)
        status = checkWin(pOne)
        if (status) {
            showWinBoard('pOne', status)
            winGame('pOne')

        }
    } else {
        gridEl.classList.add('p-two')
        gridEl.textContent = 'O'
        pTwo.boxes.push(box)
        status = checkWin(pTwo)
        if (status) {
            showWinBoard('pTwo', status)
            winGame('pTwo')
        }
    }
    turn = !turn
    fillTurnEl(turn)

}

const checkWin = (curPlayer) => {
    const y = winners.find((winOpt) => {
        return winOpt.every((a) => {
            return curPlayer.boxes.includes(a)
        })

    })
    return y
} 

const winGame = (winner) => { 
    gameOver = true  
    if (winner === 'pOne') {
        let winStars = ''
        pOne.wins += 1
        for (let x=1; x<=pOne.wins; x++) {
            winStars += '*'
        }
        document.querySelector('#p-one-wins').textContent = winStars
    } else if (winner === 'pTwo') {
        let winStars = ''
        pTwo.wins += 1
        for (let x=1; x<=pTwo.wins; x++) {
            winStars += '*'
        }
        document.querySelector('#p-two-wins').textContent = winStars
    }
    pOne.boxes = []
    pTwo.boxes = []
}
const resetGameMetrics = () => {
    gameOver = false
    pOne.boxes = []
    pTwo.boxes = []
}

fillTurnEl(turn)

export { playTurn, resetGameMetrics }
