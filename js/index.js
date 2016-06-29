// Question Object
var Question = function (question, type) {
	this.question = question;
	this.type = type;
};

Question.prototype.getQuestion = function () {
	return this.question;
};

Question.prototype.getType = function () {
	return this.type;
};

var questionsJson = null;

$.getJSON("../ingredients.json", function(data) {
	questionsJson = data;
});

for (var i = 0; i < questionsJson.length; i++) {
	var currentQuestion = new Question(questionsJson[i].name, 
									   questionsJson[i].type);

	currentQuestion.getQuestion();
	currentQuestion.getType();
}

// Ingredient Object
function Ingredient (name, type) {
	this.name = name;
	this.type = type;
}

Ingredient.prototype.getName = function () {
	return this.name;
};

Ingredient.prototype.getType = function () {
	return this.type;
};

// Drink Object
function Drink () {
	this.ingredient = [];
}

Drink.prototype.addIngredient = function (ingredient) {
	this.ingredient.push(ingredient);
};

Drink.prototype.getDrinkType = function () {
	var drinkType = 'yer drink is ';
	for (var i = 0; i < this.ingredient.length; i++) {
		drinkType += this.ingredient[i].type + ' ';
	}
};

// Pantry Object
function Pantry () {
	this.item = [];	// Array Items
}

Pantry.prototype.getItemForType = function () {
	return this.type;
}

function Preferences () {
	this.preferences = [];

	$('.yes').on("click", function (){
		// add type
	});

	$('.no').on("click", function (){
		// don't add type?
	});
}

function Bartender () {
	// Drink - createDrink (Preferences preferencesObject) - Receives Preferences object & Returns Drink object
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






