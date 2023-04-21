const { Op } = require("sequelize");
const { movies } = require("../../models");
const addMovie = async (req, res) => {
  const {
    name,
    director,
    cast,
    genre,
    languages,
    running_time,
    release_date,
    description,
  } = req.body;
  
  const {photo,trailer} = req.files
  const photoUrl = 'http://localhost:3456/public/movies/' + photo[0].filename
  const videoUrl = 'http://localhost:3456/public/movies/' + trailer[0].filename
  
  try {
    const newMovie = await movies.create({
      name,
      director,
      cast,
      genre,
      languages,
      running_time,
      photo : photoUrl,
      trailer : videoUrl,
      release_date,
      description,
    });
    res.status(201).send(newMovie);
  } catch (e) {
    res.status(401).send(e);
  }
};
const getAllMovie = async (req, res) => {
  try {
    const allMovie = await movies.findAll({
      where: {
        status: 0,
      },
    });
    res.status(201).send(allMovie);
  } catch (e) {
    res.status(401).send(e);
  }
};
const getMovieDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await movies.findOne({
      where: {
        id,
      },
    });
    if (movie) {
      res.status(201).send(movie);
    }
  } catch (e) {
    res.status(401).send(e);
    // {message: "Can not find movies"}
  }
};
const getMovieComingSoon = async (req, res) => {
  try {
    const movie = await movies.findAll({
      where: {
        status: 1,
      },
    });
    if (movie) {
      res.status(201).send(movie);
    }
  } catch (e) {
    res.status(401).send(e);
    // {message: "Can not find movies"}
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    director,
    genre,
    cast,
    description,
    status,
    running_time,
    release_date,
    languages,
    photo,
    trailer,
  } = req.body;
  try {
    const movie = await movies.findOne({
      where: {
        id: id,
      },
    });
    if (movie) {
      (movie.name = name),
        (movie.director = director),
        (movie.genre = genre),
        (movie.cast = cast),
        (movie.description = description),
        (movie.status = status),
        (movie.running_time = running_time),
        (movie.release_date = release_date),
        res.status(201).send(movie);
    }
  } catch (e) {
    res.status(401).send(e);
    // {message: "Can not find movies"}
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await movies.findOne({
      where: {
        status: id,
      },
    });
    if (movie) {
      movie.destroyed({
        where: {
          status: id,
        },
      });
      res.status(201).send(movie);
    }
  } catch (e) {
    res.status(401).send(e);
    // {message: "Can not find movies"}
  }
};


// const uploadTrailer = async (req, res) => {
//   const { file } = req;
//   const movieUrl = `http://localhost:3456/${file.path}`;
//   const { movies } = req.body;
//   movies.trailer = movieUrl;
//   await movies.save();
//   res.status(201).send(req.body);
// };
module.exports = {
  addMovie,
  getAllMovie,
  getMovieDetail,
  getMovieComingSoon,
  updateMovie,
  deleteMovie,
};
