// class //
class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Kle'

    say(){
        console.log(`Имя пользователя: ${this.name}, ${this.#surname} возраст ${this._age}`);
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (typeof  age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('=====xxx====');
        }
    }
}

const alex = new User('Alex', 34);

console.log(alex._age);
alex._age = 20;
console.log(alex.age);
// console.log(alex.#surname);
// alex._age = 80;
// console.log(alex._age);
alex.say();


// constructor //
// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age;
//
//     this.say = function () {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//
//     };
//
//     this.getAge = function () {
//         return userAge;
//     };
//
//     this.setAge = function (age) {
//         if (typeof  age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('=====xxx====');
//         }
//     };
// }


// const  alex = new User('Alex', 34);
//
// console.log(alex.name);
// console.log(alex.getAge());
//
// alex.setAge(35);
// alex.setAge(350);
//
// console.log(alex.getAge());
//
// alex.say();
//
//
// alex.setAge(100);
// console.log(alex.getAge());
