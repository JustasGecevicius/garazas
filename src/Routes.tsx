import { ResponsiveTest } from "./pages/ResponsiveTest";
import VehicleEdit from "./pages/VehicleEdit";
import Dashboard from "./pages/Dashboard";
import VehicleList from "./pages/VehicleList";
import TaskList from "./pages/TaskList";
import TaskEdit from "./pages/TaskEdit";

// Find a better solution that lets you split code into smaller files
// also check if this is neccessary for electron apps

export const ROUTES = {
  ROOT: "/",
  EDIT_VEHICLE: "/edit-vehicle",
  EDIT_TASK: "/edit-task",
  VEHICLE_LIST: "/vehicle-list",
  TASK_LIST: "/task-list",
};

export const routes = [
  { path: ROUTES.ROOT, element: <Dashboard /> },
  { path: `${ROUTES.EDIT_VEHICLE}/:id`, element: <VehicleEdit /> },
  { path: `${ROUTES.EDIT_TASK}/:id`, element: <TaskEdit /> },
  { path: ROUTES.VEHICLE_LIST, element: <VehicleList /> },
  { path: ROUTES.TASK_LIST, element: <TaskList /> },
  { path: "/responsiveTest", element: <ResponsiveTest /> },
] as const;
