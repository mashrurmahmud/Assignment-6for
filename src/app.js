import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './route/authRoute.js';
import { errorHandler, notFound } from './middelwares/errorHandleres.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/auth", authRoute );

app.use(notFound);
app.use(errorHandler);


export default app;