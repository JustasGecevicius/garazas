import React, { MutableRefObject, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFuelType } from '../../redux/slices/fuelTypeSlice';

type PropsType = {
  dataRef: MutableRefObject<{ [key: string]: any }>,
  value?: string,
}

export function FuelTypeSelect(props: PropsType) {
  const { dataRef, value: propsValue} = props;
  const [selectedFuelType, setSelectedFuelType] = useState<string>(propsValue || '');
  const fuelTypes = useSelector(selectFuelType);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFuelType(event.target.value);
  };

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current['fuel_type_id'] = selectedFuelType;
  }, [selectedFuelType]);

  useEffect(() => {
    setSelectedFuelType(propsValue || '');
  }, [propsValue]);

  return (
      <select value={selectedFuelType} onChange={handleChange} className='text-black'>
        <option value="" disabled>Select a fuel type</option>
        {fuelTypes.options.map((type) => (
          <option key={type.id} value={type.id}>
            {type.fuel_type}
          </option>
        ))}
      </select>
  );
};

export default FuelTypeSelect;