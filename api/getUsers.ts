import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = process.env.DATA_API_KEY as string;

export default async function handler(req: Request, res: Response) {
    const client = new MongoClient(process.env.MONGODB_URI as string);
    
    try {
        await client.connect();
        const database = client.db('EtalonTrans');
        const users = database.collection('users');

        // Extract username and password from request body
        const { username, password } = req.body;

        // Find user by username
        const user = await users.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Пользователь не найден' });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Неверные данные' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    } finally {
        if (client) {
            await client.close();
        }
    }
}
