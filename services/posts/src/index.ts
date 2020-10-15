import express from 'express';
import Routes from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';
const app =  express();


const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors());
app.use(Routes);

app.listen(PORT, () => {
    console.log(`Running service posts post on port ${PORT}`);
});

