'use strict';

// let num = 50;

// while (num <= 55) {            //while
//     console.log(num);
//     num++;
// }


// do {                              //do
//     console.log(num);
//     num++;
// }
// while (num < 55);


// for (let i = 1; i < 10; i++ ) {              //for   оператор //break - закончит цикл досрочно
//     if(i === 6) {                            //   оператор //continue - пропускает тот шаг который не нужен 
//         // break;                                                       не прерывая цикл                             
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
// *
// **
// ***
// ****
// *****
// ******
// *******
// let result = '';
// const length = 10;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result +='*';
//     }
//     result +='\n';
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k ===2) continue first;
//             console.log(`Third ${k}`);
//         }
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log(`First ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second ${j}`);
//     }
// }
///////////////// HW-1 /////////////////////////////////////////////////////////
// 1
// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// let i = 4;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// let i = 5;
// do {
//     console.log(i);
//     i++;
// } while (i < 11);

////////////////////////////////////////////////////////
// 2
// for ( let i = 20; i >= 10; i--) {
//     if ( i === 13) {
//         break;
//     }
//     console.log(i);
// }
//////////////////////////////////////////////////////
// 3
// for (let i = 2; i <= 100; i++) {
//     console.log(i);
//     i++;
// }

/// Ivan
// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
//////////////////////////////////////////////////////
// 4
// example
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 15) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
//////////////////////////////////////////////////////
// 5

// const arr = [];
// for (let i = 5; i <= 10; i++) {
//    
//     arr[i - 5] = i;
//     console.log(arr);
// }
///////////////////////////////////////////////////////////
////////////////////////HW-2///////////////////////////////
// 1
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
	
//     for (let i = 0; i < arr.length; i++ ) {
//         result[i] = arr[i];
//     }
//     console.log(result);

///////////////////////////////////////////////////////////
// 2
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//     data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);
///////////////////////////////////////////////////////////
// 3
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }
// console.log(result);

//////////////////// HW-3 //////////////////////////////
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********

// const lines = 10;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

//////////////////////////////////////////////////

/////// Выводим простые числа c меткой ////////////
// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++ ) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i);
// }
//////////////////////////////////////////////////
//////////////////////////////////////////////////

/////// HW ////////////////////////////////////// Задача: вычеслbnm объем и площадm полной певерхности куба. 
////1
// function calculateVolumeAndArea(a) {
// 	if (typeof(a) !== 'number' || a < 0 || !Number.isInteger(a)) {
// 		return 'При вычислении произошла ошибка';
// 	}
// 	const lengthRib = 6 * (a * a);
// 	const facetCube = a * a * a;
// 	return `Объем куба: ${facetCube}, площадь всей поверхности: ${lengthRib}`,
// 	console.log(`Объем куба: ${facetCube}, площадь всей поверхности: ${lengthRib}`);
// }
// calculateVolumeAndArea(5);

/////////ivan

// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }
//     let volume = 0,
//         area = 0;
//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
// calculateVolumeAndArea(5);
///////////////////////////////////////////////// Задача: определить номер купе по переданому ей номкру места. 
///2
// function getCoupeNumber(seatNumber) {
// 	if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
// 		return 'Ошибка. Прверте правильноcть введенного номера места';
// 	} else if (seatNumber === 0 || seatNumber > 36) {
// 		return 'Таких мест в вагоне не существует';
// 	}
// 	for ( let i = 4; i <= 36; i = i + 4) {
// 		if (seatNumber <= i) {
// 			return i / 4;
// 		}
// 	}
// }
// console.log(getCoupeNumber(33));

/////// ivan

// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(33);
///////////////////////////////////////////////////////// Задача: создать функцию которая принимает в себя целое 
/////////////////////////////////////////////////////////число минут и возвращает время в нужном формате строки.
// function getTimeFromMinutes(totalMinutes) {
// 	if (typeof(totalMinutes) !== 'number' || totalMinutes < 0 || !Number.isInteger(totalMinutes)) {
// 		return 'Ошибка, проверьте данные';
// 	}
// 	const hours = Math.floor(totalMinutes / 60);
// 	const minutes = totalMinutes % 60;
// 	let hoursStr = '';
// 	switch(hours) {
// 		case 0:
// 			hoursStr = 'Часов';
// 			break;
// 		case 1:
// 			hoursStr = 'Час';
// 			break;
// 		case 2:
// 		case 3:
// 		case 4:
// 			hoursStr = 'Часа';
// 			break;
// 		default:
// 			hoursStr = 'Часов';
// 	}
// 	// console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
// 	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }
// console.log(getTimeFromMinutes(600));
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////Задача: Напишите функцию, которая принимает в 
// себя 4 числа и возвращает самое большее из них.
// Если один из аргументов не является числом или их меньше 4 - возврвщается 0

// function getMaxNum(a, b, c, d) {
// 	if (typeof(a, b, c, d) !== 'number'){
// 		return 0;
// 	} else {
// 		return Math.max(a, b, c, d);
// 	}
// }
// console.log(getMaxNum(1, 2, 1, 999999));
// getMaxNum(123, 12222, 2, 1);
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////Задача: Создайте функцию, которая будет принимать в 
// себя один аргумент-целое положительное число. Она должна возвращать  строку, в которой будут через пробел выведены  
// числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не числ - вернуть пустую строку. Решать без пременения рекурсии.

function fib(num) {
if (typeof(num)!== 'number' || num <= 0 || !Number.isInteger(num)) {
	return '';
}
let zero = 0;
let one = 1;
let res = '';
	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			res += `${zero}`;
		} else {
			res += `${zero} `;
		}
		let total = zero + one;
		zero = one;
		one = total;
		console.log(res);
	}
	return res;
}
fib(10);
///Ivan
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }
// 	console.log(result);

//     return result;
// }
// fib(5);
/////////////////////////////////////////////////////