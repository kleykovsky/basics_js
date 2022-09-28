let shops = [
    {rise: 500},
    {oil: 200},
    {bred: 50},
]

let budget = [5000, 15000, 25000];

let map = new Map([
    [{paper: 4000}, 9000]
]);


shops.forEach((shops, i) => {
    map.set(shops, budget[i]);
});

console.log(map);

console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);
// map.delete();
// map.clear();
// map.size;

let goods = [];
// for(let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//     goods.push(price);
// }
// console.log(goods);

for (let price of map.values()) {
    goods.push(price);
}
console.log(goods);