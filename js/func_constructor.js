//функции-конструктор
function User(name, id) {
    this.name = name;
    this.id = id;
    this.himan = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`User: ${this.name} is out`)
}

const alex = new User ('Alex', 20);
alex.exit();
alex.hello()
console.log(alex);