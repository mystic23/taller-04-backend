import express from 'express';
import cors from 'cors';

import taller1 from './routes/taller01.routes.js';
import taller2 from './routes/taller02.routes.js';
import taller3 from './routes/taller03.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.json({ ok: true, name: 'Taller04 - API' }));
app.get('/health', (_req, res) => res.json({ ok: true }));

app.use('/api/taller1', taller1);
app.use('/api/taller2', taller2);
app.use('/api/taller3', taller3);

export default app;
