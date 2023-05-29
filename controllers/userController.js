const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
        .then(async (users) => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    
}