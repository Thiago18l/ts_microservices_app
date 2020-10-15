import { Response, Request, Router } from 'express';

const routes = Router();


interface IPost {
    id: string;
    title: string;
    comments: Comments[];
}

type Post = { [key: string]: IPost };
type Comments = { id: string, content: string };
interface IData {
    id: string;
    content: string;
    postId: string;

}

let posts: Post = {}

routes.get('/posts', (req: Request, res: Response) => {
    res.send(posts);
});

routes.post('/events', (req: Request, res: Response) => {

    try {
        const { type, data } = req.body;

        if (type === 'PostCreated') {
            const { id, title }: IPost = data;

            posts[id] = { id, title, comments: [] };
        }
        if (type === 'CommentCreated') {
            const { id, content, postId }: IData = data;
            posts[postId].comments.push({id, content});
        }
        console.log(posts)
        res.status(201).send({});
    } catch (error) {
        console.log(error)
    }
    
});

export default routes;