import moment from 'moment';
import { ClockComponent } from './Clock';
import { AddNewVehicleButton } from '../buttons/AddNewVehicleButton';
import NavigateButton from '../buttons/NavigateButton';
import { Link } from 'react-router';
import { AddNewTaskButton } from '../buttons/AddNewTaskButton';

export function Header() {
  return (
    <>
      <div className='flex justify-center sm:justify-between items-center text-white rounded-xl bg-stone-900 outline-white outline outline-2 p-5'>

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

        <div className='hidden sm:flex justify-between items-center gap-6 text-xl'>
          <p className='hidden md:flex'>{moment().format('YYYY-MM-DD')}</p>
          <ClockComponent />
          <AddNewVehicleButton />
          <NavigateButton label='list' to='/vehicle-list'/>
          {/* <NavigateButton label='Layout' to='/responsiveTest'/> */}
        </div>

      </div>

      <div id="navBurger" className='sm:hidden grid py-4 gap-2 text-lg items-center w-full'>
        <div className='flex flex-row justify-between'>
          <p>{moment().format('YYYY-MM-DD')}</p>
          <ClockComponent />
        </div>

        <AddNewVehicleButton />
        <NavigateButton label='list' to='/vehicle-list'/>
        {/* <NavigateButton label='Layout' to='/responsiveTest'/> */}
      </div>

    </>
  );
}

{/* ----- Old Header -----

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
        <AddNewTaskButton />
        <NavigateButton label='list' to='/vehicle-list'/>
        <NavigateButton label='task_list' to='/task-list'/>
      </div>
    </div> 

*/}
