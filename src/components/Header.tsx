import moment from 'moment';
import { ClockComponent } from './Clock';

export function Header() {
  return (
    <div className='p-2 rounded-md flex justify-between gap-2 bg-stone-900 outline-white outline outline-1 text-white w-full'>
      <img
        src='bmw.png'
        alt='logo'
        className='max-h-6 max-w-6'
      />
      <h1 className='grow'>Garazas</h1>
      <div className='flex flex-row gap-1'>
      <p>{moment().format('YYYY-MM-DD')}</p>
      <ClockComponent />
      </div>
    </div>
  );
}
