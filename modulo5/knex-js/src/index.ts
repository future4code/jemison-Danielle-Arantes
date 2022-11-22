import express, { Request, Response } from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import {connection} from "../database/connection";

dotenv.config();

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3000, () => {
    console.log('Server is running in http://localhost:3000');
});

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
  
  
getActorById("001")
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    });