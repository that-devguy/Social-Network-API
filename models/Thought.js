const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
