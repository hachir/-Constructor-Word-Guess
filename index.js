  
var inquirer = require('inquirer');
var Letter = require('./letter.js');
var Word = require('./word.js');


function newGame() {

    var word = new Word("Warriors");
    word.display();
    userGuess(word);
}

function userGuess(word){

	inquirer.prompt([{
        name: "letter",
        message: "Guess a letter: ",
        type: "input",
        
        }]).then(function(guess){
           
		word.checkLetter(guess.letter);
        word.display();
        userGuess(word);   
    });
    
}
newGame();