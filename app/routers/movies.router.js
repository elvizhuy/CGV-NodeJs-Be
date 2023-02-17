const express = require("express")
const {addMovie,uploadTrailer, getAllMovie,getMovieComingSoon, getMovieDetail} = require("../controllers/movies.controller")
// const {authenticate} = require("../middleware/Authentication/Auth");
const {uploadPhotosTrailers} = require("../middleware/upload/upload-trailers");

const movieRouter = express.Router()

movieRouter.post("/add",addMovie,uploadPhotosTrailers(),uploadTrailer)
movieRouter.get("/",getAllMovie)
movieRouter.get("/coming-soon",getMovieComingSoon)
movieRouter.get("/detail/:id",getMovieDetail)
module.exports = {movieRouter}