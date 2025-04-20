export interface ShutdownStep {
  id: number;
  sessionId: number;
  stepNumber: number;
  description: string;
  completed: boolean;
  timestamp: Date;
}

export interface StepRequirements {
  stepNumber: number;
  requiredSensors: string[];
}
