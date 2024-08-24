import mongoose from 'mongoose';

// Подключение к MongoDB Atlas
const mongoURL = process.env.MONGODB_URI;

if (!mongoose.connections[0].readyState) {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

const vacancieSchema = new mongoose.Schema({
    title: String,
    workExperience: String,
    salary: String,
    requirements: String,
    responsibilities: String,
    conditions: String,
});


const Vacancies = mongoose.models.Vacancies || mongoose.model('vacancies', vacancieSchema);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const vacancies = await Vacancies.find();
            res.status(200).json(vacancies);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}