"use strict";

const button = document.querySelectorAll("button");
const screen = document.querySelector("input");
const cButton = document.querySelector(".calc-link");
const equalButton = document.querySelector(".calc-a-link");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    screen.value += button[i].innerHTML;
    console.log(button[i].innerHTML, screen.value);
  });
}

cButton.addEventListener("click", function () {
  screen.value = "";
});

equalButton.addEventListener("click", function () {
  screen.value = eval(screen.value);
});
