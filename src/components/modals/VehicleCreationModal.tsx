import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type MutableRefObject,
  type SyntheticEvent,
} from 'react';
import { BaseModalWrapper } from './BaseModalWrapper';

type PropsType = {
  openRef: MutableRefObject<() => void>;
  closeRef: MutableRefObject<() => void>;
  dataRef?: MutableRefObject<{ [key: string]: any }>;
};

export function VehicleCreationModal(props: PropsType) {
  const { closeRef, openRef, dataRef } = props;

  const [vehicleCreationData, setVehicleCreationData] = useState<any>({});

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    const { value, placeholder } = target;
    setVehicleCreationData((prevState) => ({
      ...prevState,
      [placeholder]: value,
    }));
  }

  function submitVehicle() {
    // @ts-ignore
    window.create.createVehicle(vehicleCreationData);
  }

  return (
    <BaseModalWrapper
      closeRef={closeRef}
      openRef={openRef}>
      <form className='grid grid-cols-2 gap-3 p-2'>
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='name'
          value={vehicleCreationData?.name}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='model'
          value={vehicleCreationData?.model}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='engine_size'
          value={vehicleCreationData?.engine_size}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='engine_size_measurement_type_id'
          value={vehicleCreationData?.engine_size_measurement_type_id}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='vin_code'
          value={vehicleCreationData?.vin_code}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='make'
          value={vehicleCreationData?.make}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='fuel_type_id'
          value={vehicleCreationData?.fuel_type_id}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='number'
          placeholder='odometer'
          value={vehicleCreationData?.odometer}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='date'
          placeholder='fabrication_year'
          value={vehicleCreationData?.fabrication_year}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='date'
          placeholder='tech_inspection_due_date'
          value={vehicleCreationData?.tech_inspection_due_date}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='note'
          value={vehicleCreationData?.note}
          onChange={handleInputChange}
        />
        <select 
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='plate_number'
          value={vehicleCreationData?.plate_number}
          onChange={handleInputChange}
        />
        <input
          className='flex flex-row border rounded-md bg-gray-100 p-1 focus-within:outline-2 focus-within:outline-gray-600'
          type='text'
          placeholder='vehicle_type_id'
          value={vehicleCreationData?.vehicle_type_id}
          onChange={handleInputChange}
        />
        <div className='flex justify-center items-center m-2 col-span-2 h-10'>
          <button
            className='flex flex-row text-center px-10 border rounded-md bg-gray-100 p-1 hover:border-2 hover:outline-gray-600 hover:bg-gray-200'
            onClick={submitVehicle}>
            Išsaugoti
          </button>
        </div>
      </form>
    </BaseModalWrapper>
  );
}
