// importing the post 
const Post = require('../Models/posts');

const postController = {

  // CREATE POST
  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;

      const newPost = new Post({
        title,
        content,
      });

      await newPost.save();

      res.status(201).json({ message: 'Post created successfully', data: newPost });

    } catch (err) {
      console.log('Error creating post:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // GET ALL POSTS
  getPosts: async (req, res) => {
    try {

      const posts = await Post.find().select('-__v');

      res.status(200).json({
        message: "Posts fetched successfully",
        data: posts
      });

    } catch (err) {
      console.log("Error fetching posts:", err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // GET SINGLE POST
  getPost: async (req, res) => {
    try {

      const { id } = req.params;

      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json({
        message: "Post fetched successfully",
        data: post
      });

    } catch (err) {
      console.log("Error fetching post:", err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // UPDATE POST
  updatePost: async (req, res) => {
    try {

      const { id } = req.params;
      const { title, content } = req.body;

      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, content, updatedAt: Date.now() },
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json({
        message: "Post updated successfully",
        data: updatedPost
      });

    } catch (err) {
      console.log("Error updating post:", err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // DELETE POST
  deletePost: async (req, res) => {
    try {

      const { id } = req.params;

      const deletedPost = await Post.findByIdAndDelete(id);

      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json({
        message: "Post deleted successfully"
      });

    } catch (err) {
      console.log("Error deleting post:", err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

};

module.exports = postController;