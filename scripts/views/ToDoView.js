var Backbone = require('backbone');
var _ = require ('backbone/node_modules/underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	tagName: 'section',
	initialize: function() {
		_.bindAll (
			this,
			'render',
			'toggleCompletion',
			'remove'
		);

		this.model.on('change', this.render);
		this.$el.on('click', this.onChange);
		this.render();
	},

	render: function() {
		var newItem = _.template($('#todo-items').html());
		this.$el.html(newItem(this.model.toJSON()));
		if (!this.model.get('incomplete')) {
			this.$el.css('text-decoration', 'line-through');
		} else {
			this.$el.css('text-decoration', 'none');
		}
		this.$el.find('button').on('click', this.remove);
	},

	toggleCompletion: function() {
    	this.model.set({
    		incomplete: !this.model.get('incomplete')
    	})
    },

	remove: function() {
		this.$el.remove();
	}
});





































