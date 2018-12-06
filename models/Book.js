var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Library = mongoose.model('Library');

var BookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
  library: { type: Schema.ObjectId, ref: "Library" }
});

module.exports = mongoose.model('Book', BookSchema);
