var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibrarySchema = new Schema({
  isbn: String,
  name: String,
  description: String
});

module.exports = mongoose.model('Library', LibrarySchema);
