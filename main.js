console.log("files are linked");

const displayCounter = document.querySelector("#counter");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const resetBtn = document.querySelector("#reset-btn");

let counter = 0;

const decrease = () => {
  counter--;
  displayCounter.textContent = counter;
};

const increase = () => {
  counter++;
  displayCounter.textContent = counter;
};

const reset = () => {
  counter = 0;
  displayCounter.textContent = counter;
};

minusBtn.addEventListener("click", decrease);
plusBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);

const themeBtns = document.querySelectorAll(".theme-buttons");

const selectTheme = (evt) => {
  const theme = evt.target.textContent;
  document.querySelector("body").className = theme;
  document.querySelector("main").className = theme;

  const allButtons = document.querySelectorAll("button");

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].className = theme;
  }
};

for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener("click", selectTheme);
}
