const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        reactionBody: {
            type: String,
            required: true,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    },
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;