'use strict';

// let num = 50;

// while (num <= 55) {            //while
//     console.log(num);
//     num++;
// }


// do {                              //do
//     console.log(num);
//     num++;
// }
// while (num < 55);


// for (let i = 1; i < 10; i++ ) {              //for   оператор //break - закончит цикл досрочно
//     if(i === 6) {                            //   оператор //continue - пропускает тот шаг который не нужен 
//         // break;                                                       не прерывая цикл                             
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
// *
// **
// ***
// ****
// *****
// ******
// *******
// let result = '';
// const length = 10;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result +='*';
//     }
//     result +='\n';
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k ===2) continue first;
//             console.log(`Third ${k}`);
//         }
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log(`First ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second ${j}`);
//     }
// }
///////////////// HW-1 /////////////////////////////////////////////////////////
// 1
// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// let i = 4;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// let i = 5;
// do {
//     console.log(i);
//     i++;
// } while (i < 11);

////////////////////////////////////////////////////////
// 2
// for ( let i = 20; i >= 10; i--) {
//     if ( i === 13) {
//         break;
//     }
//     console.log(i);
// }
//////////////////////////////////////////////////////
// 3
// for (let i = 2; i <= 100; i++) {
//     console.log(i);
//     i++;
// }

/// Ivan
// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
//////////////////////////////////////////////////////
// 4
// example
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 15) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
//////////////////////////////////////////////////////
// 5

// const arr = [];
// for (let i = 5; i <= 10; i++) {
//    
//     arr[i - 5] = i;
//     console.log(arr);
// }
///////////////////////////////////////////////////////////
////////////////////////HW-2///////////////////////////////
// 1
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
    
//     for (let i = 0; i < arr.length; i++ ) {
//         result[i] = arr[i];
//     }
//     console.log(result);

///////////////////////////////////////////////////////////
// 2
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//     data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);
///////////////////////////////////////////////////////////
// 3
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }
// console.log(result);

//////////////////// HW-3 //////////////////////////////
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// const lines = 10;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

//////////////////////////////////////////////////