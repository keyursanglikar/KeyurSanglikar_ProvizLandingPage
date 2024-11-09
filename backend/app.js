const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoutes= require('./routes/Userroutes');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend URL
}));


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(error => console.log('MongoDB connection error:',error));

app.use('/api/users', UserRoutes);


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
