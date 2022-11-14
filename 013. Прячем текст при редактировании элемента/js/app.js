/* 'use strict'

// Прячем текст при редактировании элемента на JavaScript
Давайте теперь сделаем так, чтобы при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца. Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца.

Приступим к реализации.

Для начала давайте сделаем так, чтобы по клику на абзац ему в конец добавлялся инпут с текстом этого абзаца:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	elem.appendChild(input);
});
Наш код, однако, очень несовершенен - каждый раз по клику на абзац в него будет добавляться новый инпут.

При этом, если в первом инпуте будет стоять текст абзаца, то во втором инпуте уже будет стоять текст абзаца вместе с первым инпутом, а третьем инпуте уже будет стоять текст абзаца вместе с двумя инпутами и так далее.

Обратите также внимание на то, что клик по добавленному инпуту будет расцениваться как клик по абзацу: дело в том, что инпут находится в абзаце, и клик по инпуту просто всплывет выше к этому абзацу.

Это приведет к тому, что после появления первого инпута при попытке нажать на него для того, чтобы начать редактирование, мы автоматически сделаем клик по абзацу со всеми вытекающими последствиями.

Итак, проблема обрисована. Давайте теперь ее исправим.

Для этого просто при появлении инпута отвяжем от абзаца обработчик клика. В этом случае только первый клик по абзацу будет приводить к появлению инпута, а остальные клики, сделанные после появления инпута, будут проигнорированы.

Реализуем:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	elem.appendChild(input);
	
	elem.removeEventListener('click', func); // отвяжем событие
});
Давайте теперь сделаем так, чтобы при появлении инпута, текст самого абзаца исчезал. Для этого перед вставкой инпута textContent абзаца присвоим пустой строке:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	
	input.value = elem.textContent; // сначала записываем текст абзаца в инпут
	elem.textContent = ''; // затем убираем текст абзаца
	elem.appendChild(input); // затем вставляем инпут
	
	elem.removeEventListener('click', func);
});
Давайте теперь сделаем так, чтобы при потери фокуса в инпуте текст этого инпута записывался в абзац:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	
	input.value = elem.textContent;
	elem.textContent = '';
	elem.appendChild(input);
	
	input.addEventListener('blur', function() {
		elem.textContent = this.value;
	});
	
	elem.removeEventListener('click', func);
});
Обратите внимание на то, что нам не нужно удалять инпут - он удаляет сам себя, когда записывает свой текст в абзац: так как инпут является частью текста абзаца, то запись какого-то текста в этот абзац просто удаляет наш инпут, и все.

У нас, однако, есть еще одна проблема: текст абзаца будет редактироваться лишь первый раз. После первого редактирования повторное нажатие на текст абзаца ни к чему не приведет.

Дело в том, что в момент появления инпута мы отвязали событие от абзаца по описанным выше причинам. Теперь нам необходимо в момент окончания редактирования привязать событие обратно.

Сделаем это:

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	elem.textContent = '';
	elem.appendChild(input);
	
	input.addEventListener('blur', function() {
		elem.textContent = this.value;
		elem.addEventListener('click', func); // повесим событие обратно
	});
	
	elem.removeEventListener('click', func);
}); */

let elem = document.querySelector('#elem');

elem.addEventListener('click', function func(){
	let input = document.createElement('input'); 
	input.value = elem.textContent; // // сначала записываем текст абзаца в инпут
	elem.textContent = ''; // затем убираем текст абзаца
	elem.appendChild(input); // затем вставляем инпут

	input.addEventListener('blur', function(){
		elem.textContent = this.value
		elem.addEventListener('click', func);
	});

	elem.removeEventListener('click', func);

});

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	elem.textContent = '';
	elem.appendChild(input);
	
	input.addEventListener('blur', function() {
		elem.textContent = this.value;
		elem.addEventListener('click', func); // повесим событие обратно
	});
	
	elem.removeEventListener('click', func);
}); */