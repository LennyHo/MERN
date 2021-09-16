import express from "express";
import mongoose from "mongoose";

import { getPosts, createdPost } from "../controller/posts.js";

const router = express.Router();

// localhost:5000/posts
// router.get("/", getPosts);

router.post("/", createdPost);

export default router;