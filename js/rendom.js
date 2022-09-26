////random

// // let max = 290,
// //     min = 180;

// let max = 240,
//     min = 112;

//     let randomColor = () => {
//         return `#${(Math.floor(Math.random() * (max - min) + min))}`;
//     };
// let color = randomColor();
// // let c2 = `#${c()}`;
// // console.log(c2);
// // console.log(typeof(c2));
/////////////////////////////////////////

/////////////////////////////////////////////////////////////////

// // меняем цвет кнопки
// const btnWhite = document.querySelector('.btn_white');
// let timer,
// 	i = 1;

// btnWhite.addEventListener('click', () => { // Меняем цвет кнопки по клику с задержкой 1с
// 	// const timer = setTimeout(text, 2000);
// 	timer = setInterval(changeColor, 500);
// });
// clearInterval(timer);

// let changeColor = () => {
// 		btnWhite.style.backgroundColor = color; // функция смена цвета кнопки
// 	if (i === 3) {
// 		clearInterval(timer);
// 	}
// 	console.log('t');
// 	i++;
// };
////////////////////////////////////////

//random

// let max = 290,
//     min = 180;

let max = 240,
    min = 112;

    let randomColor = () => {
        return `#${(Math.floor(Math.random() * (max - min) + min))}`;
    };
let color = randomColor();
let c2 = `#${c()}`;
console.log(c2);
console.log(typeof(c2));
/////////////////////////////////////////

//Параметры документа, окна и работа с ними

// const block = document.querySelector('.tabcontent__descr');
// const width = block.clientWidth;
// const height = block.clientHeight;

// // console.log(width, height);
// const btn = document.querySelector('.btn_white');
// btn.addEventListener('click', () => {
// 	block.style.height = block.scrollTop + 'px';
// });
// console.log(block.getBoundingClientRect());
// const style = window.getComputedStyle(block);
// console.log(style.display);

// console.log(document.documentElement.scrollTop);
////////////////////////////////////////////////////////////////////