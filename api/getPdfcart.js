import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const database = client.db('EtalonTrans');
    const pdfcarts = database.collection('pdfcarts');
    const data = await pdfcarts.find({}).toArray();
    res.status(200).json(data);
}
