"use strict";
// Практика на изменение элементов на JavaScript
/* №1⊗jsPmPrEChT
Дан массив. Выведите его элементы в виде списка ul. */

/* let list = document.querySelector('#list')

let arr = [1, 2, 3, 4, 5];
for (let elem of arr){
	let ul = document.createElement('li');
	ul.textContent = elem;

	list.appendChild(ul);
} */

// №2⊗jsPmPrEChT
// Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.

/*  let list = document.querySelector('#list')

let arr = [1, 2, 3, 4, 5];
for (let elem of arr){
	let ul = document.createElement('li');
	ul.textContent = elem;

	list.appendChild(ul);
} 

 let elems = document.querySelectorAll('li');

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
}  */

/* №3⊗jsPmPrEChT
Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать. */
/* let list = document.querySelector("#list");

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
  let ul = document.createElement("li");
  ul.textContent = elem;


  
  list.appendChild(ul);
}

let elems = document.querySelectorAll("li");

for (let elem of elems) {
  elem.addEventListener("click", function func() {
    let input = document.createElement("input");
    input.value = elem.textContent;

    elem.textContent = "";
    elem.appendChild(input);

	 

    input.addEventListener("blur", function () {
      elem.textContent = this.value;
      elem.addEventListener("click", func);
    });
    elem.removeEventListener("click", func);
  });
}



let inputer = document.querySelector('#inputer');
let li = document.querySelector('li');
inputer.addEventListener('blur', test);
function test (){
	let par = li.cloneNode(true);
	par.innerHTML = inputer.value;
	list.appendChild(par);
	inputer.value = '';
} */

/* №4⊗jsPmPrEChT
Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul. */
/* let list = document.querySelector("#list");

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
  let ul = document.createElement("li");
  ul.textContent = elem;


  
  list.appendChild(ul);
}

let elems = document.querySelectorAll("li");

for (let elem of elems) {
  elem.addEventListener("click", function func() {
    let input = document.createElement("input");
    input.value = elem.textContent;

    elem.textContent = "";
    elem.appendChild(input);

	 

    input.addEventListener("blur", function () {
      elem.textContent = this.value;
      elem.addEventListener("click", func);
    });
    elem.removeEventListener("click", func);
  });
}



let inputer = document.querySelector('#inputer');
let li = document.querySelector('li');
inputer.addEventListener('blur', test);
function test (){
	let par = li.cloneNode(true);
	par.innerHTML = inputer.value;
	list.appendChild(par);
	inputer.value = '';
}


 for (let elem of elems) {
	let remove = document.createElement("a");
	remove.href = "";
	remove.textContent = " remove";
	elem.appendChild(remove);

	remove.addEventListener("click", function (event) {
	  elem.remove();
	  event.preventDefault();
	});
 } */
 
/*  №5⊗jsPmPrEChT
 Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li. */

/*  let list = document.querySelector("#list");

 let arr = [1, 2, 3, 4, 5];
 for (let elem of arr) {
	let ul = document.createElement("li");
	ul.textContent = elem;

	list.appendChild(ul);
 }
 
 let elems = document.querySelectorAll("li");
 let inputer = document.querySelector('#inputer');
 let li = document.querySelector('li');
 inputer.addEventListener('blur', test);
 function test (){
	 let par = li.cloneNode(true);
	 par.innerHTML = inputer.value;
	 list.appendChild(par);
	 inputer.value = '';
 }

for (let key of elems) {
  let span = document.createElement("span");
  span.textContent = key.innerHTML;
  key.innerHTML = "";
  key.append(span);

  let remove = document.createElement("a");
  remove.href = "";
  remove.textContent = " remove";
  key.append(remove);


  let spanElem = document.querySelectorAll("li span");

  for (let element of spanElem) {
    remove.addEventListener("click", function (event) {
      event.preventDefault();
		remove.remove() //удаялем ссылку по клику 
      element.style.textDecoration = "line-through";
    });
  }
}
 */

// Массив объектов и таблица
/* №6⊗jsPmPrEChT
Дан следующий массив с работниками:
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
Выведите этих работников в HTML таблице. */
/* let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');

for (let user of employees){
	let tr = document.createElement('tr');

	let td = document.createElement('td');
	td.textContent = user.name;
	tr.appendChild(td);
	table.appendChild(tr);
} */

/* №7⊗jsPmPrEChT
Добавьте ячейкам созданной таблицы возможность редактирования. */
/* let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');

for (let user of employees){
	let tr = document.createElement('tr');

	let td = document.createElement('td');
	td.textContent = user.name;
	tr.appendChild(td);
	table.appendChild(tr);
}

let td2 = document.querySelectorAll('td')
for (let elem of td2) {
	elem.addEventListener("click", function func() {
	  let input = document.createElement("input");
	  input.value = elem.textContent;
 
	  elem.textContent = "";
	  elem.appendChild(input);
 
	  
 
	  input.addEventListener("blur", function () {
		 elem.textContent = this.value;
		 elem.addEventListener("click", func);
	  });
	  elem.removeEventListener("click", func);
	});
 }
  */

/*  №8⊗jsPmPrEChT
Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы. */
/* let trs = document.querySelectorAll("#table tr");

for (let tr of td2) {
  let td = document.createElement("td");
  td.textContent = '';
	tr.appendChild(td);
}

  for (let elem of td2) {
    let remove = document.createElement("a");
    remove.href = "";
    remove.textContent = "remove";
    elem.appendChild(remove);

    remove.addEventListener("click", function (event) {
      elem.remove();
      event.preventDefault();
    });
  } */


