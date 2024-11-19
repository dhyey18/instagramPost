import Post from "../models/post.model.js";
import fs from "fs";

async function createPost(req, res) {
  try {
    const { title, description } = req.body;
    const imageUrl = req.file ? req.file.path : "";

    const imagePath = imageUrl;
    const imageData = fs.readFileSync(imagePath, { encoding: "base64" });

    console.log(title, description);

    if (!title || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Post({ title, imageUrl: imageData, description });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
}

async function deletePost(req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
}

async function updatePost(req, res) {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
}

async function addLike(req, res) {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {
      $inc: { likes: 1 },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding like", error: error.message });
  }
}

async function getById(req, res) {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving post", error: error.message });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving posts", error: error.message });
  }
}

export { createPost, deletePost, updatePost, getAllPosts, addLike, getById };
