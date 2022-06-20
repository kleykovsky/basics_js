'use strict';
/////// if else //////////////////////////////////////////
// if (1) {
// 	console.log('Ok');
// } else {
// 	console.log('error');
// }

// const num = 50;
// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log('ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// switch (num) {
// 	case 49:
// 		console.log('Not');
// 		break;
// 	case 100:
// 		console.log('Not');
// 		break;
// 	case 51:
// 		console.log('Greate');
// 		break;
// 	default:
// 		console.log('Bad');
// }

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
// 	console.log('Я сыт');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;


// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'qqq');


// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log('Все сыты!');
// } else {
// 	console.log('Мы уходим!');
// }


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries ===3 && nuggets) {
// 	console.log('Все довольны!');
// } else {
// 	console.log('Мы уходим!');
// }
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


// // let johnReport, alexReport, samReport, mariaReport = 'done';

// // console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);

//////////////////////////// HW ////////////////////////////////////
// Что выведет в консоль код?

// console.log( NaN || 2 || undefined ); // 2
 
// console.log( NaN && 2 && undefined ); // NaN      
 
// console.log( 1 && 2 && 3 ); // 3
 
// console.log( !1 && 2 || !3 ); // 2 false
 
// console.log( 25 || null && !3 ); // --- 25
 
// console.log( NaN || null || !3 || undefined || 5); // 5
 
// console.log( NaN || null && !3 && undefined || 5); // null 5
 
// console.log( 5 === 5 && 3 > 1 || 5); // True  

//////////////////////////////////////////////////////////////////
//Выполниться ли условие?  // Да

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }
///////////////////////////////////////////////////////////////
// Выполняется ли условие? // Да

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (console.log(hamburger || cola || fries === 3 || nuggets)) {
//    console.log('Done!');
// }
//////////////////////////////////////////////////////////////
// Выполняется ли условие? // Да  Нет

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

/////////////////////////////////////////////////////////////
