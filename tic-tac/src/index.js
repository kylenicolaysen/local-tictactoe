import { playTurn, resetGameMetrics } from './game'
import { resetGame } from './views'

const grid1 = document.querySelector('#one')
const grid2 = document.querySelector('#two')
const grid3 = document.querySelector('#three')

const grid4 = document.querySelector('#four')
const grid5 = document.querySelector('#five')
const grid6 = document.querySelector('#six')

const grid7 = document.querySelector('#seven')
const grid8 = document.querySelector('#eight')
const grid9 = document.querySelector('#nine')

const reset = document.querySelector('#reset-button')

grid1.addEventListener('click', () => {
    playTurn(1)
})
grid2.addEventListener('click', () => {
    playTurn(2)
})
grid3.addEventListener('click', () => {
    playTurn(3)
})
grid4.addEventListener('click', () => {
    playTurn(4)
})
grid5.addEventListener('click', () => {
    playTurn(5)
})
grid6.addEventListener('click', () => {
    playTurn(6)
})
grid7.addEventListener('click', () => {
    playTurn(7)
})
grid8.addEventListener('click', () => {
    playTurn(8)
})
grid9.addEventListener('click', () => {
    playTurn(9)
})
reset.addEventListener('click', () => {
    resetGame()
    resetGameMetrics()
})