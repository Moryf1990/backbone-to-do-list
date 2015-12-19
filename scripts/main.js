'use strict';
var $ = require('jquery');
var ToDoCollection = require('./collections/ToDoCollection');
var ToDoModel = require('./models/ToDoModel');
var ToDoView = require('./views/ToDoView');
var _ = require('backbone/node_modules/underscore');

$(document).ready(function() {
	var $todoForm=$('#todo-form');
	var $todoList=$('#todo-list');
	var $todoItems=$('#todo-Items');

	var ToDo = new ToDoCollection();

	$todoForm.on('submit', function(e) {
		e.preventDefault();
		console.log($todoList.val());
		ToDo.add({
			listItem: $todoList.val()
		});
		$todoList.val('');
	});

	ToDo.on('add', function(newListItem) {
		newListItem.save();
		var newList = new ToDoView({model: newListItem});
		$todoItems.append(newList.$el);
	});

	ToDo.fetch();
});