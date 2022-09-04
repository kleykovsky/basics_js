// console.log('Request....');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Waiting....');
    
//         const product = {
//             name: 'TV',
//             price: 1000,
//         };
       
//         resolve(product);
//         // reject();
//     }, 2000);
// });
// req.then((product) => {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log("***error***");
// }).finally(() => {
//     console.log("finally");
// });
//////////////////////////////////////////

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });
//////////////////////////////////////////////////

//Прмер:
// Промис
// const isMomHappy = false;
// const willIGetNewPhone = new Promise(
//     (resolve, reject) => { // fat arrow
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }
//     }
// );
// const showOff = function (phone) {
//     const message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';
//     return Promise.resolve(message);
// };
// // Вызываем промис
// const askMom = function () {
//     willIGetNewPhone
//         .then(showOff)
//         .then(fulfilled => console.log(fulfilled)) // fat arrow
//         .catch(error => console.log(error.message)); // fat arrow
// };
// askMom();
////////////////////////////////////////////////////

//Пример2: callback
// console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'backend',
//         port: 5521,
//         status: '***working***',
//     };

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received', backendData);
//     }, 2000);
// }, 2000);
/////////////////////////////////////////////////////////////

//Promise
// console.log('Request data...');
// const prm = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'back',
//             port: 5053,
//             status: 'working'
//         };
//         resolve(backendData);
//     }, 2000);
// });
// prm.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000);
//     });
// })
//     .then(clientData => {
//         // console.log('Data received', clientData);
//         clientData.fromPromise = true;
//         return clientData;
//     })
//     .then(data => {
//         console.log('Modified', data);
//     })
//     .catch(err => console.error('***ERROR***', err))
//     .finally(() => {
//         console.log('Finaly');
//     });
///////////////////////////////////////////////////
//sleep

// const sleep = ms => {
//    return new Promise(resolve => {
//         setTimeout(() => resolve(), ms);
//     });
// };
// // sleep(2000).then(() => console.log('After 2 sec...'));
// // sleep(3000).then(() => console.log('After 3 sec...'));

// //Promise All

// Promise.all([sleep(2000), sleep(3000)])
//     .then(() => {
//         console.log('All promise');
//     });

// //Promise Race

// Promise.race([sleep(2000), sleep(3000)])
//     .then(() => {
//         console.log('Race promise');
//     });

