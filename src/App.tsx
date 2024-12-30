import { HashRouter, Route, Routes } from 'react-router';
import { Header } from './components/header/Header';
import { Dashboard } from './pages/Dashboard';
import { CarEdit } from './pages/CarEdit';

export type EditCarType = {
  id?: string
}

export default function App() {
  return (
    <div className='p-2 bg-stone-800 h-screen flex flex-col gap-2 items-center text-white'>
      <Header />
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={<Dashboard />}
          />
          <Route
            path='/edit-car/:id'
            element={<CarEdit/>}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}
