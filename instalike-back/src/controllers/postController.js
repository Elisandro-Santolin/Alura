import fs from "fs";
import { getAllPosts, publishPost, updatePost } from "../models/postModel.js";
import createDescriptionGemini from "../services/serviceGemini.js";

export async function listPost(req, res) {
    const result = await getAllPosts();
    res.status(200).json(result);
}

export async function createPost(req, res) {
    const newPost = req.body;
    try {
        const postCreate = await publishPost(newPost);
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
        const postCreate = await publishPost(newPost);
        const imgUpdated = `uploads/${postCreate.insertedId}.png`;
        fs.renameSync(req.file.path, imgUpdated);
        res.status(200).json(postCreate);
    } catch (error) {
        console.error(error.message); //propriedade message ## verificar ##
        res.status(500).json({'Erro':'Falha na requisição'});
    }
}

export async function updateNewPost(req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.png`;
   
    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descriptionPost = await createDescriptionGemini(imageBuffer);
       
        const postNew = {
            description: descriptionPost,
            imgUrl: urlImage,
            alt: req.body.alt,
        };

        const updatedPost = await updatePost(id, postNew);
        res.status(200).json(updatedPost);
    }catch (error) {
            console.error(error.message); //propriedade message ## verificar ##
            res.status(500).json({'Erro':'Falha na requisição'});

    }
}
