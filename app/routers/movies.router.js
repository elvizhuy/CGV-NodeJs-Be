const express = require("express")
const {addMovie,getAllMovie,getMovieComingSoon, getMovieDetail,updateMovie,deleteMovie} = require("../controllers/movies.controller")
// const {authenticate} = require("../middleware/Authentication/Auth");
const {uploadImageVideo} = require("../middleware/upload/upload.photo.trailer");


const movieRouter = express.Router()

movieRouter.post("/add",uploadImageVideo('photo','trailer'),addMovie)
movieRouter.put("/update/:id",updateMovie)
movieRouter.delete("/delete/:id",updateMovie)
movieRouter.get("/get-list",getAllMovie)
movieRouter.get("/coming-soon",getMovieComingSoon)
movieRouter.get("/detail/:id",getMovieDetail)
module.exports = {movieRouter}