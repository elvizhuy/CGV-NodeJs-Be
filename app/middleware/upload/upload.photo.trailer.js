const multer = require("multer");
const { mkdirp } = require("mkdirp");
const path = require("path");
const { isBuffer } = require("util");

const uploadImageVideo = (photo, video) => {
//   const made = mkdirp.sync(`./public/movies/`);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/movies/`);
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      ); // rename file
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extensionMedia = [".png", ".jpg", ".mp4", ".mkv"];
      const extension = file.originalname.slice(-4);
      const check = extensionMedia.includes(extension);
      if (check) {
        cb(null, "true");
      } else {
        cb(new Error("extension for image/video invalid ..."));
      }
    },
  });
  return upload.fields([
    { name: photo, maxCount: 1 },
    { name: video, maxCount: 1 },
  ]);
};

module.exports = { uploadImageVideo };
