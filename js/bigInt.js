// const bigint = 12313021214373982793226387161970198131n;
const someBigint = BigInt(12313021214373982793226387161970198131);

// console.log(5n == 5);

let bigint = 1n;
let number = 2;
console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);