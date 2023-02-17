const multer = require('multer')
const {mkdirp} = require("mkdirp");

const uploadPhotosTrailers = () => {
    const made = mkdirp.sync("./public/trailers")
    const storage = multer.diskStorage({
        destination: function (req, file, cb) { // setup dest to save file
            cb(null, `./public/trailers`);
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "_" + file.originalname) // rename file
        }
    })

    const upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            const extensionImagesMovies = [".mp4", ".mkv", ".png", ".jpg"]
            const extension = file.originalname.slice(-4)
            const check = extensionImagesMovies.includes(extension)
            if (check) {
                cb(null, "true")
            } else {
                cb(new Error('extension for movie/image invalid ...'))
            }
        }
    })
    return upload.fields([{name: "photo", maxCount: 1}, {name: "trailer", maxCount: 3}])
}

module.exports = {uploadPhotosTrailers}