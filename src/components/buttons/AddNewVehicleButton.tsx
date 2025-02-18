import { useRef } from "react";
import { VehicleCreationModal } from "../modals/VehicleCreationModal";

export function AddNewVehicleButton(props) {
  const openVehicleCreationModalRef = useRef<() => void | null>(null);
  const closeVehicleCreationModalRef = useRef<() => void | null>(null);

  return (
    <div>
      <button
        className="w-full p-4 rounded-lg transition-all duration-200 hover:bg-gray-700/50 hover:scale-105 cursor-pointer"
        onClick={() => openVehicleCreationModalRef.current()}
      >
        Add new car
      </button>
      <VehicleCreationModal
        openRef={openVehicleCreationModalRef}
        closeRef={closeVehicleCreationModalRef}
      />
    </div>
  );
}
