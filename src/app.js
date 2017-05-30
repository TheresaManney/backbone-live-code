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

$(document).ready(function() {
  $('#test-area').append($('<p>Hello World!</p>'));
});
