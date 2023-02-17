const express = require('express')
const {sequelize} = require("../models")
const path = require('path')
const {rootRouter} = require('./routers')
// const Fingerprint = require('express-fingerprint')
const app = express()
app.use(express.json())
const publicPathDirectory = path.join(__dirname, "./public")

app.use("/public",express.static(publicPathDirectory))
app.use("/api/v1", rootRouter)
// app.use(Fingerprint())
app.listen(3456, async () => {
    console.log('App is running on http://localhost:3456')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})