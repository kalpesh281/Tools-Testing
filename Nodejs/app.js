import express from 'express';

const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/hello', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Express server!!!!!!');
});


app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: 'up',
    service: 'nodejs-cicd-demo',
    timestamp: new Date().toISOString(),
  });
});

export default app;
