const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    };
});

// Get specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

// Submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    };
});

// Delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const deletedPost = await Post.findById(req.params.postId);
        await Post.remove({_id: req.params.postId});
        res.json({deleted: deletedPost});
    } catch (err) {
        res.json({message: err});
    };
});

// Update a post
router.put('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {
                title: req.body.title,
                description: req.body.description
            }});
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    };
});


module.exports = router;