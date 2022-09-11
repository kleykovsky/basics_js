'use strict';

// localStorage.setItem('number', 15);
// localStorage.setItem('s', 18);
// localStorage.setItem('ffffff', 33333);
// localStorage.removeItem('number')
// // localStorage.clear();
// console.log(localStorage.getItem('s'))

// const checkbox = document.querySelector('#checkbox'),
//     form = document.querySelector('form'),
//     change = document.querySelector('#color');
//
// if(localStorage.getItem('isChecked')) {
//     checkbox.checked = true;
// }
//
// if(localStorage.getItem('bg') === 'change') {
//     localStorage.removeItem('bg');
//     form.style.backgroundColor = 'red';
// }
//
//
// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true);
// });
//
//
//
// change.addEventListener('click', () => {
//     if(localStorage.getItem('bg') === 'change') {
//         localStorage.removeItem('bg');
//         form.style.backgroundColor = '#fff';
//
//     } else {
//         localStorage.setItem('bg', 'change');
//         form.style.backgroundColor = 'red';
//     }
// });

const person = {
    name: 'Alex',
    age: 25
};

// const seriaLizedPerson = JSON.stringify(person);
// localStorage.setItem('Alex', seriaLizedPerson);
localStorage.setItem('Alex', person);


console.log(localStorage.getItem('Alex'));

localStorage.removeItem('Alex');