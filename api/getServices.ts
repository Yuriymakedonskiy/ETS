import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
// Middleware/handler function for Express
export default async function handler(req: Request, res: Response) {
    const client = new MongoClient(process.env.MONGODB_URI as string);

    try {
        await client.connect();

        const database = client.db('EtalonTrans');
        const vacancies = database.collection('services');

        const data = await vacancies.find({}).toArray();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    } finally {
        // Ensure the client connection is closed after the response is sent
        if (client) {
            await client.close();
        }
    }
}
