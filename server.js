import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRouters from './routes/userRouter';

//Router

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use('/api/users', userRouters);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});