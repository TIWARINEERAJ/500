export interface User {
  id: number;
  username: string;
  email: string;
  role: 'operator' | 'supervisor' | 'engineer' | 'administrator' | 'auditor';
  isActive: boolean;
}

export interface ShutdownSession {
  id: number;
  plantId: number;
  startTime: string;
  endTime?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'aborted';
  initiatedBy: number;
  completedBy?: number;
}

export interface ShutdownStep {
  stepNumber: number;
  description: string;
  detailedInstructions: string;
  expectedDuration: number;
  criticalityLevel: 'safety-critical' | 'operational' | 'informational';
  requiredRole: string;
  validations: ValidationRule[];
  userInteractions: UserInteraction[];
  allowOverride: boolean;
}

export interface ValidationRule {
  parameter: string;
  expectedRange: [number, number];
  units: string;
  validationPeriod: number;
}

export interface ValidationResult {
  parameter: string;
  valid: boolean;
  actualValue?: number;
  expectedRange?: [number, number];
  message?: string;
}

export interface UserInteraction {
  type: 'Confirmation' | 'Input' | 'Selection';
  message: string;
  requiresSignoff: boolean;
  options?: string[];
}

export interface SensorReading {
  parameter: string;
  value: number;
  unit: string;
  timestamp: string;
  quality: number;
}

export interface AppThunk {
  (dispatch: any, getState: any): Promise<void>;
}
