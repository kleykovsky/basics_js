// async function async(event) {
// 	let a = await fetch('http://localhost:8080/a?a=qwerty', {
// 		'method' : 'GET',
// 		'header' : {
// 			'Content-type': 'application/json; charset=utf-8'
// 		}
// 	});
// 	console.log(a.text());
// }
/////////////////////////////////////////////////////////////////////////
function async(event) {  // Запрос на сервер
	let a = new Promise((resolve, reject) => {
		let url = 'http://localhost:8080/a?a=1&b=2';
		fetch(url, {
			'method': "GET",
			'header': {
				'Content-type': 'application/json; charset=utf-8', 
			},
		}).then((response) => {
			// console.log(response);
			return response.text();
		}).then((response) => {
			console.log(response);
		});
	});
}