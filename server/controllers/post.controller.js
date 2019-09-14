const bcrypt = require('bcrypt');
const Post = require('../models/post.model');

exports.details_all = function(req, res){
    Post.find({}, function(err, posts){
        if(err) return next(err);
        res.send(posts); 
    })
};

exports.create = function(req, res, next){
    let post = new Post({
        title: req.body.title,
        subtitle: req.body.subtitle,
        text: req.body.text,
        createdAt: new Date()
    });
 
    post.save(function(err){
        if(err){
            return next(err);
        }
        res.status(201).send('Post created successfully');
    });
};

exports.details = function (req, res, next) {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.status(201).send(post);
    })
};

exports.update = function (req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {$set: req.body}, {useFindAndModify: false}, function (err, post) {
        if (err) return next(err);
        res.status(201).send('Post udpated.');
    });
};

exports.delete = function(req, res, next) {
    Post.findByIdAndRemove(req.params.id, function(err){
        if (err) return next(err);
        res.status(201).send('Post deleted successfully.');
    })
}