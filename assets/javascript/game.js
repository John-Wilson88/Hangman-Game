// Variable Declarations
var characters = ["frodo", "sam", "mary", "pippin", "gimli", "legalos", "boromir", "aragorn", "gandalf"];
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
var letterGuesses = [];
var userGuess = " ";
var randNum = 0;
var wins = 0;
var tries = 10;
//var currentWord = " ";



//functions

//function to generate random # and return it.


function choose_word(num, word) {
	num =  Math.floor(Math.random() * word.length);
	//console.log(num);
	console.log(word[num]);
	return randNum = num;
}

//function that seaches the random word for the users guess.
 function guess_search(int, charArray, gueArray, input) {

	if (gueArray.includes(input)) {
		console.log("you already guessed that!");
		return;
	}

	else {

		gueArray.push(input);

		var z = charArray[int]

		if (z.includes(input)) {
			console.log("correct");
		}

		else {
			console.log("nopers");
		}
	}
}

// test function to see if i can know what indexes the letter are in if the user guesses the correct letter.
// a = randNum
// b = characters Array
// c = letterGuesses Array
// d = userGuess 
// e = currentWord


function checkWordForGuess(a, b, d, e) {
	//var currentWord = b[a];

	for (var i = 0; i < e.length; i++) {
		var str = e.charAt(i);
		if (str === d) {
			e = e.replace(str, " _ ");
		}
	}
	console.log(e);

} // end of checkWordForGuess


//function displayDashes() {}



choose_word(randNum, characters); 

	var currentWord = characters[randNum];

	guess_search(randNum, characters, letterGuesses, userGuess);

	checkWordForGuess(randNum, characters, userGuess, currentWord);




//function that accepts letters as guesses.
document.addEventListener("keypress",  function(x) {
	userGuess = x.key;
	console.log(userGuess);

	

	//return userGuess;
});








