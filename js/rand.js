
function passRendom() {
    let max = 99999999,
        min = 10000000;
    const btn = document.querySelector('#btn'),
          outputText = document.querySelector('#usd')
    outputText.style.cssText = `
        display: block; 
        width:300px; 
        height:60px; 
        border: solid 2px red;
        border-radius: 10px;
        color: green;
    `
    btn.addEventListener('click', () => {
        outputText.textContent = `${(Math.floor(Math.random() * (max - min) + min))}`;
        outputText.style.fontSize = '60px';
    })
    };
passRendom();

