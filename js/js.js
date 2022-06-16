'use strict';


////// Классификация типов данных ///////////////////
// let number = 4.6;
// console.log(-4 / 0);
// console.log(9 + 'string');

// const person = 'Alex';

// const bool = true;

// console.log(dsa);


// let und;
// console.log(und);

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };
// // console.log(obj.age);
// // console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpg', 8, {}, []];
// console.log(arr[2]);

///////// abject & array //////////////////
// const arr = [1, 2, 3, [1, 2, 'sas']];

// arr[10] = '234234';
// console.log(arr);

// const obj = {
//     Alex: 1000,
//     Bob: 2000,
//     Camel: 3000
// };
// const arrObj = {
//     a:'a',
//     1:'b',
//     2:'c',
//     asd: {
//         ffff: [{}, {},],
//         gds: {
            
//         }
//     }
// };
// const b = 'b';
// // arrObj.b = '1234';
// arrObj[b] = '1234';
// console.log(arrObj['b']);
// console.log(arrObj.b);
///////////////////////////////////////////////////////////////
////////// Взаимодействие скрипта с пользователем ////////////
// const result = confirm('Are you here?');

// const answer = +prompt('What your age?', '18');
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('Как Ваше имя?', '');
// answers[1] = prompt('Как Ваше фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');


// console.log(typeof(answers));
// console.log(typeof(null));

//////////////////////////////////////////////////////////////
//////// интерполяция ES6 ///////////////////////////////////
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Приветб ${user}`);
////////////////////////////////////////////////////////////
///////////////////// Операторы ///////////////////////////

// console.log('arr' + ' - object');

// console.log(4 + +'4');


let incr = 10,
    decr = 10;

    ++incr; //инкримент
    --decr; //дикримент
    console.log(++incr); // префиксная форма
    console.log(--decr); // 
    console.log(incr++); // постфиксная форма
    console.log(decr--);
    
    console.log(2 + 2 * 2 !== '6');

    console.log(5 % 2); // остаток от деления 2-х чисел
    console.log(8 == '8'); // нестрогое равенство
    console.log(2*4 === 8); // строгое равенство