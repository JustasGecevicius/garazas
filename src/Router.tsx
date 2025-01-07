import { HashRouter, Route, Routes } from 'react-router';
import { Dashboard } from './pages/Dashboard';
import { CarEdit } from './pages/CarEdit';
import { routes } from './Routes';

export function Router() {
  return (
    <HashRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </HashRouter>
  );
}
