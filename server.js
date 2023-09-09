const express = require('express')
const {sequelize} = require("./models")
const path = require('path')
const {rootRouter} = require('./app/routers')
const app = express()
app.use(express.json())
// app.use(cors())
// const publicPathDirectory = path.join(__dirname, "public/movies")
app.use('/public/movies', express.static('public/movies'));
// app.use("/public/movies",express.static(publicPathDirectory))
app.use("/api/v1", rootRouter)
// app.use(Fingerprint())

///////////// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,*');
    // Set to true if you need the website to in

app.listen(3456, async () => {
    console.log('App is running on http://localhost:3456')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

// http://localhost:3456/public/movies/photo-1681048187882.jpg
// http://localhost:3456/public/movies/trailer-1681048187892.mp4