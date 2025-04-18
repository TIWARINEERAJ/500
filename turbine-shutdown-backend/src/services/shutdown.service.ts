import ShutdownSession from '../models/shutdown.model';
import User from '../models/user.model';
import { ValidationResult } from '../types';
import { validateStepParameters } from '../utils/validation';
import logger from '../utils/logger';

class ShutdownService {
  async startShutdownSession(plantId: number, userId: number): Promise<ShutdownSession> {
    try {
      return await ShutdownSession.create({
        plant_id: plantId,
        status: 'in-progress',
        initiated_by: userId
      });
    } catch (error) {
      logger.error('Failed to start shutdown session', error);
      throw new Error('Failed to start shutdown session');
    }
  }

  async getCurrentStep(sessionId: number): Promise<ShutdownStep | null> {
    return await ShutdownStep.findOne({
      where: { session_id: sessionId, status: 'in-progress' }
    });
  }

  async validateStep(
    sessionId: number,
    stepNumber: number,
    sensorData: Record<string, any>
  ): Promise<ValidationResult[]> {
    const stepRequirements = await this.getStepRequirements(stepNumber);
    return validateStepParameters(stepRequirements, sensorData);
  }

  private async getStepRequirements(stepNumber: number): Promise<StepRequirements> {
    // Implementation would fetch from database or configuration
    throw new Error('Not implemented');
  }
}

export default new ShutdownService();
