var PizzaFactory = function(options){
	this.volume = 100;
	this.crust = options.crust;
	this.style = options.style;
	this.size = options.size;

	this.speak = function (phrase) {
    return phrase;

};

var HumanFactory = function(options){
	this.firstName = options.firstName;
	this.weight = options.weight;
	this.fullness = 50;

	this.say = function (phrase) {
    return phrase;
  };

};

var attrs = {
	size: 10,
	style: 'New York',
	crust: 'thin'
}

var ny = new PizzaFactory(attrs);


var attrs = {
	size: 15,
	style: 'Chicago',
	crust: 'thick'
}

var chicago = new PizzaFactory(attrs);


var attrs = {
	firstName: 'Flava Flave',
	weight: 120


};

var flave = new HumanFactory(attrs);


var attrs = {
	firstName: 'Big Black',
	weight: 310
};

var bigBlack = new HumanFactory(attrs);