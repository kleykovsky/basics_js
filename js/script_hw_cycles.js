'use strict';

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания
// let number0fFilms;

// function start() {
// 	number0fFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
// 	while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
// 		number0fFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
// 	}
// }
// start();  Переместили в personalMoveBD переделали сделаи её в методом

const personalMoveDB = {
	count: 0,
	movies: {},
	actors: {}, 
	genres: [],
	privat: false,
	start: function () {
		personalMoveDB.count= +prompt('Сколько фильмов Вы посмотрели?', '');
		while (personalMoveDB.count == '' || personalMoveDB.count == null || isNaN(personalMoveDB.count)) {
			personalMoveDB.count = +prompt('Сколько фильмов Вы посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMoveDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMoveDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMoveDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMoveDB.privat ) {
			personalMoveDB.privat = false;
		} else {
			personalMoveDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i < 2; i++) {
			// let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
			// if (genre === '' || genre == null) {
			// 	console.log('Вы ввели не коректнае данные');
			// 	i--;
			// } else {
			// 	personalMoveDB.genres[i - 1] = genre;
			// }

			/// Другой метод реализации

			let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
			if (genres === '' || genres == null) {
				console.log('Вы ввели не коректнае данные');
				i--;
			} else {
				personalMoveDB.genres = genres.split(', ');
				personalMoveDB.genres.sort();
			}
		}
		personalMoveDB.genres.forEach((item, i) => {
			console.log(`"Любимый жанр ${i + 1} - это ${item}`);
		});
	}
	
};


// console.log(personalMoveDB);

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

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
// 			  b = prompt('На сколько оцените его?', '');
// 		if (a != null && b != null && a  != '' && b != '' && a.length < 50) {
// 			personalMoveDB.movies[a] = b;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }
// rememberMyFilms(); Переместили в personalMoveBD переделали сделаи её в методом   

// function writeYourGenres() {
// 	for (let i = 0; i < 3; i++) {
// 		const gen = prompt(`Ваш любимый жанр под номером ${i}`);
// 		personalMoveDB.genres[gen] = gen;
// 	}
// }

// function detectPersonalLevel() {
// 	if (personalMoveDB.count < 10) {
// 		console.log('Просмотрено довольно мало фильмов');
// 	} else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
// 		console.log('Вы классический зритель');
// 	} else if (personalMoveDB.count >= 30) {
// 		console.log('Вы киноман');
// 	} else {
// 		console.log('Произошла ошибка');
// 	}
// }
// detectPersonalLevel(); Переместили в personalMoveBD переделали сделаи её в методом

// function showMyDb(hidden) {
// 	if (!hidden) {
// 		console.log(personalMoveDB);
// 	}
// }
// showMyDb(personalMoveDB); ереместили в personalMoveBD переделали сделаи её в методом

// function writeYourGenres() {
// 	for (let i = 1; i <= 1; i++) {
// 		personalMoveDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`).trim();
// 	}
// }
// writeYourGenres(); Переместили в personalMoveBD переделали сделаи её в методом