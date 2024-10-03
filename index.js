import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/TaskRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use('/api/tasks', taskRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API!');
});

// Connect to MongoDB
connect(process.env.MONGO_URL).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});