var Backbone = require('backbone');
var ToDoModel = require('../models/ToDoModel');
module.exports = Backbone.Collection.extend ({
	model: ToDoModel,
	url: 'http://tiyfe.herokuapp.com/collections/morrisftodolist'
	
});