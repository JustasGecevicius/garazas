import moment from 'moment';
import { ClockComponent } from './Clock';
import { AddNewVehicleButton } from '../buttons/AddNewVehicleButton';
import NavigateButton from '../buttons/NavigateButton';
import { Link } from 'react-router';
import { AddNewTaskButton } from '../buttons/AddNewTaskButton';

export function Header() {
  return (
    <div className='flex justify-between w-full gap-2 p-2 text-white rounded-md bg-stone-900 outline-white outline outline-1'>
      <Link to='/' className='flex flex-row gap-1'>
      <img
        src='bmw.png'
        alt='logo'
        className='max-h-6 max-w-6'
      />
      <h1 className='grow'>Garazas</h1>
      </Link>
      <div className='flex flex-row gap-1'>
        <p>{moment().format('YYYY-MM-DD')}</p>
        <ClockComponent />
        <AddNewVehicleButton />
        <AddNewTaskButton />
        <NavigateButton label='list' to='/vehicle-list'/>
        <NavigateButton label='task_list' to='/task-list'/>
      </div>
    </div>
  );
}
