const entryField = document.querySelector('#entryField')
const entrySubmit = document.querySelector('#entrySubmit')

const enteredDigits = document.querySelector('.enteredDigits')
const numberOfAttempts = document.querySelector('.numberOfAttempts')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

let randomNumber = Math.floor(Math.random() * 100) + 1
let count = 1
let resetButton

entrySubmit.addEventListener('click', checkEntry)

function checkEntry(e){
    e.preventDefault()
    const userNumber = Number(entryField.value)
    console.log(randomNumber)
    if(count === 1){
        enteredDigits.textContent = 'Введеные цифры: '
    }
    
    enteredDigits.textContent += `${userNumber}, `
    numberOfAttempts.textContent = `Кол-во попыток: ${count}`

    if(userNumber === randomNumber){
        lastResult.textContent = `Поздравляю ты отгадал, это действительно ${randomNumber}`
        lastResult.style.background = 'green'
        lowOrHi.textContent  = ''
        lowOrHi.style.background = 'transparent'
    }
    else if(count === 10){
        lastResult.textContent = '! ! GAME OVER ! !'
        lastResult.style.background = 'red'
        lowOrHi.textContent = ''
        lowOrHi.style.background = 'transparent'
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
    entryField.focus()
}