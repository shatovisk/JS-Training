const Route = require('express');
const router = new Route();
const genreController = require('../controller/genre.controller')

router.post("/genre", genreController.createGenre)
router.get("/genre", genreController.getGenre)
router.get("/genre/:id", genreController.getOneGenre)
router.put("/genre", genreController.updateGenre)
router.delete("/genre/:id", genreController.deleteGenre)




module.exports = router