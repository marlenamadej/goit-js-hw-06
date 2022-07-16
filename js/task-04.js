let counterValue = 0;

const spanCounter = document.querySelector("#value");
const div = document.querySelector("#counter");
const btnAdd = div.lastElementChild;
const btnMinus = div.firstElementChild;

btnAdd.addEventListener("click", function () {
    counterValue++
 spanCounter.textContent = counterValue;
})

btnMinus.addEventListener("click", function () {
    counterValue--
 spanCounter.textContent = counterValue;
})

// ZROBIONE