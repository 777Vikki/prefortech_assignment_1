const mongoose = require("mongoose");
const movieSchema = require("../schema/movie").movieSchema;

const Movie = mongoose.model('movies', movieSchema);

module.exports = {
    Movie
}