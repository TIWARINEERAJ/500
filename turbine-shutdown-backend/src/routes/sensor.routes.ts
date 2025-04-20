import { Router } from 'express';

const router = Router();

router.get('/sensors', (req, res) => {
  // Fetch sensor data here
  res.send('Sensor data');
});

export default router;
