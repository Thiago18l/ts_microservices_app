import { Router, Request, Response } from 'express';
import axios from 'axios';

const url_posts = 'http://localhost:4000/events';
const url_comments = 'http://localhost:4001/events';
const url_query = 'http://localhost:4002/events';

const routes = Router();

routes.post('/events', (req: Request, res: Response) => {

    try {
        const event = req.body;

        axios.post(url_posts, event);
        axios.post(url_comments, event);
        axios.post(url_query, event);

        res.status(200).send({ status: 'OK' });
    } catch (error) {
        console.log(error)
    }

});

export default routes;