interface ValidationRule {
  parameter: string;
  expectedRange: [number, number];
  units: string;
  maxRateOfChange?: number;
}

interface ValidationResult {
  parameter: string;
  valid: boolean;
  actualValue?: number;
  expectedRange?: [number, number];
  message?: string;
}

export function validateStepParameters(
  rules: ValidationRule[],
  sensorData: Record<string, any>
): ValidationResult[] {
  return rules.map(rule => {
    const value = sensorData[rule.parameter];
    
    if (value === undefined || value === null) {
      return {
        parameter: rule.parameter,
        valid: false,
        message: 'No sensor data available'
      };
    }

    if (value < rule.expectedRange[0] || value > rule.expectedRange[1]) {
      return {
        parameter: rule.parameter,
        valid: false,
        actualValue: value,
        expectedRange: rule.expectedRange,
        message: `Value ${value}${rule.units} outside acceptable range [${rule.expectedRange[0]}, ${rule.expectedRange[1]}]${rule.units}`
      };
    }

    // Additional validation for rate of change could be added here

    return {
      parameter: rule.parameter,
      valid: true,
      actualValue: value
    };
  });
}
