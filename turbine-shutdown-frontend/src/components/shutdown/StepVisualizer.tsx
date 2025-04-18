import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeStep, requestOverride } from '../../store/slices/shutdown.slice';
import { RootState } from '../../store';
import { Box, Button, Card, CardContent, Typography, LinearProgress } from '@mui/material';
import ValidationIndicator from '../ui/ValidationIndicator';
import ParameterGauge from '../ui/ParameterGauge';

interface StepVisualizerProps {
  step: ShutdownStep;
}

const StepVisualizer: React.FC<StepVisualizerProps> = ({ step }) => {
  const dispatch = useDispatch();
  const { currentSession, validationResults } = useSelector((state: RootState) => state.shutdown);
  
  const handleComplete = () => {
    if (currentSession && step) {
      dispatch(completeStep({
        sessionId: currentSession.id,
        stepNumber: step.stepNumber
      }));
    }
  };
  
  const handleOverride = () => {
    if (currentSession && step) {
      dispatch(requestOverride({
        sessionId: currentSession.id,
        stepNumber: step.stepNumber
      }));
    }
  };

  const allValid = validationResults.every(result => result.valid);

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Step {step.stepNumber}: {step.description}
        </Typography>
        
        <Typography variant="body1" paragraph>
          {step.detailedInstructions}
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>Validation Checks</Typography>
          {step.validations.map((validation) => (
            <ValidationIndicator 
              key={validation.parameter}
              validation={validation}
              result={validationResults.find(r => r.parameter === validation.parameter)}
            />
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          {step.validations.map((validation) => (
            <ParameterGauge
              key={validation.parameter}
              parameter={validation.parameter}
              min={validation.expectedRange[0]}
              max={validation.expectedRange[1]}
              unit={validation.units}
            />
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="contained" 
            onClick={handleComplete}
            disabled={!allValid}
          >
            Confirm and Proceed
          </Button>
          
          {step.allowOverride && (
            <Button 
              variant="outlined"
              color="secondary"
              onClick={handleOverride}
            >
              Request Override
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StepVisualizer;
