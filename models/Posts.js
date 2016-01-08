var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    name: String,
    title: String,
    time: String,
    content: String
});
var Post = mongoose.model('Post', PostSchema);