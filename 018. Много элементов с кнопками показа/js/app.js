'use strict'

// Много элементов с кнопками показа на JavaScript
// Первый способ

/* let buttons = document.querySelectorAll('button');

for (let button of buttons) {
	button.addEventListener('click', function() {
		let elem = document.querySelector('#' + this.dataset.elem);
		elem.classList.toggle('hidden');
	});
}
 */
// Второй способ
/* №2⊗jsPmPrMEWShB
Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу. */
/* let elems = document.querySelectorAll('p');
let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener('click', function(){
	elems[i].classList.toggle('hidden')
	});
} */

// Третий способ
/* №3⊗jsPmPrMEWShB
Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу. */
let buttons = document.querySelectorAll('button');

for (let button of buttons){
	button.addEventListener('click', function(){
		this.previousElementSibling.classList.toggle('hidden');
	})
}