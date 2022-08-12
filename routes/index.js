const express = require('express');
const router = express.Router();
const movies = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index', {title : 'Home'}));

router.get('/movies', (req, res, next) => {
    movies.find({})
        .then((getAllMoviesFromDB) => {
            res.render('movies', {title : 'Movies', getAllMoviesFromDB });
        })
        .catch((error) => `Error while fetching all movies: ${error}`);
})

router.get('/movie/:id', (req, res, next) => {
    const { id } = req.params;
    movies.findById(id)
        .then((movieDetailFromDB) => {
            console.log(movieDetailFromDB)
            res.render('movie-detail', {title: 'Movie Details', movieDetailFromDB})
        })
        .catch((error) => `Error while fetching all movie details: ${error}`);
})


module.exports = router;
