import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Render!' });
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;