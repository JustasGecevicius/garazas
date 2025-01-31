import { HashRouter, Route, Routes } from 'react-router';
import { routes } from './Routes';

export function Router() {
  return (
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          />
        ))}
      </Routes>
  );
}
