function  myModule() {
    this.hello = function () {
        console.log('Hello');
    };
    this.goodbye = function () {
        console.log('Goodbye!');
    };
}
module.exports = myModule;

export let  one = 1;

let two = 2;
export{2};

export function sayHello() {     // экспорт функции
    console.log('Hello`');
}

export default function sayHello() { //экспорт по умолчанию
    console.log('Hello`');
}