import { MongoClient } from 'mongodb';

export default async function connectToCluster(DRIVER_DB) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(DRIVER_DB);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!\n');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }