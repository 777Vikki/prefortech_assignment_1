const MovieAccessor = require("../accessor/movieAccessor");

function getMovieList(cb) {
    MovieAccessor.getMovieList(cb);
}

module.exports = {
    getMovieList
}