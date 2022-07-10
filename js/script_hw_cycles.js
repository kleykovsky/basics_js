/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let number0fFilms;

function start() {
	number0fFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
	while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
		number0fFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
	}
}
start();

const personalMoveDB = {
	count: number0fFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
// let i = 0;
// do {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		  b = prompt('На сколько оцените его?', '');
// 	if (a != null && b != null && a  != '' && b != '' && a.length < 50) {
// 		personalMoveDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++;
// } while (i < 2);

// let i = 0;
// while (i < 2) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	  	  b = prompt('На сколько оцените его?', '');
// 	if (a != null && b != null && a  != '' && b != '' && a.length < 50) {
// 	personalMoveDB.movies[a] = b;
// 	console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++;
// }
function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
			  b = prompt('На сколько оцените его?', '');
		if (a != null && b != null && a  != '' && b != '' && a.length < 50) {
			personalMoveDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilms();

// function writeYourGenres() {
// 	for (let i = 0; i < 3; i++) {
// 		const gen = prompt(`Ваш любимый жанр под номером ${i}`);
// 		personalMoveDB.genres[gen] = gen;
// 	}
// }

function detectPersonalLevel() {
	if (personalMoveDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMoveDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonalLevel();

function showMyDb(hidden) {
	if (!hidden) {
		console.log(personalMoveDB);
	}
}
showMyDb(personalMoveDB);

function writeYourGenres() {
	for (let i = 1; i <= 1; i++) {
		personalMoveDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`).trim();
	}
}
writeYourGenres();
console.log(personalMoveDB);