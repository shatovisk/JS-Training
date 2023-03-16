const db = require('../db')

class genreController{
    async createGenre(req, res){
        const {genreName} = req.body;
        const newGenre = await db.query(`INSERT INTO genre (genrename) values ($1) RETURNING *`, [genreName])
        res.json(newGenre.rows[0])
    }

    async getGenre(req, res){
        const genres = await db.query(`SELECT * FROM genre`)
        res.json(genres.rows)
    }

    async getOneGenre(req, res){
        const id = req.params.id
        const genre = await db.query(`SELECT * FROM genre where id = $1`, [id])
        res.json(genre.rows[0])
    }

    async updateGenre(req, res){
        const {id, genreName} = req.body
        const genre = await db.query(`UPDATE genre set genrename = $1 where id = $2 RETURNING *`,
        [genreName, id])

        res.json(genre.rows[0])
    }

    async deleteGenre(req, res){
        const id = req.params.id
        const genre = await db.query(`DELETE FROM genre where id = $1`, [id])
        res.json(genre.rows[0])
    }
}


module.exports = new genreController();