var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    author: String,
    name: String,
    title: String,
    time: String,
    summary: String,
    content: String
});
var Post = mongoose.model('Post', PostSchema);


