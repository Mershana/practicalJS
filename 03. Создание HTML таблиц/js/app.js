'use strict'

// Создание HTML таблиц на JavaScript
/* №1⊗jsPmPrTC
Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками. */
/* let table = document.querySelector('#table');

for (let i = 0; i <= 5; i++){
	let tr = document.createElement('tr');

	for (let i = 0; i <= 5; i++){
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	table.append(tr);
} */

// №2⊗jsPmPrTC
// Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
/* let table = document.querySelector('#table');

for (let i = 0; i <= 5; i++){
	let tr = document.createElement('tr');

	for (let i = 0; i <= 10; i++){
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	table.append(tr);
}  */


/* №3⊗jsPmPrTC
Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'. */
/* let table = document.querySelector('#table');

for (let i = 0; i <= 5; i++){
	let tr = document.createElement('tr');

	for (let i = 0; i <= 10; i++){
		let td = document.createElement('td');
		tr.appendChild(td);
		td.textContent += 'x';
	}
	
	table.append(tr);
}  */

/* №4⊗jsPmPrTC
Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек). */
let rown_num = document.querySelector('#rows_num');
let cols_num = document.querySelector('#cols_num');
let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', Generate);


function Generate(){
	let tab = document.querySelector('table');
	if (tab != undefined){
		tab.innerHTML = '';
	} else {
		tab = document.createElement('table');
		div.appendChild(tab);
	} 

	for (let i = 0; i < rown_num.value; i++){
		let row = document.createElement('tr');
		tab.appendChild(row);
	}

	let rowsAll = document.getElementsByTagName('tr');
	for (let i = 0; i < rowsAll.length; i++){
		for (let k = 0; k < cols_num.value; k++){
			let cell = document.createElement('td');
				rowsAll[i].appendChild(cell);
				cell.textContent += '1'
			cell.style.border = '1px solid red'

		}
	}
}