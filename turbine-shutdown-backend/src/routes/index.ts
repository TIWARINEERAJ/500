import { Router } from 'express';
import authRoutes from './auth.routes';
import shutdownRoutes from './shutdown.routes';
import sensorRoutes from './sensor.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/shutdown', shutdownRoutes);
router.use('/sensors', sensorRoutes);

export default router;
