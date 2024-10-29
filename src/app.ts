import express, { Application, Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { itemsRouter } from './routes/items/items.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/menu/items', itemsRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Allo! Catch-all route.' });
});

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
