// models task.js
import bakcbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    title: 'DEFAULT',
    completed: false
  },
  logStatus: function(){
    console.log("Model " + this.get("cid"));
    console.log("Title: " + this.get("title"));
    console.log("Completed: " + this.get("completed"));
  }
});

export default Task;
