import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// cloudinary.config({
//   cloud_name: 'dgbtqmrk0',
//   api_key: '368952646732174',
//   api_secret: 'Rn0R59OfgQpT1U3VPvyHeu5czb4'
// });

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    next(
      createError(
        err.status,
        err?.response?.data?.error?.message || error?.message
      )
    );
  }
};
