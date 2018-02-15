// Need array of word choices
// then need to choose a word randomly from that array
// then display random word as underscores
// get the users letter guess
// check to see if the letter guess is correct
// if correct push letter to "correct guess" array
// if incorrect push letter to "incorrect guess" array
// change underscore to correct letter, and display.


// variables and arrays
var characters = ["frodo", "sam", "mary", "pippin", "gimli", "legalos", "boromir", "aragorn", "gandalf"];
var randNum  =  Math.floor(Math.random() * characters.length);
var word = characters[randNum];

var num = 6;

console.log(characters[randNum]);

var correctGuesses = [];
var wrongGuesses = [];
var underscores = [];



function displayUnderscores() {

for (i = 0; i < word.length; i++) {
	underscores.push(" _ ");
}

	return underscores;

}

document.addEventListener("keypress",  function(x) {

	var beginingUnderscores = underscores;

	document.getElementById("randomUnderscores").innerHTML = beginingUnderscores;

	var userGuess = x.key;
	console.log(userGuess);

	if (word.includes(userGuess)) {
		console.log("correct");

		if(correctGuesses.includes(userGuess)) {
			return;
		}

		else {

			correctGuesses.push(userGuess);

			document.getElementById("goodGuesses").innerHTML = correctGuesses;
		}

		for (var j = 0; j < underscores.length; j++) {

			if (userGuess === word.charAt(j)) {
				 var y = word.charAt(j);

				 underscores[j] = y;

			}

		}

		document.getElementById("randomUnderscores").innerHTML = underscores;

	}

	else {

		if (num >= 1) {		

			if(wrongGuesses.includes(userGuess)) {
				return;
			}

			else {
				console.log("incorrect");
				wrongGuesses.push(userGuess);
			
				document.getElementById("badGuesses").innerHTML = wrongGuesses;

			}

			num--
			document.getElementById("triesRemaining").innerHTML = num;
			return num;
		}

		else {
			alert("you loser...");
			document.addEventListener("click", location.reload());

		}
	}

});


displayUnderscores();


