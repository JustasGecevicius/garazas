import React, { MutableRefObject, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";

type VehicleTypeSelectProps = {
  dataRef: MutableRefObject<{ [key: string]: any }>;
  value?: number;
};

export function VehicleSelect(props: VehicleTypeSelectProps) {
  const { dataRef, value } = props;
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>();

  const {
    data: allVehicles,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["all_vehicles"],
    queryFn: async () => {
      const response = await window.select.selectAllVehicles();
      return response;
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicle(Number(event.target.value));
  };

  useEffect(() => {
    if (!dataRef) return;
    dataRef.current["vehicle_id"] = selectedVehicle;
  }, [dataRef, selectedVehicle]);

  useEffect(
    function initialiseState() {
      setSelectedVehicle(value || null);
    },
    [value]
  );

  const options = useMemo(() => {
    return allVehicles?.map((vehicle) => (
      <option key={vehicle.id} value={vehicle.id}>
        {vehicle.name}
      </option>
    ));
  }, [allVehicles]);

  return (
    <select value={selectedVehicle} onChange={handleChange} className="text-black">
      <option value={null}>Select a vehicle</option>
      {options}
    </select>
  );
}

export default VehicleSelect;
