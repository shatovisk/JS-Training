const db = require('../db')

class FilmGenre{
    async createFilm_Genre(req, res){
        try{
        const {filmname_id, genrename_id} = req.body
        const newFilm_Genre = await db.query(`INSERT INTO film_genre (filmname_id, genrename_id) values ($1, $2) RETURNING *`, [filmname_id, genrename_id])
        res.json(newFilm_Genre.rows[0])
        } catch(err){
            res.send(err.detail)
        } 
    }

    async getFilmsGenresById(req, res){
        const id = req.query.id
        if (id == undefined){
            const film_genre = await db.query(`SELECT * FROM film_genre`)
            res.json(film_genre.rows)
        } else{
            const genres = await db.query(`select * from film_genre where filmname_id = $1`, [id])
            res.json(genres.rows)
        }
    }

    async updateFilmsGenres(req, res){
        try{
        const {id, filmname_id, genrename_id} = req.body
        const filmGenre = await db.query(`UPDATE film_genre set filmname_id = $1, genrename_id = $2 where id = $3 RETURNING *`,
        [filmname_id, genrename_id, id])
        
        res.json(filmGenre.rows[0])
        } catch(err){
            res.send(err.detail)
        }
    }

    async deleteFilmsGenres(req, res){
        const id = req.query.id
        if (id == undefined){
            const film_genre = await db.query(`DELETE FROM film_genre`)
            res.json(film_genre.rows)
        } else{
            const genres = await db.query(`delete from film_genre where filmname_id = $1`, [id])
            res.json(genres.rows)
        }
    }

}



module.exports = new FilmGenre()