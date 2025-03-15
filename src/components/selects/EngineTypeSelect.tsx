import React, { MutableRefObject, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectEngineSizeMeasurementType } from "../../redux/slices/engineSizeMeasurementTypeSlice";

type EngineSizeMeasurementTypeSelectProps = {
  dataRef: MutableRefObject<{ [key: string]: any }>;
  value?: string;
};

export function EngineSizeMeasurementTypeSelect(props: EngineSizeMeasurementTypeSelectProps) {
  const { dataRef, value: propsValue } = props;
  const [selectedEngineSize, setSelectedEngineSize] = useState<string>(propsValue || "");
  const engineSizes = useSelector(selectEngineSizeMeasurementType);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEngineSize(event.target.value);
  };

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current["EngineSizeMeasurementTypeId"] = selectedEngineSize;
  }, [selectedEngineSize]);

  useEffect(() => {
    setSelectedEngineSize(propsValue || null);
  }, [propsValue]);

  return (
    <select value={selectedEngineSize} onChange={handleChange} className="text-black">
      <option value="" disabled>
        Select an engine size
      </option>
      {engineSizes?.options?.map(({ dataValues: size }) => (
        <option key={size.id} value={size.id}>
          {size.engineSizeMeasurementType}
        </option>
      ))}
    </select>
  );
}

export default EngineSizeMeasurementTypeSelect;
