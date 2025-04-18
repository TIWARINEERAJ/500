import { Router } from 'express';
import shutdownController from '../controllers/shutdown.controller';
import { authenticate } from '../middleware/auth.middleware';
import { check } from 'express-validator';

const router = Router();

router.post(
  '/',
  authenticate,
  [check('plantId').isInt().withMessage('Plant ID must be an integer')],
  shutdownController.startShutdown
);

router.post(
  '/:sessionId/validate',
  authenticate,
  [
    check('sessionId').isInt().withMessage('Session ID must be an integer'),
    check('stepNumber').isInt().withMessage('Step number must be an integer')
  ],
  shutdownController.validateStep
);

export default router;
