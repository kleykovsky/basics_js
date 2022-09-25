
// function* generator() {
//     yield  'a';
//     yield  'b';
//     yield  'c';
//     yield  'd';
// }
// const str = generator();
//
// console.log(str.next().value);
// console.log(str.next());

function* count(a) {
    for (let i = 0; i < a; i++) {
        yield i;
    }
}
const counter = count(8);

for (let c of counter) {
    console.log(c);
}

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

