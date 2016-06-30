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

Question.prototype.getQuestionView = function () {
	return [
	'<h2 class="question-title">',
	this.question,
	'</h2>',
	'<div class="question-options">',
	'<button class="yes">YES</button>',
	'<button class="no">NO</button>',
	'</div>',
	].join('');
};

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
var Pantry = function () {
	this.ingredients = {
		"salty" : ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
		"strong" : ["Glug of rum", "slug of whisky", "splash of gin"],
		"sweet" :  ["Sugar cube", "spoonful of honey", "splash of cola"]
	};

};

Pantry.prototype.getItemForType = function () {
	return this.type;
};

function Preferences () {
	this.preferences = [];
}

function Bartender () {
	// Drink - createDrink (Preferences preferencesObject) - Receives Preferences object & Returns Drink object
}

