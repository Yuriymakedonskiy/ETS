import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const database = client.db('EtalonTrans');
    const users = database.collection('users');
    const data = await users.find({}).toArray();
    res.status(200).json(data);
}
