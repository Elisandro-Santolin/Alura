import { getAllPosts, makePost} from "../models/postModel.js";
import fs from "fs";

export async function listPost(req, res) {
    const result = await getAllPosts();
    res.status(200).json(result);
}

export async function createPost(req, res) {
    const newPost = req.body;
    try {
        const postCreate = await makePost(newPost);
        res.status(200).json(postCreate);
    } catch (error) {
        console.error(error.message); //propriedade message ## verificar ##
        res.status(500).json({'Erro':'Falha na requisição'});
    }
}

export async function uploadImage(req, res) {
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCreate = await makePost(newPost);
        const imgUpdated = `uploads/${postCreate.insertedId}.png`;
        fs.renameSync(req.file.path, imgUpdated);
        res.status(200).json(postCreate);
    } catch (error) {
        console.error(error.message); //propriedade message ## verificar ##
        res.status(500).json({'Erro':'Falha na requisição'});
    }
}