var express = require('express');
var mongoose = require('mongoose');
var Library = require('../models/Library.js');
var Book = require('../models/Book.js');
var router = express.Router();

//add reference to VerifyToken
var VerifyToken = require('./VerifyToken');

/* GET ALL BOOKS */
// router.get('/', function(req, res, next) {
//   Book.find(function (err, products) {
//     var newAarray = [];
//     for(let entry of products){
//       Library.populate(entry,{path:'library'},function(err,entry){
//         if (err) return next(err);
//       });
//       newAarray.push(entry);
//     }
//     if (err) return next(err);
//     res.json(newAarray);
//   });
// });

/* GET ALL BOOKS */
router.get('/',VerifyToken, function(req, res, next) {
  Book.find().populate('library').
  exec(function(err,books){
           if (err) return next(err);
           res.json(books);
  })});


/* GET SINGLE BOOK BY ID */
router.get('/:id',VerifyToken, function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    Library.populate(post,{path:'library'},function(err,post){
      if (err) return next(err);
      res.json(post);
    });

  });
});

/* SAVE BOOK */
router.post('/',VerifyToken, function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id',VerifyToken, function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id',VerifyToken, function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
