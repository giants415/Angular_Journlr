var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EntrySchema = new Schema({
  entryTitle: String,
  entryDate: String,
  entryBody: String
});

var Entry = mongoose.model('Entry', EntrySchema);
module.exports = Entry;
