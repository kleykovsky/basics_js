///// метод выбора значения в расерыв. списке (<select>.....</select>)
function choose() {
    let arr = select.querySelectorAll('option');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].selected) {
            body.style.cssText = `background-color: ${arr[i].value}`;
        }
    }
}
/////////////////////////////////////////

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));
// let select = document.getElementById('color');
// let bgColorWhite = document.getElementById('whiteBackground');
// let bgColorBlack = document.getElementById('blackBackground');
// let body = document.getElementById('body');
// let btn = document.getElementById('btn');

// console.log(btn);


// bgColorBlack.addEventListener('click', function() {
//     body.style.cssText = 'background-color: black';
//     // console.log(this);;
//     console.log('ok');
// });

// btn.addEventListener('click', function() {
//     body.style.cssText = 'background-color: grey';
//     console.log('ok');

//     // document.getElementById('blackBackground').setAttribute('selected', true);
// });