const router = require('express').Router();
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  createFilmValidation,
  filmIdValidation,
} = require('../middlewares/validations');

router.get('/movies', getMovies);

router.post('/movies', createFilmValidation, addMovie);

router.delete('/movies/:movieId', filmIdValidation, deleteMovie);

module.exports = router;
