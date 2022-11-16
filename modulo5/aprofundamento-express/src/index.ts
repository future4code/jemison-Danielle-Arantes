import { listaTarefas } from './data';
import { Tarefa } from './type';
import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3000, () => {
    console.log('Server is running in http://localhost:3000');
});

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong')
})

app.get('/feitos', (req: Request, res: Response) => {
    let tarefasFeitas: Tarefa[];
    switch (req.query.completed) {

        case 'true':
            tarefasFeitas = listaTarefas.filter((tarefasFeitas) => tarefasFeitas.completed === true)
            res.status(200).send(tarefasFeitas)
            break;

        case 'false':
            tarefasFeitas = listaTarefas.filter((tarefasFeitas) => tarefasFeitas.completed === false)
            res.status(200).send(tarefasFeitas)
            break;
        default:
            res.status(200).send(listaTarefas)
    }
})