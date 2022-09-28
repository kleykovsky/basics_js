const user = {
    name: 'Alex',
    surname: 'Kley',
    birthday: '02/05/1988',
    showMyPablicData: function () {
        console.log(`${this.name} ${this.surname}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

//writable
//enumirable
//configurable