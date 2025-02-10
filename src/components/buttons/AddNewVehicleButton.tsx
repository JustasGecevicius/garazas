import { useRef } from 'react';
import { VehicleCreationModal } from '../modals/VehicleCreationModal';

export function AddNewVehicleButton(props) {
  const openVehicleCreationModalRef = useRef<() => void | null>(null);
  const closeVehicleCreationModalRef = useRef<() => void | null>(null);

  return (
    <>
      <button
        className='px-4 py-2 border border-white rounded-md hover:outline-2 hover:outline-white hover:outline'
        onClick={() => openVehicleCreationModalRef.current()}>
        Add Vehicle
      </button>
      <VehicleCreationModal
        openRef={openVehicleCreationModalRef}
        closeRef={closeVehicleCreationModalRef}
      />
    </>
  );
}
