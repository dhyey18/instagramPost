import express from "express";
import router from "./router/post.router.js";
import cors from "cors";

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());
app.use(cors());

// routes
app.use("/api/post", router);

export default app;
