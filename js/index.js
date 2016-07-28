var currentQuestionIndex = 0;
var currentQuestion = null;
var questionsJson = null;
var selected_preference = new Preferences();

$.getJSON('options.json', function (data) {
	questionsJson = data.options;
	showQuestion();
});

function showQuestion (user_preferences) {
	if (currentQuestionIndex < questionsJson.length) {
		currentQuestion = new Question(questionsJson[currentQuestionIndex].name,
									   questionsJson[currentQuestionIndex].type);

		$('#main-container').html(currentQuestion.getQuestionView());
	} else {
		showDrink(user_preferences);
	}
}

function showDrink (user_preferences) {
	var bartender = new Bartender();
	// instance of bartender and passing 'create drink' method, passing preferences object -- will return drink to use new drink = bartender.createDrink
	var newDrink = bartender.createDrink(user_preferences);

	// Use jQuery to display final drink
	$('#main-container').append('<h2 class="question-title">' + 'You chose ' + newDrink + '</h2>');
}

// Target 'yes' class under #main-container by using second parameter
$('#main-container').on('click', '.yes', function () {
	alert(currentQuestion.getQuestion());

	// hiding or storing data in the UI
	console.log($(this));
	
	var type = $(this).data("type");

	// parameter is the 'type' selected when clicking 'yes'
	selected_preference.addPreference({type: type});

	// we have acccess to currentQuestionIndex
	var question = questionsJson[currentQuestionIndex]

	for (var i = 0; i < questionsJson.length; i++) {
		
		selected_preference.push(question.type);
		// Add currentQuestion type to preferences object
	}

	currentQuestionIndex++;

	if (currentQuestionIndex >= questionsJson.length){
		// you've reached the end
		selected_preference; // has user prefences inside
		// show drink 
	} else {

	showQuestion();	
	// }

});

$('#main-container').on('click', '.no', function () {
	currentQuestionIndex++;
	showQuestion();
});




