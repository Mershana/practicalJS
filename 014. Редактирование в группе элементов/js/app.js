'use strict'

// Редактирование в группе элементов на JavaScript
/* №1⊗jsPmPrEGE
Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li. */
/* let elems = document.querySelectorAll('li');

for (let elem of elems){
	elem.addEventListener('click', function func(){
		let input = document.createElement('input');
		input.value = elem.textContent;

		elem.textContent = '';
		elem.appendChild(input);

		input.addEventListener('blur', function(){
			elem.textContent = this.value;
			elem.addEventListener('click', func);
		});
		elem.removeEventListener('click', func);
	});
} */

/* №2⊗jsPmPrEGE
Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки. */
let elems = document.querySelectorAll('#table td');

for (let elem of elems){
	elem.addEventListener('click', function func(){
		let input = document.createElement('input');
		input.value = elem.textContent;
		elem.textContent = '';
		elem.appendChild(input);

		input.addEventListener('blur', function(){
			elem.textContent = this.value;
			elem.addEventListener('click', func);
		});
		elem.removeEventListener('click', func);
	});
}