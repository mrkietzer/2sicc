const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide a task name'], 
        maxlength: 100,
    },
    missionId: {
        type: Number,
        required: [true, 'please provide the associated mission ID number'],
    },
    description: {
        type: String,
        required: [true, 'please describe the task'],
    },
    deadline: Date,
    finished: {
        type: Boolean,
        required: [true, 'confirm that the task has been completed']
    },
});

module.exports = mongoose.model('Task', TaskSchema);