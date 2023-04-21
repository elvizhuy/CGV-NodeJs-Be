const { users, movies } = require("../../models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registration = async (req, res) => {
  const {
    name,
    email,
    phone,
    password,
    date,
    month,
    year,
    gender,
    region,
    prefer_site,
    avatar,
    type,
  } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = await users.create({
      name,
      email,
      phone,
      password: hashPassword,
      date,
      month,
      year,
      gender,
      region,
      prefer_site,
      avatar,
    });
    res.status(200).send({ user: newUser });
  } catch (e) {
    res.status(500).send({
      message: "Server is Error !",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await users.findOne({ where: { email } });
  const decodePassword = bcrypt.compareSync(password, userFound.password);
  if (decodePassword) {
    const token = jwt.sign(
      { email: userFound.email, type: userFound.type },
      "daniel-0908",
      { expiresIn: "24h" }
    );
    res
      .status(200)
      .send({ message: "Login successfully.", user: userFound, token: token });
  } else {
    res.status(500).send({ message: "Login Failed..wrong email or password." });
  }
};

const uploadUserAvatar = async (req, res) => {
  const { file } = req;
  const imageUrl = `http://localhost:3456/${file.path}`;
  const { user } = req;
  const userFound = await users.findOne({
    where: {
      email: user.email,
    },
  });
  userFound.avatar = imageUrl;
  await userFound.save();
  res.status(201).send(userFound);
};

module.exports = { registration, login, uploadUserAvatar };
