import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import * as ItemService from './items.service';
import { BaseItem, Item } from './item.interface';
import { checkJwt } from '../../middleware/authz.middleware';

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

/**
 * Public Routes
 */
itemsRouter.get(
  '/',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const items: Item[] = await ItemService.findAll();
      res.status(200).send(items);
    } catch (e: unknown) {
      next(e); // Use next to handle error properly
    }
  },
);

/**
 * Protected Routes
 */
//itemsRouter.use(checkJwt as RequestHandler);

// GET items/:id
itemsRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = parseInt(req.params.id, 10);
    try {
      const item = await ItemService.find(id);
      if (item) {
        res.status(200).send(item);
      } else {
        res.status(404).send({ message: 'Item not found' });
      }
    } catch (e: unknown) {
      next(e);
    }
  },
);

// POST items
itemsRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const item: BaseItem = req.body as BaseItem;
      const newItem = await ItemService.create(item);
      res.status(201).json(newItem);
    } catch (e: unknown) {
      next(e);
    }
  },
);

// PUT items/:id
itemsRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = parseInt(req.params.id, 10);

    try {
      const itemUpdate: BaseItem = req.body as BaseItem;
      const updatedItem = await ItemService.update(id, itemUpdate);

      if (updatedItem === false) {
        // Item not found, return 404
        res.status(404).json({ message: 'Item not found' });
      }

      // Item successfully updated
      res.status(200).json(updatedItem);
    } catch (e: unknown) {
      next(e);
    }
  },
);

// DELETE items/:id
itemsRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id: number = parseInt(req.params.id, 10);

      const itemDeleted = await ItemService.remove(id);

      if (!itemDeleted) {
        // Item not found, return 404
        res.status(404).json({ message: 'Item not found' });
      }

      // Item successfully deleted
      res.sendStatus(204);
    } catch (e: unknown) {
      next(e);
    }
  },
);
