const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a Mission Name'],
        maxlength: 100,
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    budget: {
        type: Number,
        required: [true, 'Please make it rain by providing a value in dollars!'],
    },
    launchdate: Date,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user'],
    },
},
{
    timestamps: true,
},
);

module.exports = mongoose.model('Mission', MissionSchema);
