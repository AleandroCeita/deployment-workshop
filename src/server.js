import express from 'express';

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Render!' });
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API listening on port ${port}`);
});