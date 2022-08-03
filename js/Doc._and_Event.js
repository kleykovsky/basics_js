// Получение элементов со страницы

let chooseBtn = document.getElementById('choose'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	receiveBtn = document.getElementById('receive'),
	modal = document.querySelector('.modal'),
	closeBtn = document.querySelector('.close'),
	text = document.getElementsByName('message')[0],
	colorBtn = document.querySelector('#color-btn'),
	mainBg = document.querySelector('.main');
	
// console.log(mailInput, phoneInput, nameInput, heading,chooseBtn, receiveBtn, colorBtn);


// Устаревший формат обработчика событий//////////////////

// function hover() {
//     heading.textContent = 'This One';
// }
//////////////////////////////////////////////////////////
/////////////// Запуск оброботчика событий ///////////////

chooseBtn.addEventListener('mouseenter', function() {
	heading.textContent = 'This One';
});
chooseBtn.addEventListener('mouseleave', function() {
	heading.textContent = 'Все включено';
});
receiveBtn.addEventListener('click', function() {
	modal.style.display = 'block';
	receiveBtn.style.background = '#1778eddb';
});
closeBtn.addEventListener('click', function() {
	modal.style.display = 'none' ;
	modal.style.background = '#0291bdf5';
});
nameInput.addEventListener('input', function() {
	text.value = `Меня зовут ${nameInput.value}. Я хотел спросить, `; 
	text.style.border = '2px solid blue'; 
	text.style.background = 'white';
});
nameInput.addEventListener('input', function() {
	nameInput.style.border = '2px solid blue'; 
	nameInput.style.background = 'white';
});
colorBtn.addEventListener('click', function() {
	colorBtn.style.background = 'blue'; 
	colorBtn.style.color = 'blue'; 
	colorBtn.style.color = 'white'; 
	colorBtn.style.border = '2px solid blue';
});
receiveBtn.addEventListener('click', function () {
	mainBg.style.background = 'url(img/bg2.jpg) center center no-repeat';
});