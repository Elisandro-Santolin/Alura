import express from 'express';
import { listPost } from '../controllers/postController.js';

const routes = (app) => {
    app.use(express.json());

    app.get('/posts', listPost);
}

export default routes;

