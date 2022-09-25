// try {
//     cconsole.log('---OK---');
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }
// console.log('Next...')

try {
    document.querySelector("#btn").addEventListener('click', () => {
        console.log('click');
    })
} catch(error) {
    console.log(error)
}
console.log('normal');