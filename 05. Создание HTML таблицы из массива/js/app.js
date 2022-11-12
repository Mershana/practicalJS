'use strict'

// Создание HTML таблицы из массива на JavaScript
/* №1⊗jsPmPrTCVA
Дан массив:
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table. */

/* let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

let table = document.querySelector('#table');

for (let subArr of arr){
	let tr = document.createElement('tr');

	for (let elem of subArr){
		let td = document.createElement('td');
		td.textContent = elem;
		tr.appendChild(td);
	}
	table.appendChild(tr);
} */

/* №2⊗jsPmPrTCVA
Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов. */
/* let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

let table = document.querySelector('#table');

for (let subArr of arr){
	let tr = document.createElement('tr');

	for (let elem of subArr){
		let td = document.createElement('td');
		td.textContent = elem * elem;
		tr.appendChild(td);
	}
	table.appendChild(tr);
}  */

