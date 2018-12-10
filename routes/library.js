var express = require('express');
var debug = require('debug');
var router = express.Router();
var mongoose = require('mongoose');
var Library = require('../models/Library.js');

/* GET ALL Libraries */
router.get('/', function(req, res, next) {
  Library.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Library BY ID */
router.get('/:id', function(req, res, next) {
  debug(res);
  Library.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Library */
router.post('/', function(req, res, next) {
  Library.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Library */
router.put('/:id', function(req, res, next) {
  Library.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Library */
router.delete('/:id', function(req, res, next) {
  Library.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
