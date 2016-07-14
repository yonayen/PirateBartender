var currentQuestionIndex = 0;
var currentQuestion = null;
var questionsJson = null;

$.getJSON('options.json', function (data) {
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
	var bartender = new Bartender();
	// instance of bartender and passing 'create drink' method, passing preferences object -- will return drink to use new drink = bartender.createDrink
	var newDrink = bartender.createDrink(user_preferences);

	// Use jQuery to display final drink
	$('#main-container').append('<h2 class="question-title">' + 'You chose ' + newDrink + '</h2>');
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




