import express from 'express';
import Routes from './routes/routes';
import bodyParser from 'body-parser';
const app =  express();


const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(Routes);

app.listen(PORT, () => {
    console.log(`Running service post on port ${PORT}`);
});

