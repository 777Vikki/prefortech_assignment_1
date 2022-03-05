const MovieService = require('../services/movie');


function addNewMovie(req, res) {
    const title = req.query.title;
    const rating = req.query.title;
    MovieService.addNewMovie(title, rating, function(err) {
        if(err) {
            res.status(500).send(err.message);
        }else {
            res.status(200).send('Add New Movie')
        }
    });
}

function getMovieList(req, res) {
    MovieService.getMovieList(function(err, movieList) {
        if(err) {
            res.send(err);
        } else {
            res.status(200).send(movieList);
        }
    })
}

module.exports = {
    addNewMovie,
    getMovieList
}