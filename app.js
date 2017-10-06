var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

console.log('BASIC CARD:::'); 

var firstPresident = new BasicCard(
    'Who was the first president of the United States?', 'George Washington');

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);

console.log('CLOZED CARD:::'); 

var firstPresidentCloze = new ClozeCard(
    'George Washington is the first president of the United States.', 'George Washington');

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial());

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText); 