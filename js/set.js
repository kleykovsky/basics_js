const arr2 = ['w', 't'];

const arr = [2,'Alex', 'Anna', 'Oleg', 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

const set = new Set(arr);
// set.add('Ivan');
// set.add('Alex');
// set.add(1);
// set.add([2, 2, 5]);
// set.add({name: 'Alex', age: 34});
// set.add(arr2[1]);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for(let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgaing) => {
//     console.log(value, valueAgaing);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());


// const set2 = [];
// for(let value of set ) {
//     set2.push(value);
// }
//
// console.log(set2);

console.log(set);
// console.log(typeof(set));