const mongoose = require('mongoose');
const {Schema} = mongoose;

const usersSchema = Schema({
    name: String,
    email: String,
    password: String,
    token: String
})

module.exports = {
    usersSchema
};