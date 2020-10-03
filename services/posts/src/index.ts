import express from 'express';
import Routes from './routes/routes';
const app =  express();


const PORT = process.env.PORT || 8080;

app.use(Routes);

app.listen(PORT, () => {
    console.log(`Running service post on port ${PORT}`);
});

