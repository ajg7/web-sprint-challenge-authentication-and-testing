const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("./secrets");
const router = require('express').Router();

const Users = require("../users/model-users");
const { isValid } = require("../jokes/jokes-service");
const { response } = require("express");

router.post('/register', (request, response) => {
  // implement registration
  const credentials = request.body;
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcryptjs.hashSync(credentials.password, rounds);
  credentials.password = hash;

  Users.add(credentials)
    .then(user => {
      response.status(201).json({ data: user })
    })
    .catch(error => {
      response.status(500).json({ message: error.message })
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
