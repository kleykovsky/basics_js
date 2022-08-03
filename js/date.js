// const now = new Date();

// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset() / 24);
// console.log(now.getTime());

// console.log(now.setHours(40));
// console.log(now);



let start = new Date();

for (let i = 0; i < 1000; i++) {
    let some = i ** 3;
}
let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);