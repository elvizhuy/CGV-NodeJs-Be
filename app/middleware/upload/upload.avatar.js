const multer = require("multer");
const { mkdirp } = require("mkdirp");
const path = require("path");

const uploadAvatar = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/avatar/`);
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
      const extensionMedia = [".png", ".jpg"];
      const extension = file.originalname.slice(-4);
      const check = extensionMedia.includes(extension);
      if (check) {
        cb(null, "true");
      } else {
        cb(new Error("extension for image invalid ..."));
      }
    },
  });
 
  return upload.single('avatar')
};

module.exports = { uploadAvatar };
