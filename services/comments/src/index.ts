import express from 'express';
import bodyParser from 'body-parser';
import Routes from './routes/routes';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(cors());
app.use(Routes);

app.listen(PORT, () => {
    console.log(`Server comments is running on port ${PORT}`);
});