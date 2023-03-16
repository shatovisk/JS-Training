const db = require('../db')

class FilmController {
    async createFilm(req, res){
        const {filmName, yearOfCreation} = req.body;
        const newFilm = await db.query(`INSERT INTO film (filmname, yearofcreation) values ($1, $2) RETURNING *`, [filmName, yearOfCreation])
        res.json(newFilm.rows[0])
    }

    async getFilms(req, res){
        const films = await db.query(`SELECT * FROM film`)
        res.json(films.rows)
    }

    async getOneFilm(req, res){
        const id = req.params.id
        const film = await db.query(`SELECT * FROM film where id = $1`, [id])
        res.json(film.rows[0])
    }

    async updateFilm(req, res){
        const {id, filmName, yearOfCreation} = req.body
        const film = await db.query(`UPDATE film set filmname = $1, yearofcreation = $2 where id = $3 RETURNING *`,
        [filmName, yearOfCreation, id])

        res.json(film.rows[0])
    }

    async deleteFilm(req, res){
        const id = req.params.id
        const film = await db.query(`DELETE FROM film where id = $1`, [id])
        res.json(film.rows[0])
    }
}



module.exports = new FilmController()