import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/posts', postRoutes)
const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`)))
    .catch((error) => console.log(error.message))
