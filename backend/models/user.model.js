const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Identify yourself or be prepared 2QUIT!'],
        minlength: 3,
        maxlength: 10,
    },

    email: {
        type: String,
        required: [true, 'Identify your email address or be prepared 2QUIT!'],
        match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Validate your email address or 2QUIT',
        ],
        unique: true,
    },
    
    password: {
        type: String, 
        required: [true, 'Please provide a safe word'],
        minlength: 6,
    },

    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    
    // * VERIFICATION
},
    { 
    timestamps: true
    }
);


// * SALT HASH
userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// * CREATE TOKEN
userSchema.methods.createToken = function () {
    return jwt.sign(
        {
            userId: this._id, name: this.name, role: this.role 
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
    );
};

// * COMPARE PASSWORD
userSchema.methods.comparePassword = async function (incomingPassword) {
    const isMatch = await bcrypt.compare(incomingPassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', userSchema);
