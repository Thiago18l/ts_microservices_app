import { Router, Request, Response } from 'express';
import { randomBytes } from 'crypto';
import axios from 'axios';


const routes = Router();

interface IComments extends Array<any>{
    id: string;
    content: string;
}

let commentsByPostID: { [key: string]: IComments } = {};

routes.get("/posts/:id/comments", (req: Request, res: Response) => {
    res.send(commentsByPostID[req.params.id] || []);
});

routes.post("/posts/:id/comments", async (req: Request, res: Response) => {
    const commentID = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments: IComments = commentsByPostID[req.params.id] || [];

    comments.push({ id: commentID, content })
    commentsByPostID[req.params.id] = comments;

    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentID,
            content,
            postID: req.params.id,
        }
    });

    res.status(201).send(comments);
});

routes.post('/events', (req: Request, res: Response) => {
    console.log("Event received: ", req.body.type);
    res.send({});
});

export default routes;