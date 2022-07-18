'use strict';
//to String
//1
console.log(typeof(String(null)));
//2
console.log(typeof(null + ''));
//3
const num = 5;
console.log('https://vk.com/catalog/' + num);
//4
const fontSize = 26 + 'px';
console.log(fontSize);
// to Number
//1
console.log(typeof(Number('4')));
//2
console.log(typeof(+'4'));
//3
console.log(typeof(parseInt('14', 10)));

let answ = +prompt('dddd', '');

// to Boolen
//1
//0, '', null, undefined, NaN;

let switcher = null;
if (switcher) {
    console.log('wrking.....');
}
switcher = 1;
if (switcher) {
    console.log('wrking.....');
}

//2
console.log(typeof(Boolean('14')));

//3
console.log(typeof((!!'14')));

