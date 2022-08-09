'use stric';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 4);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     } 
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// let alex = new User('Alex', 11);
// console.log(alex);


// function sayName() {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'Alex'
// }

// sayName.call(user, 'Alex');
// sayName.apply(user, ['Alex']);

// function count(num) {
//     return this*num;
// }

let btn = document.getElementById('btn');
 btn.addEventListener('click', function() {
    this.style.backgroundColor = 'grey';
    console.log('ok');
 });

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();

const double = (a, b) => a * b;
console.log(double(4, 2));


// 1. Обычная функция: this = window, но если use stric - undefined
// 2. Контекст у методо объекта  - сам объект
// 3. this в кострукторах и классах - это новый экземпляр объекта
// 4. Ручная привязка this: call, apply, bind


function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional);
}
setOptions(400, 500, ' ', '44444', 'gdgdfgd', 2, 444);