
const person = {
    name: 'Alex',
    age: 25,
    sex: 'fomale',

    get userAge() {
        return this.age;
    },
    set userAge(num) {
        this.age = num;
    },
    get userSex() {
        return this.sex;
    },
    set userSex(sex) {
        this.sex = sex;
    }
};

console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);
// console.log(person.userSex);
console.log(person.userSex = 'male');
console.log(person.userSex);



