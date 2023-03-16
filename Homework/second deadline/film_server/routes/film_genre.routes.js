const Route = require('express');
const router = new Route();
const film_genreController = require('../controller/film_genre.controller')

router.post("/filmGenre", film_genreController.createFilm_Genre)
router.get("/filmGenre", film_genreController.getFilmsGenresById)
router.put("/filmGenre", film_genreController.updateFilmsGenres)
router.delete("/filmGenre", film_genreController.deleteFilmsGenres)




module.exports = router