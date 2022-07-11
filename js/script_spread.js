'user strict';
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // link

// copy.a = 10;

// console.log(copy);
// console.log(obj);

///////Копирование объекта через функцию  (поверхностное копирование)
function copy(mainObj) {
	let objCopy = {};
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

// let newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);
/////////////////////////////////////////////////////////////////
const add = {
	d: 17,
	e: 20
};

const clone  = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);
////////////////////////////////////////////////////////////////////
const oldArray = ['a', 'b',  'c'];
const newArray = oldArray.slice(2);

console.log(newArray);
console.log(oldArray);

newArray[1] = 'sss';
console.log(newArray);

/////////////////////////////////////////////////////////////////////
// Разварот массива в новую созданную переменную для массива...
const video = ['youtube', 'vimio', 'rutube'],
	  blogs = ['wordpress', 'livejournal', 'blogger'],
	  internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet.length);

// internet.forEach(function(index, item, value){
// 	console.log(`Index: ${item}`);
// });

/////////////////////////////////////////////////////////////////// Функц для массива
function log(a, b, c, d, e) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(e);
}

const num = [1, 2, 3, 4, 5];

log(...num);
////////////////////////////////////////////////////////////////// Массив

const array = ['a', 'b'];
const newArray2 = [...array];
console.log(newArray2);
newArray2[1] = '1111';
console.log(newArray2);
console.log(array);

//////////////////////////////////////////////////////////// Объект

const arr1 = {
	one: 1,
	two: 2
};

const newObj = {...arr1, three: 3};
console.log(newObj);
console.log(arr1);
/////////////////////////////////////////////////////////

///////////////////////////HW//////////////////////////
////Object
const personalPlanPeter = {
    nam: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
	showAgeAndLangs: function(plan) {
		const {age} = plan;
		const {languages} = plan.skills;
		let str = `Мне ${age} и я владею языками: `;
		languages.forEach(function(lang){
			str += `${lang.toUpperCase()} `;
		});
		return str;
	}
	// show: function (plan) {
	// 	console.log(personalPlanPeter);
	// }
};
// personalPlanPeter.show();

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let str = '';
	const {programmingLangs} = plan.skills;
	for(let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return str;
}
console.log(showProgrammingLangs(personalPlanPeter));
//////////////////////////////////////////////////////
////Arrays
///1
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
// 	let str = '';
// 	if (arr.length === 0) {
// 		str = 'Семья пуста';
// 	} else {
// 		str = 'Семья состоит из: ';
// 	}
// 	arr.forEach(function(item){
// 		str += `${item} `;
// 	});
// 	return str;
// }
// console.log(showFamily(family));

/////////////////////////////////////////////////////
////2

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// function standardizeStrings(arr) {
// 	arr.forEach(function sity(index) {
// 		console.log(index.toLowerCase());
// 	});
// }
// standardizeStrings(favoriteCities);

/////Стрелочная функция

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// function standardizeStrings (arr) {
// 	arr.forEach(city => {
// 		console.log(city.toLowerCase());
// 	});
// }
// standardizeStrings(favoriteCities);

////////////////////////////////////////////////////////

//// part 2

let someString = 'This is some strange string';
function reverse(str) {
	if (typeof(str) !== 'string') {
		return 'Ошибка!';
	}
	return str.split('').reverse().join('');
}
console.log(reverse(someString));

///////////////////////////////////////////////////////

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
	
	// if (arr.length === 0) {
	// 	str = 'Нет доступных валют';
	// } else {
	// 	str = 'Доступные валюты:\n';
	// }		
    // arr.forEach(function(curr, i) {
    //     if (curr !== missingCurr) {
    //         str += `${i} ${curr} \n`;
    //     }
    // });
	
    // Или
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
            continue;
        }
        str += `${i+1} ${arr[i]}\n`;
    }

    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies]));

///////////////////////////////////////////////////////////////////////
