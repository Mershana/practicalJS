"use strict";

// Одновременное редактирование и удаление элементов
/* №1⊗jsPmPrRET
Дан следующий HTML код:

<div id="parent">
	<p><span>text1</span></p>
	<p><span>text2</span></p>
	<p><span>text3</span></p>
</div>
Добавьте ссылку на удаление в конец каждого абзаца.
Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования. */
/* let parent = document.querySelectorAll("#parent p");
for (let elem of parent) {
  let remove = document.createElement("a");
  remove.href = "";
  remove.textContent = "  remove";
  elem.appendChild(remove);

  remove.addEventListener("click", function (event) {
    elem.remove();
    event.preventDefault();
  });
}


let parentSpan = document.querySelectorAll("#parent span");
for (let key of parentSpan) {
  key.addEventListener("click", function func() {
    let input = document.createElement("input");
    input.value = key.textContent;
    key.textContent = "";
    key.appendChild(input);

    input.addEventListener("blur", function () {
      key.textContent = this.value;
      key.addEventListener("click", func);
    });
    key.removeEventListener("click", func);
  });
} */


/* №2⊗jsPmPrRET
Пусть теперь изначально тегов span нет:
<div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div>
Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление. */

let p = document.querySelectorAll('p');

for (let elem of p){
	let span = document.createElement('span');
	span.textContent = elem.innerHTML;
	elem.innerHTML = '';
	elem.appendChild(span);
}

let parentSpan = document.querySelectorAll("#parent span");
for (let key of parentSpan) {
  key.addEventListener("click", function func() {
    let input = document.createElement("input");
    input.value = key.textContent;
    key.textContent = "";
    key.appendChild(input);

    input.addEventListener("blur", function () {
      key.textContent = this.value;
      key.addEventListener("click", func);
    });
    key.removeEventListener("click", func);
  });
} 

for (let elem of p) {
  let remove = document.createElement("a");
  remove.href = "";
  remove.textContent = "remove";
  elem.appendChild(remove);

  remove.addEventListener("click", function (event) {
    elem.remove();
    event.preventDefault();
  });
}