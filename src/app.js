import $ from 'jquery';
// Telling webpack to go to the underscore library and save whatever it gets from underscore to the '_' variable.
import _ from 'underscore';
// we added line 5 after adding things to task.js file (which was how we created out model)
import Task from './models/task.js';

var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon'
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer'
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???'
  }
];

//can create any attributes we want (including validations in the future)
//this is a new task instance
var myTask = new Task({
  title: "Create a Model!",
  desription: "Need to extend Backbone.Model",
  completed: false
});

$(document).ready(function() {
  // Get the Template using jQuery
  // $('#test-area').append($('<p>Hello World!</p>'));
  var templateText = $('#taskItemTemplate').html();

  // Create an Underscore Template Object
  var templateObject = _.template(templateText);

  // Fill in the ERB with date from our task.
  var compiledHTML = templateObject(myTask.toJSON());

  // Append the result to the DOM
  $('.todo-items').append(compiledHTML);

  /* // checking that the console got our new task instance
  console.log(myTask);
  console.log(myTask.get("title"));
  // to change an attribute in backbone, we use 'set'
  myTask.set("completed", true);
  myTask.set({
    title: "This is Backbone!",
    description: "Great"
  });

  console.log("Completed? " + myTask.get("completed")); */
});
