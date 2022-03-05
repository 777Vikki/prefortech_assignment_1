const Movie = require("../db/modals/movie").Movie;

function getMovieList(cb) {
    Movie.find().sort({released: -1}).limit(100).exec(cb);
}

module.exports = {
    getMovieList
}