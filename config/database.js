import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
let database = null;
const mongocliente = new MongoClient(process.env.MONGO_URI);
try {
	await mongocliente.connect();
	database = mongocliente.db('tractian');
	console.log('Connected to database!');
} catch (err) {
	console.log(err);
}

export default database;