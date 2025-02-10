import { ResponsiveTest } from './pages/ResponsiveTest';
import VehicleEdit from './pages/VehicleEdit';
import Dashboard from './pages/Dashboard';
import VehicleList from './pages/VehicleList';
import TaskList from './pages/TaskList';

export const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/edit-vehicle/:id', element: <VehicleEdit /> },
  { path: '/vehicle-list', element: <VehicleList /> },
  { path: '/responsiveTest', element: <ResponsiveTest/> },
  { path: '/task-list', element: <TaskList /> },
] as const;
