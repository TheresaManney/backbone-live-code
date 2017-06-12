// models task.js
import Backbone from 'backbone';

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
  },
  toggleComplete: function() {
    // Teacher version
    var completed = this.get("completed");
    this.set("completed", !completed);

    // persist the change so it toggles complete in the api, yay rails!
    // save is a backbone function that is used on model objects
    this.save();
    // My version
    /*
    var completed = this.get('completed');
    if (completed === true) {
      this.set('completed', false);
    } else {
      this.set('completed', true);
    }
    */
  }
});

export default Task;
