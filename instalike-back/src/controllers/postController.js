import { getAllPosts } from "../models/postModel.js";

export async function listPost(req, res) {
    const result = await getAllPosts();
    res.status(200).json(result);
}