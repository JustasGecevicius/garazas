import React, { MutableRefObject, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectVehicleType } from "../../redux/slices/vehicleTypeSlice";

type VehicleTypeSelectProps = {
  dataRef: MutableRefObject<{ [key: string]: any }>;
  value?: string;
};

export function VehicleTypeSelect(props: VehicleTypeSelectProps) {
  const { dataRef, value } = props;
  const [selectedVehicleType, setSelectedVehicleType] = useState(value || "");
  const vehicleTypes = useSelector(selectVehicleType);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicleType(event.target.value);
  };

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current["VehicleTypeId"] = selectedVehicleType;
  }, [selectedVehicleType]);

  useEffect(() => {
    setSelectedVehicleType(value || "");
  }, [value]);

  return (
    <select value={selectedVehicleType} onChange={handleChange} className="text-black">
      <option value={null} disabled>
        Select a vehicle type
      </option>
      {vehicleTypes?.options?.map((type) => (
        <option key={type.id} value={type.id}>
          {type.vehicleType}
        </option>
      ))}
    </select>
  );
}

export default VehicleTypeSelect;
