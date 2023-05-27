const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;