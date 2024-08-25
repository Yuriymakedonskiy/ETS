const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 5000;
const secretKey = 'miminoKika1977';

app.use(cors());
app.use(express.json());

const mongoURL = process.env.MONGODB_URI;
// console.log(mongoURL)

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));


const vacancieSchema = new mongoose.Schema({
    title: String,
    workExperience: String,
    salary: String,
    requirements: String,
    responsibilities: String,
    conditions: String,
});

const Vacancies = mongoose.model('vacancies', vacancieSchema);

app.get('/api/vacancies', async (req, res) => {
    try {
        const vacancies = await Vacancies.find();
        res.json(vacancies);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

const servicesSchema = new mongoose.Schema({
    _idSer: mongoose.Schema.Types.ObjectId,
    title: String,
});

const Services = mongoose.model('services', servicesSchema);

app.get('/api/services', async (req, res) => {
    try {
        const services = await Services.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

const massmediaSchema = new mongoose.Schema({
    title: String,
    text: String,
    date: Date,
    media: String,
    link: String,
    file: String,
});

const MassMedia = mongoose.model('massmedia', massmediaSchema);

app.get('/api/massmedia', async (req, res) => {
    try {
        const massMedia = await MassMedia.find();
        res.json(massMedia);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

const pdfcartSchema = new mongoose.Schema({
    file: String,
    title: String,
    
});

const Pdfcart = mongoose.model('pdfcart', pdfcartSchema);

app.get('/api/pdfcart', async (req, res) => {
    try {
        const pdfcart = await Pdfcart.find();
        res.json(pdfcart);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

const db = mongoose.connection

app.get('/api/collections', async (req, res) => {
    try {
        const collections = await db.db.listCollections().toArray();
        res.json(collections.map(col => col.name));
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('users', userSchema);

// Эндпоинт для авторизации
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
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
});

module.export = app;

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// })