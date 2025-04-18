import { Request, Response } from 'express';
import shutdownService from '../services/shutdown.service';
import { validationResult } from 'express-validator';

class ShutdownController {
  async startShutdown(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { plantId } = req.body;
      const userId = req.user.id; // From authentication middleware
      
      const session = await shutdownService.startShutdownSession(plantId, userId);
      return res.status(201).json(session);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async validateStep(req: Request, res: Response) {
    try {
      const { sessionId } = req.params;
      const { stepNumber } = req.body;
      
      // In a real implementation, you would get sensor data from the request or integration service
      const sensorData = {};
      
      const validationResults = await shutdownService.validateStep(
        parseInt(sessionId),
        stepNumber,
        sensorData
      );
      
      return res.json({ validationResults });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new ShutdownController();
