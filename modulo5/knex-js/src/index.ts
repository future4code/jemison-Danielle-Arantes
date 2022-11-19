import express, { Request, Response } from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3000, () => {
    console.log('Server is running in http://localhost:3000');
});