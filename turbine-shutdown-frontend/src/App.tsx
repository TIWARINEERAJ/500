import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import AuthLayout from './components/auth/AuthLayout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import ShutdownPage from './pages/ShutdownPage';
import SensorsPage from './pages/SensorsPage';
import ReportsPage from './pages/ReportsPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/auth/PrivateRoute';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<AuthLayout />}>
              <Route element={<PrivateRoute />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/" element={<ShutdownPage />} />
                  <Route path="/shutdown" element={<ShutdownPage />} />
                  <Route path="/sensors" element={<SensorsPage />} />
                  <Route path="/reports" element={<ReportsPage />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
