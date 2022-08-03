// window.addEventListener('DOMContentLoaded', function () {
// 	let products = document.querySelectorAll('.product'),
// 		buttons = document.querySelectorAll('button'),
// 		openBtn = document.querySelector('.open');

// 	function createCart() {
// 		let cart = document.createElement('div'),
// 			field = document.createElement('div'),
// 			heading = document.createElement('h2'),
// 			closeBtn = document.createElement('button');

// 		cart.classList.add('cart');
// 		field.classList.add('cart-field');
// 		closeBtn.classList.add('close');

// 		heading.textContent = 'В нашей карзине';
// 		closeBtn.textContent = 'Закрыть';

// 		document.body.appendChild(cart);
// 		cart.appendChild(heading);
// 		cart.appendChild(field);
// 		cart.appendChild(closeBtn);
// 	}

// 	createCart();

// 	let field = document.querySelector('.cart-field'),
// 		cart = document.querySelector('.cart'),
// 		close = document.querySelector('.close');

// 	function openCart() {
// 		cart.style.display = 'block';
// 	}

// 	function closeCart() {
// 		cart.style.display = 'none';
// 	}

// 	openBtn.addEventListener('click', openCart);
// 	close.addEventListener('click', closeCart);


// 	// for (let i = 0; i < buttons.length; i++) {
// 	// 	buttons[i].addEventListener('click', function() {
// 	// 		let item = products[i].cloneNode(true),
// 	// 			btn = item.querySelector('button');
// 	// 		btn.remove();
// 	// 		field.appendChild(item);
// 	// 		products[i].remove();
// 	// 	});
// 	// }

// 	buttons.forEach(function (item, i) {
// 		item.addEventListener('click', function () {
// 			let item = products[i].cloneNode(true),
// 				btn = item.querySelector('button');
// 			btn.remove();
// 			field.appendChild(item);
// 			products[i].remove();
// 		});
// 	});

// });

///////////if...else//////////////////
// function nameEcma() {
// 	let nameJs = prompt('Какое официальное название JS?');
// 	if (nameJs == 'ecma') {
// 		alert('Верно!');
// 	} else if (nameJs == null) {
// 		alert('Вы ничего не в вели!');
// 	} else if (nameJs != 'ecma' || nameJs == '') {
// 		alert('Не знаете? JS!');
// 	}
// }
// nameEcma();
// console.log(nameEcma);
/////////////////////////////////////////////
//////////swich case////////////////////////
// let nameJs = prompt('Какое наз. js?', '');
// switch (nameJs) {
// 	case 'ecma':
// 		alert('Верно!');
// 		break;
// 	case '':
// 		alert('Вы не знаете JS?');
// 		break;
// 	case null:
// 		alert('Вы не чего не ввели!');
// 		break;
// 	default:
// 		alert('Не знаете? JS!');
// }
////////////////////////////////////////////
////////////// ?- Условный оператор ///////
// let nameJs = prompt('Какое наз. JS?');
// function js() {
// 	(nameJs == 'ecma') ? 
// 	alert('Верно') :
// 	(nameJs == '' || nameJs == null) ? 
// 	alert('Вы ничего не ввели') :
// 	alert('Вы не знаете JS!');
// }
// js();
///////////////////////////////////////////
/////////// Проверка логина //////////////
// function userName() {
// 	let user = prompt('Кто там?', '');
// 	if (user === null) {
// 		alert('Отменено');
// 	} else if (user === '' || user !== 'админ' ) {
// 		alert('Я Вас не знаю');
// 	} else if (user === 'админ') {
// 		let admin = prompt('Пароль?');
// 		if (admin === '' || admin === null) {
// 			alert('Отменено');
// 		} else if (admin !== 'Я главный') {
// 			alert('Неверный пароль');
// 		} else if (admin === 'Я главный') {
// 			alert('Здравствуйте!');
// 		}	
// 	}
// }
// userName();
///////////////////////////////////////////
