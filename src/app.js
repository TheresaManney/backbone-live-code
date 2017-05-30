import $ from 'jquery';
// Telling webpack to go to the underscore library and save whatever it gets from underscore to the '_' variable.
import _ from 'underscore';
// we added line 5 after adding things to task.js file (which was how we created out model)
import Task from './models/task.js';

import TaskList from './collections/task_list.js';

var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon',
    completed: false
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer',
    completed: true
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???',
    completed: false

  }
];

var myTaskList = new TaskList(taskData);

//can create any attributes we want (including validations in the future)
//this is a new task instance
var myTask = new Task({
  title: "Create a Model!",
  desription: "Need to extend Backbone.Model",
  completed: false
});

var mySecondTask = new Task({
  title: "Walk dog",
  desription: "walk walk walk",
  completed: false
});

var getFormData = function() {
  // val is a jQuery function
  var formTitle = $('#title').val();
  // clearing out title...
  $('#title').val('');

  var formDescription = $('#description').val();
  $('#description').val('');

  var formCompleted = $('#completed-checkbox').is(":checked");
  $('#completed-checkbox').prop('checked', false);

  return {
    title: formTitle,
    description: formDescription,
    completed: formCompleted
  };
};

var render = function(task) {
  // Get the Template using jQuery
  // $('#test-area').append($('<p>Hello World!</p>'));
  var templateText = $('#taskItemTemplate').html();

  // Create an Underscore Template Object
  var templateObject = _.template(templateText);

  // Fill in the ERB with date from our task.
  //made the compiledHTML a jQuery selection
  var compiledHTML = $(templateObject(task.toJSON()));

  // Append the result to the DOM
  $('.todo-items').append(compiledHTML);

  // looking for the alert / delete button
  // when it is clicked (when the function get called) the specific task will be deleted
  compiledHTML.find('button.alert').click({task: task }, function(params){
    myTaskList.remove(params.data.task);
  });
};

var renderList = function(taskList) {
  // Clear the list
  $('.todo-items').empty();
  // Loop through rendering each task
  taskList.each(function(task) {
    render(task);
  });
};

$(document).ready(function() {
  // COLLECTION STUFF
  renderList(myTaskList);

  // .on is a method that collections and models have (there is also .new, .validate, .change, and so on... can check Backbone documentation to find more)
  myTaskList.on("update", function() {
    renderList(myTaskList);
  });

  $('#add-task').click(function() {
    // Creating a new Task
    // With the form data
    var task = new Task(getFormData());

    // Add it to the list
    myTaskList.add(task);
    // re-render the list
    // renderList(myTaskList);
  });

  // BELOW WAS FOR MODEL STUFF
  // render(myTask);
  // render(mySecondTask);
  //
  // $("#add-task").click(function() {
  //   var formData = getFormData();
  //   var newTask = new Task(formData);
  //   render(newTask);
  // });

  /* Begining check...
  // checking that the console got our new task instance
  console.log(myTask);
  console.log(myTask.get("title"));
  // to change an attribute in backbone, we use 'set'
  myTask.set("completed", true);
  myTask.set({
    title: "This is Backbone!",
    description: "Great"
  });

  console.log("Completed? " + myTask.get("completed"));
  */
});
