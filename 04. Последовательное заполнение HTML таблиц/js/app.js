"use strict";

// Последовательное заполнение HTML таблиц

/* №1⊗jsPmPrTCF
Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25. */
/* let table = document.querySelector('#table');

let k = 1;
for (let i = 0; i < 5; i++){
	let tr = document.createElement('tr');

	for (let j = 0; j < 5; j++){
		let td = document.createElement('td');
		
		td.textContent = k;
		k++;
		tr.appendChild(td);
	}

	table.appendChild(tr);
} */

/* №2⊗jsPmPrTCF
Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50. */
/* let table = document.querySelector('#table');
let k = 2;
for (let i = 0; i < 5; i++){
	let tr = document.createElement('tr');

	for (let j = 0; j < 5; j++){
		let td = document.createElement('td');
		
		td.textContent = k;
		k+=2;
		tr.appendChild(td);
	}

	table.appendChild(tr);
}  */

let table = document.querySelector("#table");
const maxCols = 5;

function tableGenerator(kFrom, kTo) {
  const kDiff = kTo - kFrom;

  const kInc = 2;

  let prevRowId;
  let tr;

  while (kFrom <= kTo) {
	let rowIdx = Math.floor((kDiff - (kTo - kFrom)) / kInc / maxCols)

    if (rowIdx != prevRowId) {
      if (tr !== undefined) {
        table.appendChild(tr);
      }
      tr = document.createElement("tr");
      prevRowId = rowIdx;
    }

    let td = document.createElement("td");
    td.textContent = kFrom;
    tr.appendChild(td);

    kFrom += kInc;

    if (tr !== undefined) {
      table.appendChild(tr);
    }
  }
}

tableGenerator(2, 50)