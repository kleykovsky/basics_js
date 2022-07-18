'use strict';
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log(options);
	}
};
options.makeTest();

//Колл. эл. в объекте
// Метод for...in перебор для объектов
// let counter = 0;
// for (let key in options) {
//     console.log(`${counter} ${options[key]}`);
//     counter++;
// }
// console.log(`${counter}`);  //Колл.элементов
// //////////////////////

// console.log(Object.values(options).length);
// Метод нахождения у обекта пары - ключ:значение (находим все ключи) если добавить метод - 
// .length получим колличество эл. в массиве.

///////////////////////

/// Деструктуризация объекта

const {border, bg} = options.colors;
// console.log(options);
// console.log(options);

console.log(options.name);
// // delete options.name;
console.log(options);
// console.log(options['colors']['border']);

////Метод перебора массива

//// for...in  метод перебора для объектов

let counter = 0;
for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`${i}: ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`${key}: ${options[key]}`);
		counter++;
	}  
}
console.log(counter);

////////////////////HW//////////////////////////////////
///1

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
// Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; 
// стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию  isBudgetEnough, которая будет возвращать строку: 
// Если бюджета хватает для отопления всего объема торгового центра - выводится - 'Бюджета достаточно'
// , если нет - 'Бюджета недостаточно'

// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади:  магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется
// вообще другой объект;

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		},
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};

function isBudgetEnough(data) {
	let square = 0;
	let volume = 0;

//    shoppingMallData.shops.forEach(function (item, index, values) {
// 		console.log(square += item.width * item.length);
//    });

for (let item of shoppingMallData.shops) {
	square += item.width * item.length;
}
	console.log(data.shops);
   	console.log(square);
	volume = square * shoppingMallData.height;
	// console.log(volume);

	if (shoppingMallData.budget - (volume * shoppingMallData.moneyPer1m3) >= 0 ) {
		return  'Бюджета достаточно';
	} else {
		return 'Бюджета недостаточно';
	}
}
console.log(isBudgetEnough(shoppingMallData));

/////////////////////////////////////////////////////////////////////////
///2

let str = 'abc99999';
let arrForOf = [];
let arrForIn = [];
let newArr = '';
for (let value of str) {
	console.log(arrForOf.push(value));
}
arrForOf.slice();
console.log(arrForOf.join('').split());