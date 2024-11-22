import connectToCluster from '../config/dbConfig.js';

const connection = await connectToCluster(process.env.DRIVER_DB);

export async function getAllPosts() {
    const db = connection.db('imersao-instabytes');
    const collectionDb = db.collection('posts');
    return collectionDb.find().toArray(); 
}

export async function makePost(newPost) {
    const db = connection.db('imersao-instabytes');
    const collectionDb = db.collection('posts');
    return collectionDb.insertOne(newPost);
}