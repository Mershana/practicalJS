'use strict'

// Добавление рядов и колонок в HTML таблицу
/* №1⊗jsPmPrTRCA
Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд. */
/* let table = document.querySelector('#table');
let tr = document.createElement('tr');
let button = document.querySelector('button');

for (let i = 1; i <= 3; i++){
	let td = document.createElement('td');
	tr.appendChild(td)
}
button.addEventListener('click', function(){
	table.appendChild(tr);
}); */

// Добавление колонок
/* №2⊗jsPmPrTRCA
Дана таблица размером 2 на 2:

<table id="table">
	<tr>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
td {
	width: 50px;
	height: 50px;
	border: 1px solid black;
}
Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку. */

let trs = document.querySelectorAll('#table tr');
let button = document.querySelector('button');

for (let tr of trs){
	let td = document.createElement('td');
	button.addEventListener('click', function(){
		tr.appendChild(td);
	});
}
