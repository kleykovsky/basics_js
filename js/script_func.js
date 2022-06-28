// 'use strict';
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///fun.declaration//////////////////
// let num = 20;
// function showFirstMessage (text) {
// 	console.log(text);
// 	// num = 10;
// 	console.log(num);
// }
// showFirstMessage('hello');
// console.log(num);

// function calc(a, b) {
// 	return(a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 5));
// console.log(calc(1, 2));


// function ret() {
// 	let num = 50;

// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

///// fun.expression///////////
// const logger = function() {
// 	console.log('Hello');
// };
// logger();

////////стрелочная функция/////////
// const calc = (a, b) => a + b;
// console.log(calc(10, 20));

////////// Аргументы ////////////////////////////////////////////////////////////////////////////////////////////////
/// Пересчет  валют //////////////////////////////
// const usdCurr = 10800;
// const eurCurr = 11200;

// function convert(amount, curr) {
// 	return amount * curr;
// }
// console.log(convert(100, usdCurr));
// console.log(convert(100, eurCurr));

///////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////// Return ///////////////////////////////
const usdCurr = 10800;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}
console.log(convert(100, usdCurr));
/////////////////////////////////////////////////////////
function promotion(result) {
	console.log(result * discount);
}
const res = convert(100, usdCurr);
promotion(res);
///////////////////////////////////////////////////////
function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) {
			return;   //////Досрочно заканчиваем фун-ю/////
		}
	}
	console.log('Done');
}
test();
///////////////////////////////////////////////////////
function doNothing() {}
console.log(doNothing() === undefined);
////////////////////////////////////////////////////////

//////////////////HW/////////////////////////////////////////
////1

// function sayHello(name) {
// 	return `Привет,${name}!`;
// }
// console.log(sayHello(1));

let userName  = 'Alex';
let helloUser = 'Привет';
function hello(userName) {
	return helloUser + ', ' + userName + '!';
}
console.log(typeof(hello(userName)));
/////2

function num (number) {
	return [number -1, number, number + 1];
}
console.log(num(10));
///////3

// function getMathResult(num, repeat) {
// 	if(typeof(repeat) !== 'number' || repeat <= 0) {
// 		return num;
// 	}

// }
function getMathResult(num, times) {
	if (typeof(times) !== 'number' || times <= 0) {
		return num;
	}
	let str = '';
	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
		} else {
			str += `${num * i}---`;
		}
	}
	return str; 
}
console.log(getMathResult(2, 5));

// function getMathResult(num, times){
//     if (typeof times != "number" || times <= 0){
//         return num;
//     }
//     let resultStr = num;
//     let resultNum = num;
//     for(let i=2;i<=times;i++){
//         resultNum = num*i;
//         resultStr += "---" + resultNum;
//     }
//     return resultStr;
// }
// console.log(getMathResult(2, 5));
