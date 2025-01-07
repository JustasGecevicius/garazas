import { Header } from './components/header/Header';
import { Router } from './Router';

export type EditCarType = {
  id?: string;
};

export default function App() {
  return (
    <div className='flex flex-col items-center h-screen gap-2 p-2 text-white bg-stone-800'>
      <Header />
      <Router />
    </div>
  );
}
