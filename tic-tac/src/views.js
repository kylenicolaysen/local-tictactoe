
const getGridEl = (box) =>{
    switch(box) {
        case 1: return document.querySelector('#one')
        case 2: return document.querySelector('#two')
        case 3: return document.querySelector('#three')
        case 4: return document.querySelector('#four')
        case 5: return document.querySelector('#five')
        case 6: return document.querySelector('#six')
        case 7: return document.querySelector('#seven')
        case 8: return document.querySelector('#eight')
        case 9: return document.querySelector('#nine')
        default: return undefined
    }
}

const showWinBoard = (winner, boxes) => {
    const winEl =document.querySelector('#win-space')
    if (winner === 'pOne') {
        winEl.textContent = 'Player One Wins!'
        winEl.classList.add('p-one')
        boxes.forEach((box) => {
            getGridEl(box).classList.add('win-box--p1')
        })
    } else if (winner === 'pTwo') {
        winEl.textContent = 'Player Two Wins!'
        winEl.classList.add('p-two')
        boxes.forEach((box) => {
            getGridEl(box).classList.add('win-box--p2')
        })
    }
    document.querySelector('#reset-button').textContent = 'NEXT GAME'    
}
const resetGame = () => {
    const gridArray = [
        document.querySelector('#one'),
        document.querySelector('#two'),
        document.querySelector('#three'),
        document.querySelector('#four'),
        document.querySelector('#five'),
        document.querySelector('#six'),
        document.querySelector('#seven'),
        document.querySelector('#eight'),
        document.querySelector('#nine')
    ]
    gridArray.forEach((gridEl) => {
        gridEl.classList.remove('win-box--p1')
        gridEl.classList.remove('win-box--p2')
        gridEl.classList.remove('p-one')
        gridEl.classList.remove('p-two')
        gridEl.textContent = ''
        
    })
    const winEl = document.querySelector('#win-space')
    winEl.textContent = ''
    winEl.classList.remove('p-one')
    winEl.classList.remove('p-two')
    document.querySelector('#reset-button').textContent = 'RESET GAME'    
}

const fillTurnEl = (turn) => {
    const turnEl = document.querySelector('#turn-bar')
    if (turn) {
        turnEl.classList.remove('p-two--turn')
        turnEl.classList.add('p-one--turn')   
    } else {
        turnEl.classList.remove('p-one--turn')
        turnEl.classList.add('p-two--turn')
    }
    
}

export { getGridEl, showWinBoard, resetGame, fillTurnEl }