import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TaskView from 'task_view.js';

var TaskListView = Backbone.View.extend({
  initialize: function (params) {
    this.template = params.template;
  },
  render: function() {
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
        template: that.template
      });
      // rendered the view and appended it to 'todo-items'
      that.$('.todo-items').append(taskView.render().$el);
    });

    // this = myView.render().el
    return this;
  }
});

export default TaskListView;
