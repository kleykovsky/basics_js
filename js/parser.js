window.addEventListener('DOMContentLoaded', () => {
    const body =  document.querySelector('body');
    let textNodes = [];

    function recursy(element) {
        element.childNodes.forEach(node => {
            if(node.nodeName.match(/^H\d/)) {
                const obj = {
                    // header: node.nodeName,
                    header: node.textNodes,
                    content: node.textContent,
                };
                textNodes.push(obj);
                textNodes.push(node.textContent);
                // return;
                // console.log(node);
                // recursy(node);
            } else {
                // console.log(node);
                recursy(node);
            }
        });
    }
    recursy(body);
    // console.log(textNodes);
    fetch('http://localhost:3000/requests', {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log(json));
});