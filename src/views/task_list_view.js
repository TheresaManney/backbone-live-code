import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TaskView from 'task_view.js';

var TaskListView = Backbone.View.extend({
  initialize: function (params) {
    this.template = params.template;
  },
  render: function() {

    // this = myView.render().el
    return this;
  }
});

export default TaskListView;
