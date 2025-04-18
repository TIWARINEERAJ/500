import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import api from '../../api';
import { ShutdownSession, ShutdownStep, ValidationResult } from '../../types';

interface ShutdownState {
  currentSession: ShutdownSession | null;
  currentStep: ShutdownStep | null;
  validationResults: ValidationResult[];
  loading: boolean;
  error: string | null;
}

const initialState: ShutdownState = {
  currentSession: null,
  currentStep: null,
  validationResults: [],
  loading: false,
  error: null
};

const shutdownSlice = createSlice({
  name: 'shutdown',
  initialState,
  reducers: {
    startShutdownStart(state) {
      state.loading = true;
      state.error = null;
    },
    startShutdownSuccess(state, action: PayloadAction<ShutdownSession>) {
      state.currentSession = action.payload;
      state.loading = false;
    },
    startShutdownFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentStep(state, action: PayloadAction<ShutdownStep>) {
      state.currentStep = action.payload;
    },
    setValidationResults(state, action: PayloadAction<ValidationResult[]>) {
      state.validationResults = action.payload;
    },
    completeStepSuccess(state, action: PayloadAction<ShutdownStep>) {
      state.currentStep = action.payload;
    }
  }
});

export const {
  startShutdownStart,
  startShutdownSuccess,
  startShutdownFailure,
  setCurrentStep,
  setValidationResults,
  completeStepSuccess
} = shutdownSlice.actions;

export const startShutdownSession = (plantId: number): AppThunk => async (dispatch) => {
  try {
    dispatch(startShutdownStart());
    const session = await api.shutdown.startSession(plantId);
    dispatch(startShutdownSuccess(session));
    const step = await api.shutdown.getCurrentStep(session.id);
    dispatch(setCurrentStep(step));
  } catch (error) {
    dispatch(startShutdownFailure(error.message));
  }
};

export const completeStep = (sessionId: number, stepNumber: number): AppThunk => async (dispatch) => {
  try {
    await api.shutdown.completeStep(sessionId, stepNumber);
    const nextStep = await api.shutdown.getCurrentStep(sessionId);
    dispatch(completeStepSuccess(nextStep));
  } catch (error) {
    // Handle error
  }
};

export default shutdownSlice.reducer;
