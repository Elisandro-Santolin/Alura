import express from 'express';
import multer from 'multer';
import { listPost, createPost, uploadImage } from '../controllers/postController.js';

const upload = multer({dest: './uploads'});

const routes = (app) => {
    app.use(express.json());

    app.get('/posts', listPost);
    app.post('/posts', createPost);
    app.post('/upload', upload.single('image'), uploadImage); //miraware // single = envia somente um arquivo 
}

export default routes;
