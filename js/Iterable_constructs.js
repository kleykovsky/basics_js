const user = {
    name: 'Alex',
    surname: 'Kley',
    birthday: '02/05/1988',
    showMyPablicData: function () {
        console.log(`${this.name} ${this.surname}`)
    }
}

for (let key in user) {
    console.log(user[key])
}

// let arr = [1, 2, 3];
// for (let key in arr) {  // получение ключа
//     console.log(arr[key])
// }

let arr = [11, 22, 33];
Array.prototype.asd = function (){};
// console.dir(arr);
for (let key of arr) {  // получение значения
    console.log(key)
}


let str = 'abc';
for (let key in str) {
    console.log(str[key]);
}