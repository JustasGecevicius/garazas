import React, { MutableRefObject, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectEngineSizeMeasurementType } from '../../redux/slices/engineSizeMeasurementTypeSlice';

type EngineSizeMeasurementTypeSelectProps = {
  dataRef: MutableRefObject<{ [key: string]: any }>,
};

export function EngineSizeMeasurementTypeSelect(props: EngineSizeMeasurementTypeSelectProps) {
  const { dataRef } = props;
  const [selectedEngineSize, setSelectedEngineSize] = useState<string>('');
  const engineSizes = useSelector(selectEngineSizeMeasurementType);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEngineSize(event.target.value);
  };


  useEffect(() => {
    if (!dataRef) return;
    dataRef.current['engine_size_measurement_type_id'] = selectedEngineSize;
  }, [selectedEngineSize]);

  return (
      <select value={selectedEngineSize} onChange={handleChange}>
        <option value="" disabled>Select an engine size</option>
        {engineSizes.options.map((size) => (
          <option key={size.id} value={size.id}>
            {size.measurement_unit}
          </option>
        ))}
      </select>
  );
};

export default EngineSizeMeasurementTypeSelect;