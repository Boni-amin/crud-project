const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    email:{type:String},
    title:{type:String},
    description:{type:String},
    status:{type:String}
} , {versionKey: false, timestamps: true});

module.exports = mongoose.model('tasks', tasksSchema);
