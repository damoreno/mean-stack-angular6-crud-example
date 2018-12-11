// AuthController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../models/User.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

//add reference to VerifyToken
var VerifyToken = require('./VerifyToken');

  router.post('/find', function(req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      var expiresIn = 86400;
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: expiresIn // expires in 24 hours
      });
      var response = { auth: true, token: token, expiresIn: expiresIn };
      res.status(200).send(response);
    });
  });

module.exports = router;
