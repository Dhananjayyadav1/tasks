import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async () => {
    mongoose.set('strictQuery', true);
    const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.pxju4a0.mongodb.net/`;

    try {
        await mongoose.connect(MONGODB_URI, { useUnifiedTopology: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;