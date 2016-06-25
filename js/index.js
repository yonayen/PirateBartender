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