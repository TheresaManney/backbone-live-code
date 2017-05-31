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

  }
});

export default TaskView;
