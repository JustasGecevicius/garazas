import { useEffect, useRef, type MutableRefObject } from 'react';
import { BaseModalWrapper } from './BaseModalWrapper';

type PropsType = {
  openRef: MutableRefObject<() => void>;
  closeRef: MutableRefObject<() => void>;
};

export function VehicleCreationModal(props: PropsType) {
  const { closeRef, openRef } = props;

  function handleFormSubmit() {}

  return (
    <BaseModalWrapper
      closeRef={closeRef}
      openRef={openRef}>
      <form
        className='grid grid-cols-2 gap-2'
        onSubmit={handleFormSubmit}>
        <input
          type='text'
          placeholder='name'
        />
        <input
          type='text'
          placeholder='model'
        />
        <input
          type='text'
          placeholder='engine_size'
        />
        <input
          type='text'
          placeholder='engine_size_measurement_type_id'
        />
        <input
          type='text'
          placeholder='vin_code'
        />
        <input
          type='text'
          placeholder='make'
        />
        <input
          type='text'
          placeholder='fuel_type_id'
        />
        <input
          type='number'
          placeholder='odometer'
        />
        <input
          type='date'
          placeholder='fabrication_year'
        />
        <input
          type='date'
          placeholder='tech_inspection_due_date'
        />
        <input
          type='text'
          placeholder='note'
        />
        <select />
        <input
          type='text'
          placeholder='plate_number'
        />
        <input
          type='text'
          placeholder='vehicle_type_id'
        />
      </form>
    </BaseModalWrapper>
  );
}
