"use strict";

// Изменение ячеек HTML таблицы на JavaScript
/* №1⊗jsPmPrTCM
Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза. */
let tds = document.querySelectorAll("#table td");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  for (let td of tds) {
    td.textContent = td.textContent * td.textContent;
  }
});
