import { Router } from 'express';
import shutdownController from '../controllers/shutdown.controller';
import { authenticate } from '../middleware/auth.middleware';
import { check } from 'express-validator';
import rateLimit from 'express-rate-limit';

const router = Router();

// Configure rate limiter: maximum of 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.post(
  '/',
  limiter,
  authenticate,
  [check('plantId').isInt().withMessage('Plant ID must be an integer')],
  shutdownController.startShutdown
);

router.post(
  '/:sessionId/validate',
  limiter,
  authenticate,
  [
    check('sessionId').isInt().withMessage('Session ID must be an integer'),
    check('stepNumber').isInt().withMessage('Step number must be an integer')
  ],
  shutdownController.validateStep
);

export default router;
