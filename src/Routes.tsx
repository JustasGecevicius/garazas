import { VehicleEdit } from './pages/VehicleEdit';
import { Dashboard } from './pages/Dashboard';
import { VehicleList } from './pages/VehicleList';

export const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/edit-car/:id', element: <VehicleEdit /> },
  { path: '/vehicle-list', element: <VehicleList /> },
] as const;
