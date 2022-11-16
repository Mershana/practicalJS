"use strict";

// Стилизация элементов на JavaScript
/* №1⊗jsPmPrES
Дан следующий HTML код:
<p>text1</p>
<p>text2</p>
<p>text3</p>
Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет). */
/* №2⊗jsPmPrES
Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым). */
/* let p = document.querySelectorAll("p");
for (let key of p) {
  let span = document.createElement("span");
  span.textContent = key.innerHTML;
  key.innerHTML = "";
  key.append(span);

  let remove = document.createElement("a");
  remove.href = "";
  remove.textContent = " remove";
  key.append(remove);

  let spanElem = document.querySelectorAll("p span");

  for (let elem of spanElem) {
    remove.addEventListener("click", function (event) {
      event.preventDefault();
		remove.remove() //удаялем ссылку по клику для 2 задания!
      elem.style.textDecoration = "line-through";
    });
  }
}
 */
/* №3⊗jsPmPrES
Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона. */
/* let table = document.querySelectorAll("#table tr");

for (let tr of table) {
	let td = document.createElement("td");
	td.textContent = '1';
	 tr.append(td);

	 let remove = document.createElement("a");
	  remove.href = "";
	  remove.textContent = " remove";
	  td.append(remove);

	  remove.addEventListener("click", function (event) {
			tr.style.background = 'green';
		  event.preventDefault();
		});
 } */

/*  №4⊗jsPmPrES
Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие. */
/* let table = document.querySelectorAll("#table tr");

for (let tr of table) {
  let td = document.createElement("td");
  td.textContent = "1";
  tr.append(td);

  let remove = document.createElement("a");
  remove.href = "";
  remove.textContent = " remove";
  td.append(remove);

  remove.addEventListener("click", function (event) {
    tr.style.background = "green";
    event.preventDefault();
    remove.removeEventListener("click", function() {
      tr.style.background = "green";
    });
  });
}
 */

let table = document.querySelectorAll("#table tr");
for (let tr of table) {
  let td = document.createElement("td");
  td.textContent = "1";
  tr.append(td);

  let remove = document.createElement("a");
  remove.href = "";
  remove.textContent = " remove";
  td.append(remove);

  const onClick = function(event) {
    tr.style.background = "green";
    event.preventDefault();

    remove.removeEventListener("click", onClick);
  }

  remove.addEventListener("click", onClick);
}