//// Сортировка массива ///////////////////////////////

// let arrOne = ['Alex', 'Bob', 'Jon', 1, 2, 3];
// let arrTwo = [10, 20, 30, {name: 'Alex', age: 33}, 'Alex', [2, 1, 4]];
// let arrThree = [1, 2, 3, 23, 44, 5, 66, 11, 22];
// // let arr = [1, 2, 3, 23, 44, 5, 66, 11, 22];
// // console.log(arrOne.sort());
// // console.log(arrTwo.toString());
// // console.log(arrThree.sort());


// // let result = arr.map(function(item, index, array) {
// //    console.log(item, index, array); // возвращается новое значение вместо элемента
// //   });

// //// стрелочная функ-я для сортировки массива //////////////////////////

// console.log(arrThree.sort((a, b) => a - b));

// // Преобразование массива ///////////////////////////////

// // // let arrOne = ['Alex', 'Bob', 'Jon', 1, 2, 3];
// let arrTwo = [10, 20, 30, {name: 'Alex', age: 33, key: 22}, [2, 1, 4]];
// // // // // let arrThree = [1, 2, 3, 23, 44, 5, 66, 11, 22];

// let newArr = arrTwo.map(person => {
// 	return person;
// });

// console.log(arrTwo);
// console.log(newArr);
// for (let i of newArr) {
//     console.log(i);
// }
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
// // let arrThree = [1, 2, 3, 23, 44, 5, 66, 11, 22];

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
// const arrTwo = [1, 2, 3, 23, 44, 5, 66, 11, 22];
// arrTwo.forEach((item, index, array) => {
// 	console.log(index);
// });


///// Можно указать имя функции //////////////////////////////
// const arrTwo = [1, 2, 3, 23, 44, 5, 66, 11, 22];
// arrTwo.forEach(show);
// function show(index, item, array) {
//     return item;
//     // console.log(arrTwo);
// }
// show();

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

// const arrTwo = [1, 2, 3, 23, 44, 5, 66, 11, 22];

// // console.log(arrTwo);
// // console.log(arrTwo.length);
// // for (let i of arrTwo) {
// // 	console.log(i);
// // }
// // arrTwo.push('Go');
// // console.log(arrTwo);
// arrTwo.forEach((index) => {
//     console.log(index);
    
// });

// arrTwo.unshift('aaaaa');
// // arrTwo.push('Go');
// arrTwo.splice(2, 0, 'Go');
// arrTwo.pop();
// console.log(arrTwo.length);
// console.log(arrTwo);


// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.

///////////////////////////////////////////////////////
/// Массивы и псевдомассивы
// const arr = [1, 2, 3, 4, 5];
// const arr = [5, 4, 3, 2, 1];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
    
// }



// const str = 'asd';
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

//// for...of  метод перебора только для массивов, set, map и string
//// есть возможность прервать 
// for (let value of arr) {
//     console.log(value);    
// }
    
// for (let value in arr) {
//     console.log(value);
// }

//.forEach // Метод перебора массива через функцию callback(Для массивов)
// arr.forEach(function(item, index, value) {
//     console.log(`${index}: ${item} inside in array ${value} `);
// });


//// Преобразуем неупорядоченный набор символов - в упорядоченный массив
// const str = prompt('', '');
// const str = 'wwwww, eeeee, rrrrrrr, aaaaaaa, 11111, 22222, 55555';
// const products = str.split(','); //преобразует в массив
// // console.log(products);
// products.sort();  // Сортирует все элем. как строки

// // console.log(products.trim());
// console.log(products.join(';')); // добавляет - ; ко всем элем. и возв. строку
// console.log(products);
// // for (let value of products) {
// //     console.log(products.length);
   
// // }

// products.forEach(value => console.log(value));

// console.log(arr);
// // arr.pop();   /// dell elem to the end of the array
// // console.log(arr);
// arr.push(4);   /// add elem to the end of the array
// console.log(arr);

// //// Перебор массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

////////////////Делим массив на подмосивы//////////////////////////

// function sliceIntoChunks(arr, chunkSize) {
//     const res = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//         const chunk = arr.slice(i, i + chunkSize);
//         res.push(chunk);
//     }
//     return res;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sliceIntoChunks(arr, 3));
////////////////////////////////////////////////////////////////////

////////////////////////HW///////////////////////////////////////////
////Делим массив на 3 подмосива + элемент как строка/////////////////////
// const students = ['1', '2', '3', '4', '5', '6', '7', '8', '10'];
// function sortStudentsByGroup(arr) {
//     const gr1 = [], gr2 = [], gr3 = [], rem = []; 
//     arr.sort();
//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             gr1.push(arr[i]);
//         } else if (i < 6 && i >= 3) {
//             gr2.push(arr[i]);
//         } else if (i < 9 && i >= 6) {
//             gr3.push(arr[i]);
//         } else {
//             rem.push(arr[i]);
//         }
//     }
//     return [gr1, gr2, gr3, `Оставшиеся студенты: ${rem.length === 0 ? '-' : rem.join(', ')}`];
// }
// sortStudentsByGroup(students);
////////////////////////////////////////////////////////////////////

// const arr = ['1', '2', [3]];
// const arr2 = [...arr, 'eee', {name: 'a', age: 11}];
// console.log(arr2);

// const obj = {
//     name: 'A',
//     age: 1
// };
// console.log(obj);

// const newObj  = {
//     ...obj,
//     name: 'B'
// };
// console.log(newObj);



///////////////////////////////Методы перебора//////////////////////////
///////////////Filtr
// const names = ['Alex', 'Ivan', 'Vladelen'];
// const shortNames = names.filter(name => name.length < 5);
// console.log(shortNames);
//[ 'Alex', 'Ivan' ]


///////////Map
// let answers = ['AleX', 'iVAN', 'Go'];
// const result = answers.map(item => item.toLowerCase());
// console.log(result);
//[ 'alex', 'ivan', 'go' ]

////////////every/some
// let some = [1, 'iVAN', 'Go'];
// console.log(some.every(item => typeof(item) === 'number'));
//false

// console.log(some.some(item => typeof(item) === 'number'));
//true

/////////////////reduce
// const arr = [1,2,3,43,5];

// const result = arr.reduce((sum, current) => sum + current, 2);
// console.log(result);
//56

// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}` );
// console.log(result);
//apple, pear, plum

// const obj = {
//     alex: 'person',
//     ivan: 'person',
//     cat: 'animal',
//     dog: 'animal',
// };
// const newArray = Object.entries(obj)
// .filter(value => value[1] === 'person')
// .map(value => value[0]);
// console.log(newArray);
///[ 'alex', 'ivan' ]
/////////////////////////HW///////////////////////////////////////////

//1
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];
console.log(films);
function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8);
}
let a = showGoodFilms(films);
console.log(a);

function showListOfFilms(arr) {
    let res = '';
    for(let i = 0; i < arr.length; i++) {
        res += arr[i].name + ", ";
    }
    return res.slice(0, -2);
}
let b = showListOfFilms(films);
console.log(b);

function setFilmsIds(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i].id = i;
    }
    return arr;
}
let tranformedArray = setFilmsIds(films);
console.log(tranformedArray);

function checkFilms(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].id === undefined) return false;
    }
    return true;
}
console.log(checkFilms(tranformedArray));
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//2

const founds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount:   500},
    {amount: 10400},
    {amount: -11400},
];

function getPositiveIncomeAmount(data){
    let accum = 0;
    for(let i = 0; i < data.length; i++) {
        if(data[i].amount > 0) accum += data[i].amount; 
       }
       return accum;
       
    // return data.filter(item => item.amount > 0).reduce((acc, accum) => acc + accum.amount, 0);
}

let gpia = getPositiveIncomeAmount(founds);
console.log(gpia);

function getTotallncomeAmount(data) {
    let acc = true;
    for(let i = 0; i < data.length; i++) {
        if(data[i].amount < 0) acc = false;
    }
    if(acc) {
        getPositiveIncomeAmount(data);
    } else {
        return data.reduce((accc, accum) => accc + accum.amount, 0);
    }
    
    // return data.some(item => item.amoumt < 0) ? data.reduce((acc, accum) => acc + accum.amount, 0) : getPositiveIncomeAmount(data);
}
console.log(getTotallncomeAmount(founds));



