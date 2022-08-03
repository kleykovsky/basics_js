'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const john = Object.create(solder); // Создает прототипную связь

// const john = {
//     health: 100
// };

// john.__proto__ = solder;  //Устаревший формат

// Object.setPrototypeOf(john, solder); //Устанавливает проторип

// console.log(john.armor);
john.sayHello();