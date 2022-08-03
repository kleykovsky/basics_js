
///////WeakMap()////////////////////
//методы clear, delete, get, set, has


// let user = {name: 'Alex'};

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map);


let cache = new WeakMap();
function cacheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now());
	}
	return cache.get(user);
}
let Alex = {name: 'Alex'};
let Ivan = {name: 'Ivan'};

cacheUser(Ivan);
cacheUser(Alex);

Ivan = null;

console.log(cache.has(Ivan));
console.log(cache.has(Alex));

/////WeakSet()//////////////////
//имеет методы add, has, delete


let messages = [
    {text: 'hello', from: 'Alex'},
    {text: 'hi', from: 'John'},
    {text: 'Good afternoon', from: 'Elena'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));
