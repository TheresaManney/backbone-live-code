// models task.js
import bakcbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    title: 'DEFAULT',
    completed: false
  },
  logStatus: function(){
    console.log("Model " + this.cid);
    console.log("Title: " + this.get("title"));
    console.log("Completed: " + this.get("completed"));
  },
  // gets called any time you call a new instance 
  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  }
});

export default Task;
