
function passRendom() {
    let str = 'qweertyuASDFGHJKKL';
    let max = 99999999,
        min = 10000000;
    const btn = document.querySelector('#btn'),
          outputText = document.querySelector('#usd')
    outputText.style.cssText = `
        display: block; 
        max-width: 250px; 
        height:60px; 
        border: solid 2px red;
        border-radius: 10px;
        color: green;
    `;
    btn.addEventListener('click', () => {
        rendomNumber = `${(Math.floor(Math.random() * (max - min) + min))}`;
        outputText.textContent = rendomNumber;
        outputText.style.fontSize = '60px';
    });
    }
passRendom();

////////////////////////////////////////


