// alert(1);
// let number = 5;
// alert(number);

// let num = 10;
// num = 7;

// const pi = 3.14;
// alert(5);
// [].push('a');
// let myName = 'Alex';

// console.log(myName);
// console.log(-4/0);
// console.log('string' * 3);
// console.log(2 + 2 == 4);
// console.log('2' === 2);
// console.log('4' === 4);

// let x = 5;
// x--;
// alert(x);

// let answer = prompt('Вам есть 20 лет');
// console.log(answer);

// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// answers[0] = prompt('What your name', '');
// answers[1] = prompt('What your famaly name', '');
// answers[2] = prompt('What your age', '');
// document.write(answers);

//////////////////////// ЦИКЛЫ: //////////////////////////
/////////////////////// for ///////////////////////////

// let answers = [],
// 	questions = [
// 		'What your name',
// 		'What your famaly name',
// 		'What your age'
// 	];
// for (let i = 0; i < questions.length; i++) {
// 	answers = prompt(questions[i], '');
// 	document.write(answers);
// 	console.log(answers);
// }

///////////////// do while ///////////////////////////

// let answers = [],
// 	questions = [
// 		'What your name ?',
// 		'What your famaly name ?',
// 		'What your age ?'
// 	],
// 	i = 0;
// do {
// 	answers = prompt(questions[i], '');
// 	console.log(answers);
// 	i++;
// } while ( i < questions.length);

//////////////////////// while /////////////////////

// let answers = [],
// 	questions = [
// 		'What your name ?',
// 		'What your famaly name ?',
// 		'What your age ?'
// 	],
// 	i = 0;
// while (i < questions.length) {
// 	console.log(i);
// 	answers = prompt(questions[i], '');
// 	document.write(answers);
// 	i++;
// }

//////////////////////////////////////////////////////////////////
////////////////////// УСЛОВИЯ: ////////////////////////////////////

// let age = prompt('What your age ?', '');

// if (age < 17 ) {
// 	alert('Your age is not suitabble !');
// } else if (age > 100) {
// 	alert('Your age very old ))');
// } else {
// 	alert('Welcome');
// }

/////////////// switch case //////////////////////////////////

// let age = prompt('What your age ?', '');
// switch (age) {
// 	case '18':
// 		alert('Welcome');
// 		break;
// 	case '100':
// 		alert('Your age very old ))');
// 		break;
// 	default:
// 		alert('Value not known !');
// }
//////////////////////////////////////////////////////////////
////////////////////// HW ///////////////////////////////////

// let speed = prompt('Какая у Вас скорость ?', '');
// if ( speed == 0 ) {
// 	alert('Stop');
// } else if ( speed <= 5 ) {
// 	alert('Low');
// } else if ( speed <= 70 ) {
// 	alert('Normal');
// } else {
// 	alert('Hight');
// }

///////////////////////////////////////////////////////////

// let speed = prompt('How your speed ?', '');

// switch (speed) {
// 	case '0':
// 		alert('Stop');
// 		break;
// 	case '5' :
// 		alert('Normal');
// 		break;
// 	default:
// 		alert('Hight');
// }

//////////////// Function: ///////////////////////////////////
///////////////// function Declaration /////////////////////

// let count = 5;

// function humanSayHello(user) {
// 	let count = 10;
// 	count++;
// 	console.log(count);
// 	console.log('Hello ' + user + '!');
// }
// humanSayHello('Alex');
// console.log(count);

// function calc(a, b) {
// 	console.log(a + b);
// }
// calc(4, 5);
// calc(4, 10);
// calc(14, 5);

// function calc(a, b) {
// 	return a + b;
// }
// console.log(calc(4, 10));
//////////////// function Expression /////////////////////

// let calc = function(a, b) {
// 	return a + b;
// };
// console.log(calc(5, 5));

///////////////////// HM //////////////////////////////////

// let userName = 'Alex';
// function changeUserName() {
//     let message = prompt(`Как Вас звать ?`);
//     if (message == 'Alex' ) {
//         alert(`Добро пожаловать ${userName}`);
//     } else {
//         alert('Доступ запреще!');
//     }
// }
// changeUserName();


// function showNumber(number) {
//     number = prompt('What your age ?');
//     if (number != 1 && number != 2 && number != 10 ) {
//         alert('Access is denied!');
//     } else {
//         alert('Welcome');
//         console.log(number);
//     }
// }
// showNumber();

// let message = 10;
// function showMess(message) {
//     return message * 20;
// }
// console.log(showMess(message));

/////////////////////////////////////////////////////////

// function myFirstApp(name, age) {
// 	alert(`Привет, меня зовут ${name}, мне ${age} и это моя первая программа.`);
// 	function showSkills() {
// 		let skills = ['html', ' css', ' js'];
// 		for (let i = 0; i < skills.length; i++) {
// 			console.log(`Я владею - ${skills[i]}`);
// 		} 
// 	}    // Выводит скилы
// 	showSkills();
// 	function checkAge() {
// 		let age = prompt('Сколько Вам лет?', '');
// 		if (age >= 18) {
// 			console.log('У тебя есть отличный шансы стать FrontEnd dev!');
// 	} else {
// 		console.log('Тебе надо еще подучиться...');
// 	}
// 	} // Проверяет возраст
// 	checkAge();
// 	let num = function calcPow(num) {
// 		console.log(`Число - ${num}`);
// 		return num ** 2;
// 	};
// 	console.log(`Сумма квадрата этого числа = ${num(3)}`);
// 	// Находит квадрат числа
// }
// myFirstApp('Alex', 34);

// let reg = function() {
// 	let user = prompt('Кто там?', '');
// 	if (user == null) {
// 		alert('Отменено');
// 	} else if (user == '' || user != 'админн' ) {
// 		alert('Я Вас не знаю');
// 	} 
// };
// reg();