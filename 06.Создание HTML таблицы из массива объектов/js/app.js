"use strict";

// Создание HTML таблицы из массива объектов
/* №1⊗jsPmPrTCVOA
Дан следующий массив с работниками:

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
Выведите элементы этого массива в виде HTML таблицы. */

/* let table = document.querySelector("#table");
let employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];

for (let user of employees) {
  let tr = document.createElement("tr");

  let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);


	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);

	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);

	table.appendChild(tr);

} */

/* №2⊗jsPmPrTCVOA
Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1. */

/* let table = document.querySelector("#table");
let employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];

for (let user of employees) {
  let tr = document.createElement("tr");

  let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);

	
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);
	td2.addEventListener('click', function(){
		td2.textContent = +td2.textContent + 1
	})
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);

	table.appendChild(tr);

}
 */


/* №3⊗jsPmPrTCVOA
Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%. */
 let table = document.querySelector("#table");
let employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];

for (let user of employees) {
  let tr = document.createElement("tr");

  let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);

	
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);
	td2.addEventListener('click', function(){
		td2.textContent = +td2.textContent + 1
	})
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);
	td3.addEventListener('click', function(){
		td3.textContent = +td3.textContent + 1/10 * td3.textContent;
	})
	table.appendChild(tr);

}
 