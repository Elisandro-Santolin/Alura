import 'dotenv/config'; //garante que .env seja lido
import { ObjectId } from 'mongodb';
import connectToCluster from '../config/dbConfig.js';

const connection = await connectToCluster(process.env.DRIVER_DB);

export async function getAllPosts() {
    const db = connection.db('imersao-instabytes');
    const collectionDb = db.collection('posts');
    return collectionDb.find().toArray(); 
}

export async function publishPost(newPost) {
    const db = connection.db('imersao-instabytes');
    const collectionDb = db.collection('posts');
    return collectionDb.insertOne(newPost);
}

export async function updatePost(id, postNew) {
    const db = connection.db('imersao-instabytes');
    const collectionDb = db.collection('posts');
    const objectID = ObjectId.createFromHexString(id); //guarda esse objeto mongo obriga a utilizar para atualizar os dados
    return collectionDb.updateOne({_id: new ObjectId(objectID)}, {$set:postNew});
}