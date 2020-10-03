import express from 'express';
import bodyParser from 'body-parser';
import Routes from './routes/routes';

const app = express();

const PORT = process.env.PORT || 8070;

app.use(bodyParser.json());
app.use(Routes);

app.listen(PORT, () => {
    console.log(`Server comments is running on port ${PORT}`);
});