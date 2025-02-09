import { MutableRefObject, useRef } from 'react';
import { BaseModalWrapper } from './BaseModalWrapper';
import VehicleTypeSelect from '../selects/VehicleTypeSelect';
import { EngineSizeMeasurementTypeSelect } from '../selects/EngineTypeSelect';
import FuelTypeSelect from '../selects/FuelTypeSelect';
import { TextInput } from '../Inputs/TextInput';
import { NumberInput } from '../Inputs/NumberInput';
import { DateInput } from '../Inputs/DateInput';
import { useDispatch } from 'react-redux';
import { toggleVehicleListRefetchState } from '../../redux/slices/vehicleListRefetchSlice';

type PropsType = {
  openRef: MutableRefObject<() => void>;
  closeRef: MutableRefObject<() => void>;
};

export function VehicleCreationModal(props: PropsType) {
  const { closeRef, openRef } = props;

  const dataRef = useRef<{ [key: string]: any }>({});

  const dispatch = useDispatch();
  
  function submitVehicle() {
    console.log(dataRef?.current);
    window.create.createVehicle(dataRef?.current);
    dispatch(toggleVehicleListRefetchState())
    closeRef.current();
  }

  return (
    <BaseModalWrapper
      closeRef={closeRef}
      openRef={openRef}>
        <div className='grid grid-cols-2 gap-2'>
        <TextInput name='name' dataRef={dataRef} />
        <TextInput name='model' dataRef={dataRef} />
        <NumberInput name='engine_size' dataRef={dataRef} />
        <FuelTypeSelect dataRef={dataRef}/>
        <TextInput name='vin_code' dataRef={dataRef} />
        <TextInput name='make' dataRef={dataRef} /> 
        {/* <VehicleMakeSelect dataRef={dataRef} />  */}
        <EngineSizeMeasurementTypeSelect dataRef={dataRef}/>
        <NumberInput name='engine_size' dataRef={dataRef} />
        <NumberInput name='odometer' dataRef={dataRef} />
        <DateInput name='fabrication_year' dataRef={dataRef} /> 
        <DateInput name='tech_inspection_due_date' dataRef={dataRef} /> 
        <TextInput name='note' dataRef={dataRef} /> 
        <TextInput name='plate_number' dataRef={dataRef} /> 
        <VehicleTypeSelect dataRef={dataRef}/>
        <div className='flex justify-center col-span-2'>
          <button
            className='rounded-sm'
            onClick={submitVehicle}>
            Save
          </button>
        </div>
        </div>
    </BaseModalWrapper>
  );
}
