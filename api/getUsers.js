import { MongoClient } from 'mongodb';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.DATA_API_KEY;

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const database = client.db('EtalonTrans');
    const users = database.collection('users');
    const data = await users.find({}).toArray();
    res.status(200).json(data);

    const { username, password } = req.body;

    try {
        const user = await users.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: 'Пользователь не найден' });
        }
        if (user) {
            return res.json({ message: 'Пользователь найден' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Неверные данные' });
        }

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
