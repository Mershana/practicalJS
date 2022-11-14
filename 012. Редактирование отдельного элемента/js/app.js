'use strict'

// Редактирование отдельного элемента на JavaScript
/* №1⊗jsPmPrSEE
Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут. */
/* let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent; // записываем в инпут текст абзаца

input.addEventListener('input', function() {
	elem.textContent = this.value;
}); */

// Появление инпута
/* №2⊗jsPmPrSEE
Самостоятельно, не подсматривая в мой код, решите описанную задачу. */
/* Давайте теперь сделаем так, чтобы инпута изначально не было на странице, а он появлялся по клику на абзац. То есть наш начальный HTML будет выглядеть так:

<div id="parent">
	<p id="elem">text</p>
</div>
Для начала просто реализуем появление инпута, без редактирования:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	elem.parentElement.appendChild(input);
});
А теперь давайте сделаем так, чтобы по потери фокуса в инпуте менялся текст абзаца:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	input.addEventListener('blur', function() {
		elem.textContent = this.value;
	});
	
	elem.parentElement.appendChild(input);
});
Наш код, однако, несовершенен, так как каждое нажатие на абзац будет приводить к появлению нового инпута.

Для решения проблемы просто будем по потери фокуса удалять текущий инпут:



let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	input.addEventListener('blur', function() {
		elem.textContent = this.value;
		this.remove(); // удалим инпут
	});
	
	elem.parentElement.appendChild(input);
}); */


