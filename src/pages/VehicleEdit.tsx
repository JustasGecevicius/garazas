import { useQuery } from "react-query";
import { EditCarType } from "../App";
import { Info } from "../components/EditCarComponents/InfoSection/Info";
import { CarPictures } from "../components/EditCarComponents/PicturesSection/CarPictures";
import { RepairHistory } from "../components/EditCarComponents/RepairHistorySection/RepairHistory";
import { useParams } from "react-router";
import { useEffect, useRef } from "react";
type Props = {} & EditCarType;

export default function VehicleEdit(props: Props) {
  const { id } = useParams();

  const dataRef = useRef<{ [key: string]: any }>({});

  const { data, error, isFetching } = useQuery({
    queryKey: ["edit-vehicle", id],
    queryFn: async ({ queryKey }) => {
      const response = await window.select.selectVehicle(id);
      return response;
    },
  });

  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  function handleSave() {
    window.update.updateVehicle(dataRef.current);
  }

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex flex-row w-full h-full gap-2">
        <CarPictures data={data} dataRef={dataRef} />
        <Info data={data} dataRef={dataRef} />
        <RepairHistory data={data} dataRef={dataRef} />
      </div>
      <div>
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
          Save
        </button>
      </div>
    </div>
  );
}
