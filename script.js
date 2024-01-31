const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const textValue = document.querySelector('h2');
const change = document.querySelector(".change")
const clear = document.querySelector(".clear")
const remove = document.querySelector(".remove")

let counter = 0;

increment.addEventListener('click', function() {
    counter++;
    textValue.textContent = counter;
})

decrement.addEventListener('click', function() {
    counter--;
    textValue.textContent = counter;
})

change.addEventListener('click', function() {
    textValue.style.backgroundColor = "magenta";
})

clear.addEventListener('click', function() {
    textValue.style.backgroundColor = "blue";
})
remove.addEventListener('click', function() {
    textValue.style.backgroundColor = "transparent";
})