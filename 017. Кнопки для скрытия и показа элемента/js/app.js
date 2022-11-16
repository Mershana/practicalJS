"use strict";

// Кнопки для скрытия и показа элемента на JavaScript
/* №1⊗jsPmPrHShB
Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается. */

let elem = document.querySelector("#elem");
let show = document.querySelector("#show");

show.addEventListener('click', showHidden);
function showHidden(){
	if (elem.classList.contains('hidden') !== true){
		elem.classList.add('hidden');
	} else {
		elem.classList.remove('hidden');
	}
}