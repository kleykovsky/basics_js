'use strict';

// if (1) {
// 	console.log('Ok');
// } else {
// 	console.log('error');
// }

const num = 50;
// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log('ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

switch (num) {
	case 49:
		console.log('Not');
		break;
	case 100:
		console.log('Not');
		break;
	case 51:
		console.log('Greate');
		break;
	default:
		console.log('Bad');
}