//////////////////////setTimeout/////////////////////////
///Анимация

// const btnWhite = document.querySelector('.btn_white');
// btnWhite.addEventListener('click', myAnim);

// 	function myAnim() {  //Анимация элемента при помощи setInterval
// 		const elem = document.querySelector('.tabcontent__descr');
// 		let position = 300;

// 		const id = setInterval(frame, 5);

// 		function frame() {
// 			if (position == 0) {
// 				clearInterval(id);
// 			} else {
// 				position --;
// 				elem.style.top = position + 'px';
// 				elem.style.left = position + 'px';
// 			}
// 		}
// 	}

//////////////////////////////////////////////////////////
//меняем цвет кнопки

// const btnWhite = document.querySelector('.btn_white');
// let timer,
// 	i = 1;

// btnWhite.addEventListener('click', () => { // Меняем цвет кнопки по клику с задержкой 1с
// 	// const timer = setTimeout(text, 2000);
// 	timer = setInterval(changeColor, 500);
// });
// // clearInterval(timer);

// let changeColor = () => {
// 		btnWhite.style.backgroundColor = '#290'; // функция смена цвета кнопки
// 	// if (i === 3) {
// 	// 	clearInterval(timer);
// 	// }
// 	// console.log('t');
// 	// i++;
// };


//random

let max = 290,
    min = 180;

    let c = () => {
        return (Math.floor(Math.random() * (max - min) + min));
        
    };
// console.log(c());
let c2 = c();
console.log(c2);

console.log(typeof(c2));
// console.log(`#${c()}`);


////////////////////////////////////////////


// let id = setTimeout(function log() {
// 	console.log('text2');
// 	id = setTimeout(log, 500);
// }, 500);

// const timer = setTimeout(text, 5000);

	// function text() {
	// 	if (i === 3) {
	// 		clearInterval(timer);
	// 	}
	// 	console.log('text');
	// 	i++;
	// }
//////////////////////////////////////////////////////////