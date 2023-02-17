const multer = require('multer')
const {mkdirp} = require("mkdirp");

const uploadImages = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`)
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/${type}`) // setup dest to save file
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "_" + file.originalname) // rename file
        }
    })

    const upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            const extensionImages = [".png", ".jpg"]
            const extension = file.originalname.slice(-4)
            const check = extensionImages.includes(extension)
            if (check) {
                cb(null, "true")
            } else {
                cb(new Error('extension for image invalid ...'))
            }
        }
    })
    return upload.single(type)
}

module.exports = {uploadImages}