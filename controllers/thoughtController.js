const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then(async (thoughts) => {
            res.status(200).json(thoughts);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought with that ID exists'})
                : res.json(thought)
        )
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
    },
    // Create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: thought.user },
                    { $push: { thoughts: thought._id } },
                    { new: true },
                );
            })
            .catch((err) => res.status(500).json(err));
    },
    // Delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID exists' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID exists' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};