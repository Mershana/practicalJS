"use strict";

// Чередование стилей активации на JavaScript
/* let tables = document.querySelectorAll('#table td');

let color = 'color1';
for (let elem of tables){
	elem.addEventListener('click', function(){
		if (color == 'color1'){
			color = 'color2';
		} else {
			color = 'color1';
		}
		this.classList.add(color);
	});
} */

// Чередование многих цветов из массива
/* №2⊗jsPmPrASA
Расскажите, как работает приведенный мною код. */
let tds = document.querySelectorAll("#table td");

let i = 0; //создали счетчик
let colors = ["color1", "color2", "color3"]; //создаем массив цветов

for (let td of tds) {
  //перебираем в цикле элементы таблицы = td
  td.addEventListener("click", function () {
    //вешаем событие на td
    this.classList.add(colors[i]); //при каждом клике присваиваем в ячейку цвет из массива по счетчику 

    i++; //увеличиваем счетчик при каждой итерации
    if (i == colors.length) {
      //сравниваем счетчик с длинной массива
      i = 0; //????
    }
  });
}

