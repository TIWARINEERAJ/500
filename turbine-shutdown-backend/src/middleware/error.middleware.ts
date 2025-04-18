import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Error middleware caught:', err);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Default to 500 server error
  res.status(500).json({ error: 'Internal server error' });
};
