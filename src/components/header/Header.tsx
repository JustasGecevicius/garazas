import moment from 'moment';
import { ClockComponent } from './Clock';
import { AddNewVehicleButton } from '../buttons/AddNewVahicleButton';
import NavigateButton from '../buttons/NavigateButton';
import { Link } from 'react-router';

export function Header() {
  return (
    <div className='flex justify-between items-center w-full p-5 text-white rounded-xl bg-stone-900 outline-white outline outline-2'>
      <Link to='/'>
        <div className='flex flex-row gap-5 items-center'>
          <img
            src='bmw.png'
            alt='logo'
            className='max-w-8 max-h-8'
          />
          <h1 className='text-2xl'>Garazas</h1>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-10 text-xl'>
        <p>{moment().format('YYYY-MM-DD')}</p>
        <ClockComponent />
        <AddNewVehicleButton />
        <NavigateButton label='list' to='/vehicle-list'/>
      </div>
    </div>
  );
}
