// collections/task_list.js

// Import backbone
import Backbone from 'backbone';

// Import backbone model we are going to use
import Task from '../models/task.js';

// Import collection we are going to use
// in this case it will be a collection of tasks
// Create a Collection Type
var TaskList = Backbone.Collection.extend({
  model: Task,
  //assumes we will be retrieving the Restful routes from this url
  url: 'http://ada-tasklist-api.herokuapp.com/tasks'
});

export default TaskList;
