
const inputSom = document.querySelector('#som');
const inputUsd = document.querySelector('#usd');

inputSom.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputSom.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = '***Error - 506, "Maybe lost connection to server"***';
            // console.log(inputUsd.value = '***Error - 506, "Maybe lost connection to server"***');
        }
    });

    //Свойства:
    // status
    // statusText
    // response
    // redyState

    //События
});