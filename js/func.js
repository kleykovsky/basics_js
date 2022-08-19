'use strict';
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
// console.log();

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
// const usdCurr = 10800;
// const discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }
// console.log(convert(100, usdCurr));
/////////////////////////////////////////////////////////
// function promotion(result) {
// 	console.log(result * discount);
// }
// const res = convert(100, usdCurr);
// promotion(res);
///////////////////////////////////////////////////////
// function test() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 3) {
// 			return;   //////Досрочно заканчиваем фун-ю/////
// 		}
// 	}
// 	console.log('Done');
// }
// test();
///////////////////////////////////////////////////////
// function doNothing() {}
// console.log(doNothing() === undefined);
////////////////////////////////////////////////////////

//////////////////HW/////////////////////////////////////////
////1

// function sayHello(name) {
// 	return `Привет,${name}!`;
// }
// console.log(sayHello(1));

// let userName  = 'Alex';
// let helloUser = 'Привет';
// function hello(userName) {
// 	return helloUser + ', ' + userName + '!';
// }
// console.log(typeof(hello(userName)));
/////2

// function num (number) {
// 	return [number -1, number, number + 1];
// }
// console.log(num(10));
///////3

// function getMathResult(num, repeat) {
// 	if(typeof(repeat) !== 'number' || repeat <= 0) {
// 		return num;
// 	}

// }
// function getMathResult(num, times) {
// 	if (typeof(times) !== 'number' || times <= 0) {
// 		return num;
// 	}
// 	let str = '';
// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 		} else {
// 			str += `${num * i}---`;
// 		}
// 	}
// 	return str; 
// }
// console.log(getMathResult(2, 5));

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
//////////// CallBack///////////////////////////////////

// function first() {
// 	//Do something
// 	setTimeout(function() {
// 		console.log(1);
// 	}, 500);
// }
// function second() {
// 	console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }

// function done() {
// 	console.log('Go');
// }

// learnJS('JavaScript', done);
///////////////////////////////////////////////
//example:
// function squad(item) {
//     return item ** 2;
// }
// const arr = [1,2,3,4,5];
// // const arr2 = arr.map(squad);
// const arr2 = arr.map(item => item ** 2);
// console.log(arr2);
////////////////////////////////////////////////
//input
// document.querySelector('#btn').addEventListener('click', () => {
//     getData(fixData);
// });
// function getData(fixFunc) {
//     const getData = document.querySelector('#usd').value;
//     console.log(fixFunc(getData));
// }
// function fixData(str) {
//     return str.trim().toLowerCase();
// }
// function fixData2(str) {
//     return str.trim().toUpperCase();
// }
///callback
// function myFunction(callback) {
//     const a  = [1, 2, 3, 4, 5];
//     let element = document.querySelector('label');
//     callback(element, a);
// }
// function out1(elem, arr) {
//    elem.innerText = arr.join(' ');
// }
// myFunction(out1);
//////////////////////////////////////////////
//callback = fetch
function getDataCats(callback) {
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        callback(data);
    });
}
function showData(data) {
    data.forEach(item => console.log(item._id));
}

function showData2(data) {
    data.forEach(item => document.querySelector('label').innerText = (` Type: ${item.type},` + ` Id: ${item._id};`));
}

getDataCats(showData2);
getDataCats(showData);
//////////////////////////////////////////////
//////////////////////////////////////////////
//Асинхронные callback функции

// async function pageLoader(callback) {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     callback(data);
// }

// function pageLoader(callback) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => callback(json));
// }

// function getAjax(data) {
//     console.log('after request');
//     console.log('response');
//     console.log(data);
// }
// pageLoader(getAjax);
////////////////////////////////////////////
//calback hell

// function pageLoader() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => {
//         console.log('after request');
//         console.log('response');
//         console.log(json);
//         fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
//         .then(response => response.json())
//         .then(json => {
//             console.log('after request....');
//             console.log('response:');
//             console.log(json);
//         });
//     });
// }
// pageLoader();

// function pageLoader(url, callback) {
//     fetch(url)
//         .then(response => response.json())
//         .then(json => callback(json));
// }


// function getAjax(data) {
//     console.log('after request');
//     console.log('response');
//     console.log(data);
//     pageLoader('https://jsonplaceholder.typicode.com/users/' + data.userId, showUser);
// }
// function showUser(user) {
//     console.log(user);
// }
// pageLoader('https://jsonplaceholder.typicode.com/todos/1', getAjax);
//////////////////////////////////////////////


// function ask(questions, yes, no) {
// 	(questions == 1) ? yes() : (questions == 2) ? no() : console.log('Error: 223232');
// 	// if (questions == 1) {
// 	// 	yes();
// 	// } else if (questions == 2) {
// 	// 	no();
// 	// } else {
// 	// 	console.log('Error: 23232');
// 	// }
// }
// function showYes () {
// 	console.log('Yes');
// }
// function showNo () {
// 	console.log('No');
// }
// ask(0, showYes, showNo);
//////////////////////////////////////////////////
////////////////Замыкание//////////////////////////

// let number = 5; debugger

// function logNumber() {
// 	let number = 4; debugger
// 	console.log(number);
// }

// number = 6;

// logNumber(); debugger

// let num = 4;
// console.log(typeof(String(num)));

// function createCounter() {
// 	let counter = 0;
// 	const myFunction = function() {debugger
// 		counter = counter + 1;debugger
// 		return counter;debugger
// 	};
// 	return myFunction;
// }
// debugger
// const increment = createCounter();debugger
// const c1 = increment();debugger
// const c2 = increment();debugger
// const c3 = increment();debugger

// console.log(c1, c2, c3);

/////////tests/////////////////////////
// let x = 5;
// console.log(++x);

// [] + false - null + true
// console.log(typeof([] + false));

// let y = 1; 
// let x = y = 2;
// console.log(x);

// [] + 1 + 2
// console.log([] + 1 + 2);

// console.log('1'[0]);

// console.log(2 && 1 && null && 0 && undefined);

// console.log(!!(1 && 2) === (1 && 2));

// console.log(null || 2 && 3 || 4);

// let a = [1, 2, 3]; 
// 	b = [1, 2, 3];


// console.log(0 || '' || 2 || undefined || true || false);

//////////////////////////////////////////////////////////

///////////////////////HW///////////////////////////////////

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         { 
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
	
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';
//     return answer;
// }
// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
	
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// transferWaitors(restorantData);

//////////////////////////////////////////////////////////////////////////


////random

// let max = 290,
//     min = 180;

//     let c = () => {
//         return `#${(Math.floor(Math.random() * (max - min) + min))}`;
//     };
// let c2 = c();
// // let c2 = `#${c()}`;
// console.log(c2);
// console.log(typeof(c2));
