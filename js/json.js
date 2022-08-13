//  JSON - java script object natation (объектная натация java script)
//         текстовый формат обменна данными и хронения.

const person = {
    name: 'Alex',
    tel: '+21233333',
    parents: {
        mom: 'qqqq',
        dad: 'aaaa'
    }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);

