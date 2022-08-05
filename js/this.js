'use stric'

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
//         shout()
//     } 
// };
// obj.sum();


function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
    
}
let alex = new User('Alex', 11);
console.log(alex);

// 1. Обычная функция: this = window, но если use stric - undefined
// 2.  Контекст у методо объекта  - сам объект 