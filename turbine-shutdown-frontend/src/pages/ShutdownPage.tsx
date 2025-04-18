import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startShutdownSession } from '../store/slices/shutdown.slice';
import { RootState } from '../store';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import StepVisualizer from '../components/shutdown/StepVisualizer';
import ShutdownProgress from '../components/shutdown/ShutdownProgress';

const ShutdownPage: React.FC = () => {
  const dispatch = useDispatch();
  const { currentSession, currentStep, loading, error } = useSelector(
    (state: RootState) => state.shutdown
  );
  
  const handleStartShutdown = () => {
    dispatch(startShutdownSession(1)); // Assuming plant ID 1
  };

  useEffect(() => {
    // In a real app, you might check for an active session here
  }, [dispatch]);

  if (loading && !currentSession) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      {!currentSession ? (
        <Box textAlign="center" mt={5}>
          <Typography variant="h4" gutterBottom>
            Turbine Shutdown Procedure
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleStartShutdown}
          >
            Start Shutdown Procedure
          </Button>
        </Box>
      ) : (
        <>
          <ShutdownProgress currentStep={currentStep?.stepNumber} totalSteps={93} />
          {currentStep && <StepVisualizer step={currentStep} />}
        </>
      )}
    </Box>
  );
};

export default ShutdownPage;
