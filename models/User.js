const { Schema, model } = require('mongoose');
const thoughtSchema = required('./Thought');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [thoughtSchema],
        friends: [userSchema],
    }
);

const User = model('user', userSchema);

module.exports = User;