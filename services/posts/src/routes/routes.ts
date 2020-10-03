import { Router, Request, Response } from 'express';
import { randomBytes } from 'crypto';

interface IPosts {
    id: string;
    title: string;
}

const router = Router();

let posts: { [key: string]: IPosts } = {};

router.get("/posts", (req: Request, res: Response) => {
    res.status(200).send(posts);
});

router.post("/posts", (req: Request, res: Response) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});


export default router;
