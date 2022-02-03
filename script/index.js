const title = document.querySelector('.title')

const entryField = document.querySelector('#entryField')
const entrySubmit = document.querySelector('#entrySubmit')

const enteredDigits = document.querySelector('.enteredDigits')
const numberOfAttempts = document.querySelector('.numberOfAttempts')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

let randomNumber = Math.floor(Math.random() * 100) + 1
let count = 1
let resetButton

let userName = prompt('Введите ваше имя')

while(!userName){
    userName = prompt('Введите ваше имя')
}
title.textContent = `${userName}, добро пожаловать в игру "Угадай число"`

entrySubmit.addEventListener('click', checkEntry)

function checkEntry(e){
    e.preventDefault()
    const userNumber = Number(entryField.value)
    
    if(isNaN(userNumber)){
        return alert('Введите только числа')
    }

    if(count === 1){
        enteredDigits.textContent = 'Введеные цифры: '
    }
    
    enteredDigits.textContent += `${userNumber}, `
    numberOfAttempts.textContent = `Кол-во попыток: ${count}`

    if(userNumber === randomNumber){
        lastResult.textContent = `Поздравляю ${userName}, ты отгадал, это действительно ${randomNumber}`
        lastResult.style.background = 'green'
        lastResult.style.color = 'white'
        lowOrHi.textContent  = ''
        lowOrHi.style.background = 'transparent'
        setGameOver()
    }
    else if(count === 10){
        lastResult.textContent = '! ! GAME OVER ! !'
        lastResult.style.background = 'red'
        lowOrHi.textContent = ''
        lowOrHi.style.background = 'transparent'
        setGameOver()
    }
    else{
        lastResult.textContent = '! ! Почти ! !'
        lastResult.style.background = 'orange'
        lastResult.style.color = 'black'
        lowOrHi.textContent = userNumber > randomNumber ?
                                'Загаданное число ниже!' :
                                'Загаданное число выше!'
        lowOrHi.style.background = 'skyblue'
        lowOrHi.style.color = 'black'
    }
    count++
    entryField.value = ''
    entryField.focus()
}

function setGameOver(){
    entryField.disabled = true
    entrySubmit.disabled = true
    
    resetButton = document.createElement('button')
    resetButton.textContent = 'Играть снова'
    resetButton.classList.add('resetButton')
    document.querySelector('.params').append(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame(){
    count = 1

    entryField.disabled = false
    entrySubmit.disabled = false

    const params = document.querySelectorAll('.params p')
    params.forEach(i => i.textContent = '')
    params.forEach(i => i.style.background = 'transparent')

    document.querySelector('.params').removeChild(resetButton)
    
    entryField.value = ''
    entryField.focus()

    randomNumber = Math.floor(Math.random() * 100) + 1
} 