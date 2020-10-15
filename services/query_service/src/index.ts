import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/routes';

const app = express();

const PORT = process.env.PORT || 4002;

app.use(bodyParser.json());
app.use(cors());
app.use(routes);


app.listen(PORT, () => {
    console.log(`Service Query is running on port ${PORT}`);
});