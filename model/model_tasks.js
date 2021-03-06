var mongoose = require('mongoose');

var tasksSchema = mongoose.Schema({
    id : Number,
    count: Number,
    title: String,
    content : String,
    token:String
});

module.exports = require('./model').createModel('tasks', tasksSchema);
module.exports.open = function(){require('./model').open()};
module.exports.close = function(){require('./model').close()};
module.exports.backup = function(){require('./model').backup()};
module.exports.debugMode = function (bool) {require('./model').debugMode = bool;};

