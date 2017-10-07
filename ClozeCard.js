var fs = require("fs");

var ClozeCard = function (text, cloze) { 
    this.fullText = text;
    this.cloze = cloze;
    this.checkError();
}

ClozeCard.prototype.partial = function () {
    return this.fullText.replace(this.cloze, '......');
};

ClozeCard.prototype.checkError = function () {
        if (this.fullText.search(this.cloze)<0){                        //returns -1 if cannot find
            console.log('ERROR! Cannot find word(s) in statement.');
        } 
    };

module.exports = ClozeCard;