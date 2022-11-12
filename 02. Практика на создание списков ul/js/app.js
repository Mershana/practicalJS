'use strict'

// Практика на создание списков ul на JavaScript
/* №1⊗jsPmPrLC
Дан ul:

<ul id="elem"></ul>
Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. */
/* let elems = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr){
	let li = document.createElement('li');
	li.textContent = elem;

	elems.appendChild(li);
} */


/* №2⊗jsPmPrLC
Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента. */
/* let elems = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr){
	let li = document.createElement('li');
	li.textContent = elem;
	elems.appendChild(li);

	li.addEventListener('click', function(){
		console.log(li.textContent);
	});
}  */

/* №3⊗jsPmPrLC
Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'. */
/* let elems = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr){
	let li = document.createElement('li');
	li.textContent = elem;
	elems.appendChild(li);

	li.addEventListener('click', function(){
		li.textContent += '!'
	});
} */

/* №4⊗jsPmPrLC
Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'. */
let elems = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr){
	let li = document.createElement('li');
	li.textContent = elem;
	elems.appendChild(li);
	li.addEventListener('click', func);
}


function func(){
	this.textContent += '!';
	this.removeEventListener('click', func);
}

