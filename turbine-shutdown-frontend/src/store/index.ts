import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import shutdownReducer from './slices/shutdown.slice';
import sensorsReducer from './slices/sensors.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shutdown: shutdownReducer,
    sensors: sensorsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
