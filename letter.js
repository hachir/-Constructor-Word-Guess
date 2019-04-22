
function Letter(character) {
    this.character = character;
    this.guessed = false;

    this.display = function() {
        if (this.guessed === true) {
            return this.character;
        }
        else {
            return "_";
        }  
    }
    this.checkGuess = function(guess) {
        if (guess === this.character) {
            this.guessed = true;
        }
        else {
            return false;
            
        }
    }
}

module.exports = Letter;