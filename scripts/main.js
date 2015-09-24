'use strict';
var $todoItemArray=[];
var $ = require('jquery');
var To_Do_Collection = require('./collections/ToDoCollections');
var ToDoModel = require('./models/ToDoModel');
var _ = require('backbone/node_modules/underscore');
$(document).ready(function() {
	var $top=$('#top');
	var $todoForm=$('#todo-form');
	var $todoList=$('#todo-list');
	var $todoItems=$('#todo-Items');
	var $toAdd=$('#add');

	var toDoItems = new To_Do_Collection();

		function whenButtonIsClicked(e) {
		e.preventDefault();

		if ($todoList.val()) {
			$todoItemArray.push($todoList.val());
			$todoItems.val('');
			this.render();		
		}
		else {
			console.log('No Input');
		}
	}

$toAdd.on('click', whenButtonIsClicked)

	
});
// var $=require('jquery');

// $(document).ready(function() {

	// var $top=$('#top');
	// var $todoForm=$('#todo-form');
	// var $todoList=$('#todo-list');
	// var $todoItems=$('#todo-Items');
	// var $toAdd=$('#add');

// 	function render(){

// 	}

// 	function whenButtonIsClicked(e) {
// 		e.preventDefault();

// 		if ($todoList.val()) {
// 			$todoItemArray.push($todoList.val());
// 			$todoItems.val('');
// 			this.render();		
// 		}
// 		else {
// 			console.log('No Input');
// 		}
// 	}

// $toAdd.on('click', whenButtonIsClicked)


// });