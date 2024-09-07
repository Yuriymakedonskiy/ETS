import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
export default async function handler(req: Request, res: Response) {
    const client = new MongoClient(process.env.MONGODB_URI as string);

    try {
        await client.connect();

        const database = client.db('EtalonTrans');
        const vacancies = database.collection('pdfcarts');

        const data = await vacancies.find({}).toArray();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    } finally {
        if (client) {
            await client.close();
        }
    }
}
