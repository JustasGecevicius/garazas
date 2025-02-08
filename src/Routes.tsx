import { VehicleEdit } from './pages/VehicleEdit';
import { Dashboard } from './pages/Dashboard';
import { VehicleList } from './pages/VehicleList';
import { ResponsiveTest } from './pages/ResponsiveTest';

export const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/edit-vehicle/:id', element: <VehicleEdit /> },
  { path: '/vehicle-list', element: <VehicleList /> },
  { path: '/responsiveTest', element: <ResponsiveTest/> },
] as const;
