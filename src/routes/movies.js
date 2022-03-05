const express = require('express');
const router = express.Router();
const movieHandler = require("../handlers/movie");
const { checkIfAuthenticated } = require('../middleware/authentication');

router.get('/', checkIfAuthenticated, movieHandler.getMovieList);

module.exports = router;