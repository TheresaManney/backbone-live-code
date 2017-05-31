// task_view.js

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Task from '../models/task.js';

var TaskView = Backbone.View.extend({
  initialize: function(params) {
    // Get it the template you want to use for this view
    this.template = params.template;
  },
  render: function() {
    //el - element [by defult is a div tag]
    // *More notes on el and other things regarding view in your backboneView.md file*
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
    // this = this view instance
  }
});

export default TaskView;
