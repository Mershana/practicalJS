'use strict'

// Ссылка на удаление элемента на JavaScript
let elems = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function(event){
	elems.remove();
	event.preventDefault()
})