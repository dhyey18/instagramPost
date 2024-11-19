import { Router } from "express";
import {
  addLike,
  createPost,
  deletePost,
  getAllPosts,
  getById,
  updatePost,
} from "../controller/post.controller.js";
import upload from "../middleware/multer.middleware.js";

const router = Router();

// Endpoint to fetch all posts
router.post("/", upload.single("imageUrl"), createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/allPosts", getAllPosts);
router.get("/:id", getById);
router.post("/addLike/:id", addLike);

export default router;
