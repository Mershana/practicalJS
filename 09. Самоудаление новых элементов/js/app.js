"use strict";

// Самоудаление новых элементов на JavaScript

/* №1⊗jsPmPrNER
Дан следующий код:

<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<input type="submit" id="button">
Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку. */
let parent = document.querySelector("#parent");
let button = document.querySelector("#button");
let pLi = document.querySelectorAll('#parent li');

button.addEventListener('click', function(){
	for (let i = 1; i <= 9; i++){
		let li = document.createElement('li');
		li.textContent = i;


		li.addEventListener('click', function(){
			li.remove()
		});

	parent.appendChild(li);

	}

});

for (let elem of pLi){
	elem.addEventListener('click', function(){
		elem.remove()
	});
}