import express from 'express';
import routes from "./src/routes/postRoutes.js";

const app = express();
app.use(express.static('uploads')); //servir arquivos estáticos

routes(app);

app.listen(3000, () => {
    console.log('Server listening.');
});