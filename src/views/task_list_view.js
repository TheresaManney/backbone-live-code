import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TaskView from './task_view.js';
import Task from '../models/task.js';

var TaskListView = Backbone.View.extend({
  initialize: function (params) {
    console.log(">>> Breadcrums #1");
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);

    // console.log(this.el);
  },
  render: function() {
    console.log(">>> Breadcrums #2");

    // Clear the todo items
    this.$('.todo-items').empty();
    // could be called 'self'...means the same as 'that'
    //Saved the reference to 'this'
    var that = this;
    // Looped through the collection
    this.model.each(function(task) {
      // Created a new view for each task
      var taskView = new TaskView({
        model: task,
        template: that.template,
        tagName: 'li'
      });
      // rendered the view and appended it to 'todo-items'
      that.$('.todo-items').append(taskView.render().$el);

    });
    // this = myView.render().el
    return this;
  },
  events: {
    "click #add-task" : "addTask"
  },
  // helper method
  getFormData: function() {
    console.log(">>> Breadcrums #4");


    var formTitle = this.$('#title').val();
    // clearing out title...
    this.$('#title').val('');
    console.log(formTitle);
    var formDescription = this.$('#description').val();
    this.$('#description').val('');

    var formCompleted = this.$('#completed-checkbox').is(":checked");
    this.$('#completed-checkbox').prop('checked', false);

    if (formTitle === "") {
      return {
        description: formDescription,
        completed: formCompleted
      };
    } else {
      return {
        title: formTitle,
        description: formDescription,
        completed: formCompleted
      };
    }
  },
  addTask: function() {
    console.log(">>> Breadcrums addTask...");


    var task = new Task(this.getFormData());

    // var new Task = task.create({
    //
    // });
    this.model.create(task);
    // this.save();
  }
});

export default TaskListView;
