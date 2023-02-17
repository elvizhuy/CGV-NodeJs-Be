const {Op} = require("sequelize");
const {movies} = require("../../models")

const addMovie = async (req, res) => {
    const {name, director, cast, genre, languages, running_time, photo, trailer, release_date, description} = req.body

    try {
        const newMovie = await movies.create({
            name, director, cast, genre, languages, running_time, photo, trailer, release_date, description
        })
        res.status(201).send(newMovie)
    } catch (e) {
        res.status(401).send(e)
    }
}
const getAllMovie = async (req, res) => {
    try {
        const allMovie = await movies.findAll({
            where:
                {
                    status: 0
                }
        })
        res.status(201).send(allMovie)
    } catch (e) {
        res.status(401).send(e)
    }
}
const getMovieDetail = async (req, res) => {
    const {id} = req.params
    try {
        const movie = await movies.findOne(
            {
                where:
                    {
                        id
                    }
            })
        if (movie) {
            res.status(201).send(movie)
        }
    } catch (e) {
        res.status(401).send(e)
        // {message: "Can not find movies"}
    }
}
const getMovieComingSoon = async (req, res) => {
    try {
        const movie = await movies.findAll({
            where:
                {
                    status: 1
                }
        })
        if (movie) {
            res.status(201).send(movie)
        }
    } catch (e) {
        res.status(401).send(e)
        // {message: "Can not find movies"}
    }
}

const uploadTrailer = async (req, res) => {
    const {file} = req
    const movieUrl = `http://localhost:3456/${file.path}`
    const {movies} = req.body
    movies.trailer = movieUrl
    await movies.save()
    res.status(201).send(req.body)
}
module.exports = {
    addMovie, uploadTrailer, getAllMovie, getMovieDetail, getMovieComingSoon
}