import React, { MutableRefObject, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectVehicleType } from '../../redux/slices/vehicleTypeSlice';
import { useQuery } from 'react-query';

type VehicleTypeSelectProps = {
  dataRef: MutableRefObject<{ [key: string]: any }>;
  value?: string;
};

export function VehicleSelect(props: VehicleTypeSelectProps) {
  const { dataRef, value } = props;
  const [selectedVehicle, setSelectedVehicle] = useState(value || null);

  const {
    data: allVehicles,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['all_vehicles'],
    queryFn: async () => {
      const response = await window.select.selectAllVehicles();
      return response;
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicle(event.target.value);
  };

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current['vehicle_id'] = selectedVehicle;
  }, [dataRef, selectedVehicle]);

  useEffect(() => {
    setSelectedVehicle(value || '');
  }, [value]);

  return (
    <select
      value={selectedVehicle}
      onChange={handleChange}
      className='text-black'>
      <option value={null}>Select a vehicle</option>
      {allVehicles?.map((vehicle) => (
        <option
          key={vehicle.id}
          value={vehicle.id}>
          {vehicle.name}
        </option>
      ))}
    </select>
  );
};

export default VehicleSelect;