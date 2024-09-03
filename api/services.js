const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const servicesSchema = new mongoose.Schema({
    _idSer: mongoose.Schema.Types.ObjectId,
    title: String,
});

const Services = mongoose.model('services', servicesSchema);

export default async function handler(req, res) {
    try {
        const services = await Services.find();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
