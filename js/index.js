var currentQuestionIndex = 0;
var currentQuestion = null;
var questionsJson = null;

$.getJSON('options.json', function(data) {
	questionsJson = data.options;
	showQuestion();
});

function showQuestion () {
	if (currentQuestionIndex < questionsJson.length) {
		currentQuestion = new Question(questionsJson[currentQuestionIndex].name, 
									   questionsJson[currentQuestionIndex].type);

		$('#main-container').html(currentQuestion.getQuestionView());
	} else {
		showDrink();
	}
}

function showDrink () {
	var bartender = new Bartender (preferences) ;
	new Drink = bartender.createDrink
	// instance of bartender and passing 'create drink' method, passing preferences object -- will return drink to use new drink = bartender.createDrink
	
	// Call bartender (pass allong prferences object) and call the Bartender getDrink method.
	// Use jQuery to show this on the front end (last page)
}



// Target 'yes' class under #main-container by using second parameter
$('#main-container').on('click', '.yes', function () {
	alert(currentQuestion.getQuestion());
	// Add currentQuestion type to preferences object
	currentQuestionIndex++;
	showQuestion();
});

$('#main-container').on('click', '.no', function () {
	currentQuestionIndex++;
	showQuestion();
});





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






