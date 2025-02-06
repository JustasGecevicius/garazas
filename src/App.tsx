import { Header } from './components/header/Header';
import { Router } from './Router';

export type EditCarType = {
  id?: string;
};

export default function App() {
  return (
    <div className='MainBody'>
      <Header />
      <Router />
    </div>
  );
}
