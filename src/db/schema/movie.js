const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = Schema({
    title: String,
    rating: String,
    dateAdded: String,
    year: Number,
    released: Date
})

module.exports = {
    movieSchema
};