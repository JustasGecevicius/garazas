import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectVehicleType } from '../../redux/slices/vehicleTypeSlice';

function VehicleTypeSelect() {
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('');
  const vehicleTypes = useSelector(selectVehicleType);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicleType(event.target.value);
  };

  return (
    <div>
      <label htmlFor="vehicleType">Select Vehicle Type: </label>
      <select value={selectedVehicleType} onChange={handleChange}>
        <option value={null} disabled>Select a vehicle type</option>
        {vehicleTypes.options.map((type) => (
          <option key={type.id} value={type.id}>
            {type.vehicle_type}
          </option>
        ))}
      </select>
      {selectedVehicleType && <p>You selected: {selectedVehicleType}</p>}
    </div>
  );
};

export default VehicleTypeSelect;