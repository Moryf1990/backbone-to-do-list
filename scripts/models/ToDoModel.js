var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		listItem: '',
		incomplete: true
	},
	urlRoot:'http://tiyfe.herokuapp.com/collections/morrisftodolist'

});