import { HashRouter, Route, Routes } from 'react-router';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard.js';

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
        </Routes>
      </HashRouter>
    </div>
  );
}
