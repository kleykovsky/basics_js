// let id = Symbol('id');

const obg = {
    'name': '123',
    [Symbol('id')]: 1,
    // [Symbol('id')]: 1,
    getId: function () {
        return this[id];
    }
}
// let id = Symbol('id');
// obg[id] = 1;
// console.log(obg.getId());

console.log(Object.getOwnPropertySymbols(obg));
console.log(obg);