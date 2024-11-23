import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { listPost, createPost, uploadImage, updateNewPost } from '../controllers/postController.js';


const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

const upload = multer({dest: './uploads'});

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get('/posts', listPost);
    app.post('/posts', createPost);
    app.post('/upload', upload.single('image'), uploadImage); //miraware // single = envia somente um arquivo 
    app.put('/upload/:id', updateNewPost);
}

export default routes;