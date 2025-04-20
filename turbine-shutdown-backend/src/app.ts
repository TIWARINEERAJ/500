import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import authRoutes from './routes/auth.routes';
import sensorRoutes from './routes/sensor.routes';
import errorMiddleware from './middleware/error.middleware';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);
app.use('/api/auth', authRoutes);
app.use('/api/sensors', sensorRoutes);

// Error handling
app.use(errorMiddleware);

export default app;
