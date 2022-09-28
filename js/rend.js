
function passRendom() {
    let str = 'qweertyuASDFGHJKKL'
    let max = 99999999,
        min = 10000000;
    const btn = document.querySelector('#btn'),
          outputText = document.querySelector('#usd')
    outputText.style.cssText = `
        display: block; 
        max-width: 250px; 
        height:60px; 
        border: solid 2px red;
        border-radius: 10px;
        color: green;
    `
    btn.addEventListener('click', () => {
        rendomNumber = `${(Math.floor(Math.random() * (max - min) + min))}`
        outputText.textContent = rendomNumber;
        outputText.style.fontSize = '60px';
    })
    };
passRendom();

////////////////////////////////////////

// const user = {
//     name: 'Alex',
//     surname: 'Kley',
//     birthday: '02/05/1988',
//     showMyPablicData: function () {
//         console.log(`${this.name} ${this.surname}`)
//     }
// }
// console.log(user);
// console.log(typeof (Object.keys(user)[0]));

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
})

console.log(map);

console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);
// map.delete();
// map.clear();
// map.size;



