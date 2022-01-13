
var currentNumberWrapper = document.getElementById('currentNumber'); //criei uma variavel e peguei aquele Id que tenho no meu html

var currentNumber = 0; //comecei uma variavel com o nome currentNumber

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
} //Criei uma função com o nome increment,aonde peguei  a variavel currentNumber e incremento 1,quando clicarem no +, e depois eu chamo a currentNumberWrapper.innerHtml(peguei essa variavel que recebeu o Id do meu HTML e coloquei .innerHtml(vai fazer com que ela mude lá no HTML)) e faço ela receber o valor da minha variavel currentNumber

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
} //Criei uma função com o nome decrement,aonde peguei  a variavel currentNumber e decremento 1,quando clicarem no -, e depois eu chamo a currentNumberWrapper.innerHtml(peguei essa variavel que recebeu o Id do meu HTML e coloquei .innerHtml(vai fazer com que ela mude lá no HTML)) e faço ela receber o valor da minha variavel currentNumber

/* Deixei os números vermelhos,quando ficar abaixo de zero
currentNumberHtml = document.getElementById('currentNumber');

var currentNumber = 0;
var color = 'green';

function increment(){
    if (currentNumber > 0){
        color = document.getElementsByTagName('span')[0]
        color.style.color = 'black'
        currentNumber = currentNumber + 1;
        currentNumberHtml.innerHTML = currentNumber;

    } // O zero vai ficar vermelho também, por que quando ele fica preto, tava dando um lag grandão
    else{
        color = document.getElementsByTagName('span')[0]
        color.style.color = 'red'
        currentNumber = currentNumber + 1;
        currentNumberHtml.innerHTML = currentNumber;
    }
}

function decrement(){
    if (currentNumber >0){
        color = document.getElementsByTagName('span')[0]
        color.style.color = 'black'
        currentNumber = currentNumber - 1;
        currentNumberdohtml.innerHTML = currentNumber;
    }
    else{
        color = document.getElementsByTagName('span')[0]
        color.style.color = 'red'
        currentNumber = currentNumber - 1;
        currentNumberHtml.innerHTML = currentNumber;
    }
}
*/



/*Código do desafio da professora, se caso passar de 10 ou se caso menor do que 0
var currentNumberdohtml = document.getElementById('currentNumber');

var currentNumber = 0;
function increment(){
    if (currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberdohtml.innerHTML = currentNumber;
    }
    else{
        console.log("Não é possivel número maior do que 10")
    }
}

function decrement(){
    if (currentNumber >0){
        currentNumber = currentNumber - 1;
        currentNumberdohtml.innerHTML = currentNumber;
    }
    else{
        console.log("Não é possível número negativo")
    }
}
*/ 