//// Сортировка массива ///////////////////////////////

// let arrOne = ['Alex', 'Bob', 'Jon', 1, 2, 3];
// let arrTwo = [10, 20, 30, {name: 'Alex', age: 33}, [2, 1, 4]];
// let arrThree = [1, 2, 3, 23, 44, 5, 66, 11, 22];

// console.log(arrOne.sort());
// console.log(arrTwo.sort());
// console.log(arrThree.sort());

//// стрелочная функ-я для сортировки массива //////////////////////////

// console.log(arrThree.sort((a, b) => a - b));

// Преобразование массива ///////////////////////////////

// // let arrOne = ['Alex', 'Bob', 'Jon', 1, 2, 3];
// let arrTwo = [10, 20, 30, {name: 'Alex', age: 33, key: 22}, [2, 1, 4]];
// // let arrThree = [1, 2, 3, 23, 44, 5, 66, 11, 22];

// let newArr = arrTwo.map(person => {
// 	return person.name;

// });
// console.log(arrTwo);
// console.log(newArr);
//////////////////////////////////////////////////////////

// Добавления эл-а в массива ///////////////////////////////

// let arrOne = ['Alex', 'Bob', 'Jon', 1, 2, 3];
// let arrTwo = [10, 20, 30, {name: 'Alex', age: 33, key: 22}, [2, 1, 4]];
// // let arrThree = [1, 2, 3, 23, 44, 5, 66, 11, 22];

// arrTwo.push('qwweert', [2,3,4,5]);

// let newArr = arrTwo.push(1, 'Alex2', {name: 'Bob', age: 22});
// console.log(arrTwo);
// console.log(newArr);
//////////////////////////////////////////////////////////
// Методы перебора массива ///////////////////////////////

////For
// let arrOne = ['Alex', 'Bob', 'Jon', 1, 2, 3];
// const arrTwo = [10, 20, 30, {name: 'Alex', age: 33, key: 22}, [2, 1, 4]];
// let arrThree = [1, 2, 3, 23, 44, 5, 66, 11, 22];

// for (let i = 0; i < arrTwo.length; i++) {
// 	console.log(arrTwo[i]);
// }

////For of
// for (let arrItem of arrTwo) {
// 	console.log(arrItem);
// }


//ForEach
// arrTwo.forEach(function(item, index, array) {
// 	console.log(item);
// });

/// стрелочная функ-я

// arrTwo.forEach((item, index, array) => {
// 	console.log(item.name);
// });


///// Можно указать имя функции //////////////////////////////
// arrTwo.forEach(show);
// function show(index, item, array) {
// 	console.log(item, index, array);
// }

///Reduce суммирование всех значений массива
// const arrTwo = [1, 2, 3, 23, 44, 5, 66, 11, 22];

// const sumArr = arrTwo.reduce(function(total, item) {
// 	// console.log(item);
// 	return total + item;

// },0);

// ///// Стрелочная функ-я
// // const sumArr = arrTwo.reduce((total, item,) => {
// // 	return total + item;
// // }, 0);
// console.log(sumArr);
///////////////////////////////////////////////////

const arrTwo = [1, 2, 3, 23, 44, 5, 66, 11, 22];

console.log(arrTwo);
console.log(arrTwo.length);
for (let i of arrTwo) {
	console.log(i);	
}
arrTwo.unshift('aaaaa');
// arrTwo.push('Go');
arrTwo.splice(10, 0, 'Go');
arrTwo.pop();
console.log(arrTwo.length);
console.log(arrTwo);


// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.
