"use strict";

// Активация элементов на JavaScript
/* №1⊗jsPmPrEA
Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном. */
let liset = document.querySelectorAll("#list li");

for (let li of liset) {
  li.addEventListener("click", function () {
    this.classList.add("active");
  });
}

/* №2⊗jsPmPrEA
Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась. */
/* let liset = document.querySelectorAll("#list li");

for (let li of liset) {
  li.addEventListener("click", function () {
    if (li.classList.contains('active') !== true){
		this.classList.add('active');
	 } else {
		this.classList.remove('active');
	 }
  });
} */
