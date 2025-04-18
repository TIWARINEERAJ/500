import shutdownService from '../../src/services/shutdown.service';
import ShutdownSession from '../../src/models/shutdown.model';
import { ValidationResult } from '../../src/types';

describe('ShutdownService', () => {
  describe('startShutdownSession', () => {
    it('should create a new shutdown session', async () => {
      const mockSession = { id: 1, plantId: 1, status: 'in-progress' };
      jest.spyOn(ShutdownSession, 'create').mockResolvedValue(mockSession as any);
      
      const result = await shutdownService.startShutdownSession(1, 1);
      expect(result).toEqual(mockSession);
    });

    it('should throw error when creation fails', async () => {
      jest.spyOn(ShutdownSession, 'create').mockRejectedValue(new Error('DB error'));
      
      await expect(shutdownService.startShutdownSession(1, 1))
        .rejects.toThrow('Failed to start shutdown session');
    });
  });

  describe('validateStep', () => {
    it('should validate parameters against expected ranges', async () => {
      const mockSensorData = { MS_TEMP: 540, HRH_TEMP: 538 };
      const mockRequirements = [
        { parameter: 'MS_TEMP', expectedRange: [535, 545], units: 'C' },
        { parameter: 'HRH_TEMP', expectedRange: [535, 545], units: 'C' }
      ];
      
      jest.spyOn(shutdownService, 'getStepRequirements').mockResolvedValue(mockRequirements);
      
      const results = await shutdownService.validateStep(1, 12, mockSensorData);
      expect(results.every(r => r.valid)).toBe(true);
    });
  });
});
