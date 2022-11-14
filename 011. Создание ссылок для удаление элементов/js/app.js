"use strict";

// Создание ссылок для удаление элементов на JavaScript

/* №1⊗jsPmPrCRL
Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка. */

/* let elems = document.querySelectorAll("#elem li");

for (let elem of elems) {
  let remove = document.createElement("a");
  remove.href = "";
  remove.textContent = " remove";

  elem.appendChild(remove);
  remove.addEventListener("click", function (event) {
    elem.remove();
    event.preventDefault();
  });
} */

/* №2⊗jsPmPrCRL
Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда. */
let trs = document.querySelectorAll("#table tr");

for (let tr of trs) {
  let td = document.createElement("td");
  td.textContent = '';
	tr.appendChild(td);
}

  for (let elem of trs) {
    let remove = document.createElement("a");
    remove.href = "";
    remove.textContent = "remove";
    elem.appendChild(remove);

    remove.addEventListener("click", function (event) {
      elem.remove();
      event.preventDefault();
    });
  }

