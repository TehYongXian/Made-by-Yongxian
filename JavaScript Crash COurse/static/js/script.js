// challenge 1: your age in days

function ageInDays() {
let birthYear = prompt ('what year were you born...Good friend?');
let ageInDayss = (2018 - birthYear) * 365;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old!');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
console.log(ageInDayss);
}

// challenge 2: generate cat
function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// challenge 3: rock paper scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    //humanChoice = yourChoice.id;
    //botChoice = 
    //results = decideWinner(humanChoice, botChoice); // (0,1) human lost bot won
    //message = finalMessage(results); // '{messaeg: you won}', colour: 'Green'
    rpsFrontEnd(yourChoice.id, botChoice, message);
    
}