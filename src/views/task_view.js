// task_view.js

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Task from '../models/task.js';

var TaskView = Backbone.View.extend({
  // Some time jQuery is used but we decided to use params instead
  initialize: function(params) {
    // Get it the template you want to use for this view
    this.template = params.template;

    this.$el.addClass("task-item column column-block");
    // this.$el.addClass("column");
    // this.$el.addClass("column block");

    this.listenTo(this.model, "change", this.render);
    console.log(">>> Breadcrumbs #");
  },
  render: function() {
    console.log("*************Breadcrum task_view render ***********");

    //el - element [by defult is a div tag]
    // *More notes on el and other things regarding view in your backboneView.md file*
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
    // this = this view instance
  },
  // events only affects DOM events, keydown, click, etc...
  events: {
    // event - click event
    // button.alert - what the event is on
    'click button.alert': 'deleteTask',
    'click button.success': 'toggleComplete'
  },
  deleteTask: function() {
    console.log("*************Breadcrum deleteTask ***********");

    this.model.destroy();
  },
  toggleComplete: function() {
    console.log("*************Breadcrum toggleComplete ***********");

    // TEACHER WAY
    this.model.toggleComplete();
    // MY WAY
    // var completed = this.model.get("completed");
    // this.model.set("completed", !completed);
    // this.render();
  }
});

export default TaskView;
