// [ Question ]
// [Pantry]
// [ingredients] [error: cyclic dependency]
// [Drink] (b'se ingredients)
// [main file runs above]



// Question Object
var Question = function(question, type) {
    this.question = question;
    this.type = type;
};
var questions = [{}, {}];
// var questions = [ new Question(), new Question()]
// function getQuestion(obj){
// 	return obj.question;
// }

Question.prototype.getQuestion = function() {
    return this.question;
};

Question.prototype.getType = function() {
    return this.type;
};

Question.prototype.getQuestionView = function() {
    return [
        '<h2 class="question-title">',
        this.question,
        '</h2>',
        '<div class="question-options">',
        '<button class="yes" data-type="' + this.type + '">YES</button>',
        '<button class="no">NO</button>',
        '</div>',
    ].join('');
};

// Ingredient Object
var Ingredient = function(name, type) {
    this.name = name;
    this.type = type;
}

Ingredient.prototype.getName = function() {
    return this.name;
};

Ingredient.prototype.getType = function() {
    return this.type;
};

// Drink Object
var Drink = function() {
    this.ingredient = [];
}

Drink.prototype.addIngredient = function(ingredient) {
    this.ingredient.push(ingredient);
};

Drink.prototype.getDrinkType = function() {
    var drinkType = 'yer drink is ';
    for (var i = 0; i < this.ingredient.length; i++) {
        drinkType += this.ingredient[i].type + ' ';
    }
};

Drink.prototype.getDrinkIngredients = function() {
    var drinkIngredients = 'yer drink has ';
    for (var i = 0; i < this.ingredient.length; i++) {
        drinkIngredients += this.ingredient[i].name + ' ';
    }
};

// Pantry Object
var Pantry = function() {
    this.ingredients = {
        'salty': ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
        'strong': ['Glug of rum', 'slug of whisky', 'splash of gin'],
        'sweet': ['Sugar cube', 'spoonful of honey', 'splash of cola'],
        'bitter': ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
        'fruity': ['Slice of orange', 'dash of cassis', 'cherry on top'],
    };

};

Pantry.prototype.getIngredient = function(type) {
    var numb = Math.floor(Math.random() * 3)
    console.log(type, "some type", this.ingredients[type.type]);
    return this.ingredients[type.type][numb];
    //if (this.ingredients[type] !== undefined) {
      //  var ingredient = this.ingredients[type][numb];  this.ingredients[type].length-1)] 
        //if (ingredient != undefined) {
          //  return ingredient;
        //}
    //}
}

Pantry.prototype.getItemForType = function() {
    return this.type;
};

var Preferences = function() {
    // Empty array to initiate preferences
    this.preferences = [];
}

Preferences.prototype.addPreference = function(preference) {
    // Receives preference from customer and adds it to empty array for later use by Bartender.
    this.preferences.push(preference);
}

var Bartender = function() {
    // Drink - createDrink (Preferences preferencesObject) - Receives Preferences object & Returns Drink object
}

Bartender.prototype.createDrink = function(user_preferences) {
    console.log(user_preferences, "user_preferences; line 111")
    if (user_preferences != undefined && user_preferences.preferences.length > 0) {

        var pantry = new Pantry();
        var drink = new Drink();

        for (var i = 0; i < user_preferences.preferences.length; i++) {
            var ingredient = new Ingredient(pantry.getIngredient(user_preferences.preferences[i]), user_preferences.preferences[i]);
            drink.addIngredient(ingredient);
        }

        return drink;
    }
}
