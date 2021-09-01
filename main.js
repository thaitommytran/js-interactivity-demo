console.log("hello world")

let count = 0;

function increase(){
    count++
    counterText.textContent = count
    console.log(count)
}

function decrease(){
    count--
    counterText.textContent = count
    console.log(count)
}

let reset = () => {
    count = 0;
    counterText.textContent = count
    console.log(count)
}

const counterText = document.querySelector("#counter")

const minusBtn = document.querySelector("#minus-btn")
const resetBtn = document.querySelector("#reset-btn")
const plusBtn = document.querySelector("#plus-btn")

minusBtn.addEventListener('click',decrease)
resetBtn.addEventListener('click',reset)
plusBtn.addEventListener('click',increase)

// inline
// document.querySelector("#minus-btn").addEventListener('click',() => {count--})

const selectTheme = (event) => {
    const theme = event.target.textContent
    console.log(theme)
    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;

    const buttons = document.querySelectorAll('button')

    for(let i = 0;i < buttons.length;i++){
        buttons[i].className = theme
    }
}

const themeBtns = document.querySelectorAll('.theme-buttons')

for(let i = 0; i < themeBtns.length;i++){
    themeBtns[i].addEventListener('click', selectTheme)
}


