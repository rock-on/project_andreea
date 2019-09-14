const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, trim: true, required: true },
    subtitle: { type: String, trim: true, required: true },
    text: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;