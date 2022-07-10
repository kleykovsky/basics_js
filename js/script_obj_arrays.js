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

// const {border, bg} = options.colors;
// console.log(options);
// console.log(options);

// console.log(options.name);
// // delete options.name;
// console.log(options);
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

