var currentQuestionIndex = 0;
var currentQuestion = null;
var questionsJson = null;
var selected_preference = new Preferences();

$.getJSON('options.json', function(data) {
    questionsJson = data.options;
    showQuestion();
});

function showQuestion() {
    if (currentQuestionIndex < questionsJson.length) {
        currentQuestion = new Question(questionsJson[currentQuestionIndex].name,
            questionsJson[currentQuestionIndex].type);

        $('#main-container').html(currentQuestion.getQuestionView());
    } else {
        showDrink();
    }
}

function showDrink() {
    var bartender = new Bartender();
    // instance of bartender and passing 'create drink' method, passing preferences object -- will return drink to use new drink = bartender.createDrink
    var newDrink = bartender.createDrink(selected_preference);
    console.log(newDrink, 'line 26, new drink');
    var ingreds = [];
    // Use jQuery to display final drink
    for (var i =0; i < newDrink.ingredient.length; i++) {
        ingreds.push(newDrink.ingredient[i].name);
    }
    $('#main-container').empty().append('<h2 class="question-title">' + 'You chose ' + ingreds.join(', ') + '</h2>');

}

// Target 'yes' class under #main-container by using second parameter
$('#main-container').on('click', '.yes', function() {

    var type = $(this).data("type");

    // parameter is the 'type' selected when clicking 'yes'
    selected_preference.addPreference({ type: type, choice: true });
    console.log('current question', currentQuestionIndex);
    if (currentQuestionIndex > questionsJson.length) {
        console.log('current question', currentQuestionIndex);
        console.log('last question', selected_preference);
        showDrink();
    } else {
        currentQuestionIndex++;
        showQuestion();
    }
});

$('#main-container').on('click', '.no', function() {
    console.log('current question', currentQuestionIndex);
    currentQuestionIndex++;
    showQuestion();
});
