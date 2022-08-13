
const inputSom = document.querySelector('#som');
const inputUsd = document.querySelector('#usd');

inputSom.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
        }
    });

    //Свойства:
    // status
    // statusText
    // response
    // redyState

    //События
});