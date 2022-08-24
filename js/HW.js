
//Вывод четных чисел

function getEvNum(num) {
    let counter = 0;
    for(let i = 0; i < num; i++) {
        if(i % 2 == 1) {
            counter ++;
        }
    }
    console.log(counter);
}
getEvNum(5);
//////////////////////////////////////////
//Добавить столько колличество 0 в начале строки, скольоко не хватает в фиксированной длинны. 

function addTolen(num, size) {
    let str;
    for(str = num +''; str.length < size;) {
        str = '0' + str;
    }
    return str;
}
console.log(addTolen(99, 10));

function addlen2 (num, size) {
    let str = num + '';
    while(str.length < size) {
        str = '0' + str;
    }
    return str;
}
console.log(addlen2(888888888, 10));

/////////////////////////////////////////////////
//Каждый второй символ .toUpperCase

function toUpCa(str) {
    let newS = '';
      for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
          newS += str[i].toUpperCase();
        }
      }
      return newS;
    }
console.log(toUpCa('aaaaaa'));
///////////////////////////////////////////////////////////

   function newUp(Str) {
    let a = '';
    for(let i = 0; i < Str.length; i++) {
        if(i % 2 == 0) {
            a += Str[i].toUpperCase();
        } else {
            a += Str[i];
        }
    }
    return a;
}
console.log(newUp('ffffffff'));

let date = new Date();
// console.log(date);
let day = date.getDate();
// console.log(day);
// let month = date.getMonth();
 for(let i = 1; i < day; i++) {
    let newDay = i;
    console.log(newDay);
}



let year = Date().split(' ')[3];
let today = new Date();
let numMonth = today.getMonth() + 1;

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
   }
let totalDaysInMonth = daysInMonth(numMonth, year);

function calendar(num) {
    let newToDay = new Date().getDate();
    let newStr = `Этот день: ${newToDay}`;
    for(let i = 0; i < num; i++) {
        if(i == newStr) {
            console.log(i);
           
            
        }
    }
}
calendar(totalDaysInMonth);
