import { Router, Request, Response } from 'express';
import { randomBytes } from 'crypto';
import axios from 'axios';

interface IPosts {
    id: string;
    title: string;
}

const router = Router();

let posts: { [key: string]: IPosts } = {};

router.get("/posts", (req: Request, res: Response) => {
    res.status(200).send(posts);
});

router.post("/posts", async (req: Request, res: Response) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id, title
    };
    await axios.post('http://localhost:4002/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    });
    res.status(201).send(posts[id]);
});

router.post('/events', (req: Request, res: Response) => {
    console.log('Received event: ', req.body.type);
    res.send({});
});


export default router;
