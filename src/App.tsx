import { useEffect } from 'react';
import { Header } from './components/header/Header';
import { Router } from './Router';
import { initialiseEngineTypes } from './redux/slices/engineSizeMeasurementTypeSlice';
import { useDispatch } from 'react-redux';
import { initialiseFuelType, } from './redux/slices/fuelTypeSlice';
import { initialiseVehicleType} from './redux/slices/vehicleTypeSlice';

export type EditCarType = {
  id?: string;
};

export default function App() {
  const dispatch = useDispatch();

  useEffect(function initialSetup() {
    const func = async () => {
      const engineMeasurementTypePromise = window.select.selectEngineSizeMeasurementType();
      const fuelTypePromise = window.select.selectFuelType();
      const selectVehicleTypePromise = window.select.selectVehicleType();
      const resolvedPromises = await Promise.all([engineMeasurementTypePromise, fuelTypePromise, selectVehicleTypePromise]);
      dispatch(initialiseEngineTypes(resolvedPromises[0]));
      dispatch(initialiseFuelType(resolvedPromises[1]));
      dispatch(initialiseVehicleType(resolvedPromises[2]));
    }
    func();
  }, [])
  
  return (
    <div className='flex flex-col items-center h-screen gap-2 p-2 text-white bg-stone-800'>
      <Header />
      <Router />
    </div>
  );
}
