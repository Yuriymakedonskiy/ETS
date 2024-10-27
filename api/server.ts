import express, { Request, Response } from 'express';
import mongoose, { Document, Schema } from 'mongoose';
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
<<<<<<< HEAD
const port = 5000;
=======
const port = 9000;
>>>>>>> 0508475 (Обновление проекта: новые файлы и настройки Webpack)
const secretKey = process.env.DATA_API_KEY!;

mongoose.set('strictQuery', true);
app.use(cors());
app.use(express.json());

const mongoURL = process.env.MONGODB_URI!;

mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

interface Vacancies extends Document {
    title: string;
    workExperience: string;
    salary: string;
    requirements: string;
    responsibilities: string;
    conditions: string;
}

const vacancieSchema = new Schema<Vacancies>({
    title: String,
    workExperience: String,
    salary: String,
    requirements: String,
    responsibilities: String,
    conditions: String,
});

const VacanciesModel = mongoose.model<Vacancies>('vacancies', vacancieSchema);

app.get('/api/vacancies', async (req: Request, res: Response) => {
    try {
        const vacancies = await VacanciesModel.find();
        res.json(vacancies);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

interface Services extends Document {
    _idSer: mongoose.Types.ObjectId;
    title: string;
}

const servicesSchema = new Schema<Services>({
    _idSer: Schema.Types.ObjectId,
    title: String,
});

const ServicesModel = mongoose.model<Services>('services', servicesSchema);

app.get('/api/services', async (req: Request, res: Response) => {
    try {
        const services = await ServicesModel.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

interface MassMedia extends Document {
    title: string;
    text: string;
    date: Date;
    media: string;
    link: string;
    file: string;
}

const massmediaSchema = new Schema<MassMedia>({
    title: String,
    text: String,
    date: Date,
    media: String,
    link: String,
    file: String,
});

const MassMediaModel = mongoose.model<MassMedia>('massmedia', massmediaSchema);

app.get('/api/massmedia', async (req: Request, res: Response) => {
    try {
        const massMedia = await MassMediaModel.find();
        res.json(massMedia);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

interface Pdfcart extends Document {
    file: string;
    title: string;
}

const pdfcartSchema = new Schema<Pdfcart>({
    file: String,
    title: String,
});

const PdfcartModel = mongoose.model<Pdfcart>('pdfcart', pdfcartSchema);

app.get('/api/pdfcart', async (req: Request, res: Response) => {
    try {
        const pdfcart = await PdfcartModel.find();
        res.json(pdfcart);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

const db = mongoose.connection;

app.get('/api/collections', async (req: Request, res: Response) => {
    try {
        if (!db.db) {
            return res.status(500).json({ message: 'Database is not initialized' });
        }

        const collections = await db.db.listCollections().toArray();
        res.json(collections.map(col => col.name));
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

interface User extends Document {
    username: string;
    password: string;
}

const userSchema = new Schema<User>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const UserModel = mongoose.model<User>('users', userSchema);

app.post('/api/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Пользователь не найден' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Неверные данные' });
        }

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;
