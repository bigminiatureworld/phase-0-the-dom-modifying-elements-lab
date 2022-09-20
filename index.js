main.remove();


//1) has a 'newHeader' variable that points to an <h1> node
document.body.append(h1);
let newHeader = document.querySelector('h1');

//2) the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.h1.id = victory;

//3) the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it
document.querySelector('h1').textContent = 'Adam is the champion'


const renderHeader = document.querySelector('h1').textContent = 'Adam is the champion';
    
