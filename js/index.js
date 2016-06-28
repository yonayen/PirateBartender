function Ingredients (name, type) {
	this.name = name;
	this.type = type;
}

function Questions () {
	var questions = // Array with questions
	for (var i = 0; i < this.) 
}

// Will house all the ingredients
function Pantry () {

}

function Bartender () {
	// Drink - createDrink (Preferences preferencesObject) - Receives Preferences object
}

function Drink () {
	this.ingredients = [];
}

Drink.prototype.addIngredient = function (ingredient) {
	this.ingredients.push(ingredients);
}

Drink.prototype.getDrinkType = function () {
	var drinkType = 'yer drink is ';
	for (var i = 0; i < this.ingredients.length; i++;) {
		drinkType += this.ingredients[i].type + ' ';
	} 
}


/*

// jQuery Functionality 

$(document).ready(function() {
	loadQuestions(); // Questions start at pageLoad.
});

// var options array from JSON file houses Questions key-value pairs, Answers array and the correct answer]

var options = [];

function loadQuestions() {
	$.getJSON("ingredients.json", function (data){
		options = data.options
		restartQuestions();
	});
}

// global variables

var currentQuestion = 0; // Starts with first question in var options

// begin again
function restartQuestions()
{
	currentQuestion = 0; // reset to zero
}

function updateQuestionTitle(title)
{
	$(".question-title").text(title);
}

function updateQuestionOptions(optionsArray,correct)
{
	for(var i=0; i<optionsArray.length;i++)
	{
		//["Shake of bitters", "splash of tonic", "twist of lemon peel"],
		//       0                    1                    2

		if()
		{
			
		}
		$(".question-options").append('<li class=' + '</li>');
	}
}

function nextQuestion()
{
	currentQuestion++;

	if (currentQuestion < options.length)
	{
		showNextQuestion();
	}
	else
	{
		showFinalDrink();

	}
}

function showNextQuestion()
{
	$(".question-options").empty();

	updateQuestionTitle(options[currentQuestion].question);
	updateQuestionOptions(options[currentQuestion].answers, options[currentQuestion].type);
}

function showFinalDrink()
{
	$(".question-title").text("Here's Your Drink!");

	$(".question-options").one("click", ".answer", function() {
		loadQuestions();
	});
}

/*
 1- Bartender asks questions (yes or no)
 2- If yes, save the type and select (randomly) one of the ingredients
 3- 
*/






