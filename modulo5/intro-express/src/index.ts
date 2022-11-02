import { users } from './data';
import { posts } from './posts';
import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});

app.get("/", (req:Request, res:Response) => {          
    res.send("Hello from Express")
})

app.get("/users", (req:Request, res:Response) => {
    res.status(200).send(users)
})

app.get("/posts", (req:Request, res:Response) => {
    res.status(200).send(posts)
})

app.get("/posts/:userid", (req:Request, res:Response) => {
    let user = Number(req.params.userId)

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    res.status(200).send(post) 
})