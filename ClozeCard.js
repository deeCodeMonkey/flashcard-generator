var fs = require("fs");

var ClozeCard = function (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
}

ClozeCard.prototype.partial = function () {
    return this.fullText.replace(this.cloze, '......')
};

//var firstPresidentCloze = new ClozeCard('George Washington is the first president of  the United States.', 'George Washington');


//// "George Washington"
//console.log(firstPresidentCloze.cloze);

//// " ... was the first president of the United States.
//console.log(firstPresidentCloze.partial()); 

//// "George Washington was the first president of the United States.
//console.log(firstPresidentCloze.fullText); 


// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze = new ClozeCard("This doesn't work", "oops");


module.exports = ClozeCard;