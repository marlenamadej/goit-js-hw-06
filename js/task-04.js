let counter = 0;

const spanCounter = document.querySelector("#value");
const div = document.querySelector("#counter");
const btnAdd = div.lastElementChild;
const btnMinus = div.firstElementChild;

btnAdd.addEventListener("click", function () {
 counter++
 spanCounter.textContent = counter;
})

btnMinus.addEventListener("click", function () {
 counter--
 spanCounter.textContent = counter;
})

// ZROBIONE