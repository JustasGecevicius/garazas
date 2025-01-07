import { CarEdit } from './pages/CarEdit';
import { Dashboard } from './pages/Dashboard';

export const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/edit-car/:id', element: <CarEdit /> },
] as const;
