import {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  MutableRefObject,
  SyntheticEvent,
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
      <form className='grid grid-cols-2 gap-2'>
        <input
          type='text'
          placeholder='name'
          value={vehicleCreationData?.name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='model'
          value={vehicleCreationData?.model}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='engine_size'
          value={vehicleCreationData?.engine_size}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='engine_size_measurement_type_id'
          value={vehicleCreationData?.engine_size_measurement_type_id}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='vin_code'
          value={vehicleCreationData?.vin_code}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='make'
          value={vehicleCreationData?.make}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='fuel_type_id'
          value={vehicleCreationData?.fuel_type_id}
          onChange={handleInputChange}
        />
        <input
          type='number'
          placeholder='odometer'
          value={vehicleCreationData?.odometer}
          onChange={handleInputChange}
        />
        <input
          type='date'
          placeholder='fabrication_year'
          value={vehicleCreationData?.fabrication_year}
          onChange={handleInputChange}
        />
        <input
          type='date'
          placeholder='tech_inspection_due_date'
          value={vehicleCreationData?.tech_inspection_due_date}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='note'
          value={vehicleCreationData?.note}
          onChange={handleInputChange}
        />
        <select />
        <input
          type='text'
          placeholder='plate_number'
          value={vehicleCreationData?.plate_number}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='vehicle_type_id'
          value={vehicleCreationData?.vehicle_type_id}
          onChange={handleInputChange}
        />
        <div className='flex justify-center col-span-2'>
          <button
            className='rounded-sm'
            onClick={submitVehicle}>
            Save
          </button>
        </div>
      </form>
    </BaseModalWrapper>
  );
}
