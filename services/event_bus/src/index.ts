import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();

const PORT = process.env.PORT || 4005;

app.use(bodyParser.json());
app.use(routes);


app.listen(PORT, () => {
    console.log(`Running Bus on port ${PORT}`);
});

